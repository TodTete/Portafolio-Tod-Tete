import { InteractiveCodeScreen } from '../InteractiveCodeScreen';
import { ScrollAnimationWrapper } from '../ScrollAnimationWrapper';

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-glow rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-glow rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollAnimationWrapper
            animation="slide-in-left"
            className="text-center lg:text-left"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">Hola, soy</p>
                <h1 className="text-4xl md:text-6xl font-bold animate-slide-up relative inline-block">
                  <span className="relative">
                    {/* Glow behind */}
                    <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-30 rounded-lg"></span>

                    {/* Animated gradient text */}
                    <span className="gradient-text bg-[length:200%_200%] animate-gradient-move relative z-10">
                      Ricardo Vallejo
                    </span>
                  </span>
                  <br />
                  <span className="text-3xl md:text-5xl text-muted-foreground">
                    Full-Stack Developer
                  </span>
                </h1>
              </div>

              <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in-delay-1">
                Ingeniero en formación apasionado por la nube, DevOps, blockchain y el
                desarrollo de soluciones multiplataforma con impacto real. Participo en
                hackathones y eventos como AWS Day y Google Cloud Next.
              </p>
            </div>
          </ScrollAnimationWrapper>

          {/* Right Content */}
          <ScrollAnimationWrapper
            animation="slide-in-right"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <InteractiveCodeScreen className="w-full max-w-lg h-96 transform hover:scale-105 transition-transform duration-500" />

              {/* Decorative Pulses */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-ping opacity-60"></div>
              <div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent rounded-full animate-ping opacity-60"
                style={{ animationDelay: '1s' }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-code-keyword rounded-full animate-ping opacity-60"
                style={{ animationDelay: '0.5s' }}
              ></div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
