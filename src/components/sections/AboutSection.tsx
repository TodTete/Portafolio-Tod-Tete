import { ScrollAnimationWrapper } from '../ScrollAnimationWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Cloud, ShieldCheck, Activity } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Sobre Mí</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Apasionado por la tecnología, la nube y el impacto positivo de la innovación
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper animation="slide-in-left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy <strong>Ricardo Vallejo Sánchez</strong>, estudiante de Ingeniería en Desarrollo y Gestión de Software Multiplataforma, con experiencia en desarrollo Full-Stack y enfoque en soluciones basadas en datos, DevOps y cloud computing.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                He participado en eventos tecnológicos como AWS Community Day, Google Cloud Next y hackathones Web3, además de proyectos en ciberseguridad y blockchain. Mi objetivo es desarrollar tecnología útil, innovadora y de impacto real.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Frontend</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• React & Angular</li>
                    <li>• Tailwind CSS</li>
                    <li>• Laravel (Blade)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Backend & DevOps</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Node.js, Spring Boot, PHP</li>
                    <li>• AWS & Google Cloud</li>
                    <li>• Jenkins, Docker, Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Brain className="w-8 h-8 mx-auto text-primary mb-2" />
                  <h4 className="font-semibold mb-2">Aprendizaje Continuo</h4>
                  <p className="text-sm text-muted-foreground">
                    Siempre busco dominar nuevas tecnologías emergentes
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Cloud className="w-8 h-8 mx-auto text-primary mb-2" />
                  <h4 className="font-semibold mb-2">Cloud & DevOps</h4>
                  <p className="text-sm text-muted-foreground">
                    Experiencia práctica en entornos cloud y automatización
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <ShieldCheck className="w-8 h-8 mx-auto text-primary mb-2" />
                  <h4 className="font-semibold mb-2">Ciberseguridad</h4>
                  <p className="text-sm text-muted-foreground">
                    En constante exploración de la seguridad en sistemas modernos
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Activity className="w-8 h-8 mx-auto text-primary mb-2" />
                  <h4 className="font-semibold mb-2">Impacto Real</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprometido con desarrollar soluciones útiles y escalables
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
