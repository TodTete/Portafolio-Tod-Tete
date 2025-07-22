import { useState } from 'react';
import { ScrollAnimationWrapper } from '../ScrollAnimationWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, Linkedin, Github } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "vallejoricardo3@gmail.com",
    action: () => window.open('mailto:vallejoricardo3@gmail.com'),
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "/in/ricardo-vallejo-sanchez-8034a9199",
    action: () => window.open('https://www.linkedin.com/in/ricardo-vallejo-sanchez-8034a9199', '_blank'),
    color: "bg-blue-600/20 text-blue-500"
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    value: "/TodTete",
    action: () => window.open('https://github.com/TodTete', '_blank'),
    color: "bg-gray-600/20 text-gray-400"
  }
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('¡Mensaje enviado! Te responderé pronto.', {
      description: 'Gracias por contactarme. Revisaré tu mensaje y te responderé a la brevedad.',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Hablemos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Estoy disponible para colaborar en ideas increíbles
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="max-w-7xl mx-auto">
          <ScrollAnimationWrapper animation="slide-in-left">
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Información de Contacto</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Estoy siempre abierto a discutir oportunidades de trabajo, 
                  proyectos interesantes o simplemente charlar sobre tecnología. 
                  No dudes en contactarme a través de cualquiera de estos medios.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <ScrollAnimationWrapper
                    key={method.title}
                    animation="bounce-in"
                    threshold={0.3}
                  >
                    <Card
                      className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer group animate-float hover-effect"
                      onClick={method.action}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardContent className="p-6 text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.color} mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                          {method.icon}
                        </div>
                        <h4 className="font-semibold mb-2 text-lg">{method.title}</h4>
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimationWrapper>
                ))}
              </div>

              <ScrollAnimationWrapper animation="fade-in-up" threshold={0.3}>
                <div className="bg-gradient-primary/10 rounded-lg p-8 border border-primary/20 text-center max-w-4xl mx-auto hover-effect animate-pulse-glow">
                  <h4 className="font-semibold mb-4 gradient-text text-xl">¿Trabajamos juntos?</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Estoy disponible para proyectos freelance, consultorías y 
                    oportunidades de trabajo remoto o presencial.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                    <span className="text-primary font-medium text-lg">Disponible para nuevos proyectos</span>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
