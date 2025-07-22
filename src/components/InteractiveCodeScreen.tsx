import { useState, useEffect, useRef } from 'react';

interface InteractiveCodeScreenProps {
  className?: string;
}

const codeLines = [
  { text: "import { useState, useEffect } from 'react';", type: "import" },
  { text: "", type: "empty" },
  { text: "const Portfolio = () => {", type: "function" },
  { text: "  const [isLoading, setIsLoading] = useState(true);", type: "code" },
  { text: "  const [projects, setProjects] = useState([]);", type: "code" },
  { text: "", type: "empty" },
  { text: "  useEffect(() => {", type: "hook" },
  { text: "    // Fetching portfolio data...", type: "comment" },
  { text: "  }, []);", type: "hook" },
  { text: "", type: "empty" },
  { text: "  return (", type: "return" },
  { text: "    <div className='portfolio-container'>", type: "jsx" },
  { text: "      {isLoading ? (", type: "jsx" },
  { text: "        <LoadingSpinner />", type: "jsx" },
  { text: "      ) : (", type: "jsx" },
  { text: "        <ProjectGrid projects={projects} />", type: "jsx" },
  { text: "      )}", type: "jsx" },
  { text: "    </div>", type: "jsx" },
  { text: "  );", type: "return" },
  { text: "};", type: "function" },
];

const errorMessages = [
  "TypeError: Cannot read property 'map' of undefined",
  "ReferenceError: fetchProjects is not defined",
  "SyntaxError: Unexpected token '}'",
  "Error: Failed to compile",
];

export const InteractiveCodeScreen = ({ className = "" }: InteractiveCodeScreenProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<Array<{ text: string, isComplete: boolean }>>([]);
  const [screenState, setScreenState] = useState<'normal' | 'glitch' | 'error' | 'bsod'>('normal');
  const [clickCount, setClickCount] = useState(0);
  const [bsodCount, setBsodCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [currentError, setCurrentError] = useState("");
  const [currentTypingLine, setCurrentTypingLine] = useState("");
  const [typingProgress, setTypingProgress] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isTyping || screenState !== 'normal') return;

    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];
      if (typingProgress === 0) setCurrentTypingLine("");
      if (typingProgress <= currentLine.text.length) {
        setTimeout(() => {
          setCurrentTypingLine(currentLine.text.substring(0, typingProgress));
          setTypingProgress(prev => prev + 1);
        }, Math.random() * 50 + 30);
      } else {
        setDisplayedLines(prev => [...prev, { text: currentLine.text, isComplete: true }]);
        setCurrentLineIndex(prev => prev + 1);
        setTypingProgress(0);
        setCurrentTypingLine("");
      }
    } else {
      setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setTypingProgress(0);
        setCurrentTypingLine("");
      }, 2000);
    }
  }, [currentLineIndex, typingProgress, isTyping, screenState]);

  const handleScreenClick = () => {
    if (screenState === 'bsod') return;
    setClickCount(prev => prev + 1);

    if (clickCount >= 4) {
      setBsodCount(prev => prev + 1);
      setScreenState('glitch');
      setIsTyping(false);
      setTimeout(() => {
        setScreenState('bsod');
        setLoadingProgress(0);
        const progressInterval = setInterval(() => {
          setLoadingProgress(prev => {
            if (prev >= 100) {
              clearInterval(progressInterval);
              return 100;
            }
            return prev + Math.random() * 15 + 5;
          });
        }, 200);
        setTimeout(() => {
          clearInterval(progressInterval);
          setScreenState('normal');
          setClickCount(0);
          setDisplayedLines([]);
          setCurrentLineIndex(0);
          setTypingProgress(0);
          setCurrentTypingLine("");
          setLoadingProgress(0);
          setIsTyping(true);
        }, 3000 + bsodCount * 2000);
      }, 800);
    } else {
      setScreenState('glitch');
      setIsTyping(false);
      setTimeout(() => {
        setScreenState('error');
        setCurrentError(errorMessages[Math.floor(Math.random() * errorMessages.length)]);
        setTimeout(() => {
          setScreenState('normal');
          setCurrentError("");
          setIsTyping(true);
        }, 2000);
      }, 500);
    }
  };

  const getLineColor = (text: string) => {
    if (text.startsWith('import') || text.startsWith('const') || text.startsWith('function')) {
      return 'text-code-keyword';
    }
    if (text.includes('//')) {
      return 'text-code-comment';
    }
    if (text.includes("'") || text.includes('"')) {
      return 'text-code-string';
    }
    return 'text-code-text';
  };

  if (screenState === 'bsod') {
    return (
      <div
        ref={screenRef}
        className={`${className} bg-blue-600 text-white flex flex-col p-4 cursor-pointer font-mono h-full overflow-hidden`}
        onClick={handleScreenClick}
      >
        <div className="text-6xl md:text-8xl mb-4">:(</div>
        <div className="text-xl md:text-2xl font-bold mb-4">Tu PC se ha encontrado con un problema y debe reiniciarse.</div>
        <div className="text-sm md:text-base mb-4">Recopilando información del error...</div>
        <div className="text-sm md:text-base mb-8">{Math.floor(loadingProgress)}% completado</div>
        <div className="text-xs md:text-sm mt-auto">
          Visita https://www.windows.com/stopcode <br />
          Código de detención: DEVELOPER_OVERLOAD_EXCEPTION
        </div>
      </div>
    );
  }

  return (
    <div
      ref={screenRef}
      className={`code-screen ${screenState} ${className} p-6 font-mono text-sm leading-relaxed cursor-pointer transition-all duration-300 hover:shadow-glow`}
      onClick={handleScreenClick}
    >
      <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-destructive rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-primary rounded-full" />
        </div>
        <div className="text-muted-foreground text-xs">portfolio.tsx</div>
      </div>

      {/* Scrollable area con código y errores */}
      <div className="space-y-2 max-h-72 overflow-y-auto pr-1 bg-background/10 rounded border border-border/30 p-2">
        {screenState === 'error' && currentError && (
          <div className="bg-destructive/20 border border-destructive text-destructive p-3 rounded text-xs animate-pulse">
            <div className="font-bold mb-1">ERROR:</div>
            <div>{currentError}</div>
          </div>
        )}

        {displayedLines.map((line, index) => (
          <div key={index} className="flex">
            <span className="text-muted-foreground w-8 text-right mr-4 select-none">
              {index + 1}
            </span>
            <span className={getLineColor(line.text)}>{line.text}</span>
          </div>
        ))}

        {isTyping && screenState === 'normal' && currentTypingLine && (
          <div className="flex">
            <span className="text-muted-foreground w-8 text-right mr-4">
              {displayedLines.length + 1}
            </span>
            <span className={getLineColor(currentTypingLine)}>
              {currentTypingLine}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                |
              </span>
            </span>
          </div>
        )}
      </div>

    </div>
  );
};
