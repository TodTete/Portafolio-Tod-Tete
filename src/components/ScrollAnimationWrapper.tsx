import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'bounce-in';
  threshold?: number;
  className?: string;
}

export const ScrollAnimationWrapper = ({ 
  children, 
  animation = 'fade-in-up',
  threshold = 0.1,
  className = ""
}: ScrollAnimationWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in-up':
        return 'animate-fade-in-up';
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'bounce-in':
        return 'animate-bounce-in';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div 
      ref={elementRef} 
      className={`transition-all duration-300 ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};