import { ScrollAnimationWrapper } from '../ScrollAnimationWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Cloud, ShieldCheck, Activity } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span className="gradient-text">Sobre Mí</span>
              <span className="block h-[3px] w-14 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto mt-3 animate-pulse" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Apasionado por la tecnología, la nube y el impacto positivo de la innovación
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <ScrollAnimationWrapper animation="slide-in-left">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Soy <span className="font-semibold text-foreground">Ricardo Vallejo Sánchez</span>, estudiante de Ingeniería en Desarrollo y Gestión de Software Multiplataforma, con experiencia en desarrollo Full-Stack y enfoque en soluciones basadas en datos, DevOps y cloud computing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  He participado en eventos como <span className="font-medium">AWS Community Day</span>, <span className="font-medium">Google Cloud Next</span> y hackathones Web3. También he trabajado en proyectos de ciberseguridad y blockchain. Mi objetivo: construir tecnología útil, innovadora y de impacto real.
                </p>
              </div>

              {/* Highlights / Métricas */}
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 text-center hover:translate-y-[-2px] transition">
                  <div className="text-2xl font-bold">+3</div>
                  <div className="text-xs text-muted-foreground">Años creando</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 text-center hover:translate-y-[-2px] transition">
                  <div className="text-2xl font-bold">+12</div>
                  <div className="text-xs text-muted-foreground">Proyectos</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 text-center hover:translate-y-[-2px] transition">
                  <div className="text-2xl font-bold">+6</div>
                  <div className="text-xs text-muted-foreground">Certificaciones</div>
                </div>
              </div>

              {/* Tech Pills */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm tracking-wide text-muted-foreground">Stack principal</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React', 'Angular', 'Tailwind', 'Node.js', 'Spring Boot',
                    'PHP', 'Docker', 'Firebase', 'GCP', 'AWS', 'CI/CD', 'PostgreSQL'
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full border border-border/60 bg-background/60 text-sm hover:bg-background transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grids detallados */}
              <div className="grid grid-cols-2 gap-6 pt-2">
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

          {/* Right: Feature Cards con borde degradado */}
          <ScrollAnimationWrapper animation="slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Brain,
                  title: 'Aprendizaje Continuo',
                  desc: 'Siempre busco dominar nuevas tecnologías emergentes',
                },
                {
                  icon: Cloud,
                  title: 'Cloud & DevOps',
                  desc: 'Experiencia práctica en entornos cloud y automatización',
                },
                {
                  icon: ShieldCheck,
                  title: 'Ciberseguridad',
                  desc: 'Exploración constante de la seguridad en sistemas modernos',
                },
                {
                  icon: Activity,
                  title: 'Impacto Real',
                  desc: 'Soluciones útiles, escalables y medibles',
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="relative group"
                  style={{ perspective: '1000px' }}
                >
                  {/* Borde degradado */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur" />
                  <Card className="relative rounded-2xl bg-card/60 backdrop-blur-sm border-border/60 hover:shadow-lg hover:translate-y-[-4px] transition duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-background/70 group-hover:scale-105 transition">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-1">{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
