import { useState } from 'react';
import { ScrollAnimationWrapper } from '../ScrollAnimationWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Mail, Linkedin, Github, Copy } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "vallejoricardo3@gmail.com",
    action: () => window.open('mailto:vallejoricardo3@gmail.com'),
    color: "bg-blue-500/20 text-blue-400",
    copy: "vallejoricardo3@gmail.com"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "/in/ricardo-vallejo-sanchez-8034a9199",
    action: () => window.open('https://www.linkedin.com/in/ricardo-vallejo-sanchez-8034a9199', '_blank'),
    color: "bg-blue-600/20 text-blue-500",
    copy: "https://www.linkedin.com/in/ricardo-vallejo-sanchez-8034a9199"
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    value: "/TodTete",
    action: () => window.open('https://github.com/TodTete', '_blank'),
    color: "bg-gray-600/20 text-gray-400",
    copy: "https://github.com/TodTete"
  }
];

export const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      toast.success("Copiado al portapapeles", {
        description: text,
      });
      setTimeout(() => setCopied(null), 2000);
    } catch {
      toast.error("No se pudo copiar");
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span className="gradient-text">Hablemos</span>
              <span className="block h-[3px] w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto mt-3" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Estoy disponible para colaborar en ideas increíbles.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="space-y-12">
          {/* Tarjetas de contacto con borde animado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <ScrollAnimationWrapper key={method.title} animation="bounce-in" threshold={0.3}>
                <div className="relative group">
                  {/* Borde animado */}
                  <div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 animate-border bg-[length:300%_300%] bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 via-yellow-500 to-pink-500" />
                  
                  <Card
                    className="relative bg-card/70 backdrop-blur-sm border border-border/60 rounded-2xl cursor-pointer"
                    onClick={method.action}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.color} mb-4`}>
                        {method.icon}
                      </div>
                      <h4 className="font-semibold mb-1">{method.title}</h4>
                      <p className="text-sm text-muted-foreground">{method.value}</p>
                      {method.copy && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(method.copy!);
                          }}
                          className="mt-3 text-xs text-primary hover:underline flex items-center justify-center gap-1 mx-auto"
                        >
                          <Copy className="w-3 h-3" />
                          {copied === method.copy ? "Copiado" : "Copiar"}
                        </button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          {/* Banner disponibilidad */}
          <ScrollAnimationWrapper animation="fade-in-up" threshold={0.3}>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-[2px] rounded-2xl animate-border bg-[length:400%_400%] bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 via-yellow-500 to-pink-500 opacity-70" />
              <div className="relative bg-background/70 border border-primary/20 rounded-2xl p-8 text-center backdrop-blur-sm">
                <h4 className="font-semibold text-xl mb-2 gradient-text">¿Trabajamos juntos?</h4>
                <p className="text-muted-foreground mb-4">
                  Disponible para proyectos freelance, consultorías y oportunidades remotas o presenciales.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30">
                  <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm text-primary font-medium">
                    Disponible para nuevos proyectos
                  </span>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
