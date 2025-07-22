import { ScrollAnimationWrapper } from '../ScrollAnimationWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const certificates = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    category: "Cloud",
    verified: true,
    url: "#"
  },
  {
    id: 2,
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "2024",
    image: "https://images.credly.com/size/680x680/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png",
    category: "Dev Tools",
    verified: true,
    url: "#"
  },
  {
    id: 3,
    title: "IBM DevOps and Software Engineering",
    issuer: "IBM",
    date: "2024",
    image: "https://images.credly.com/images/d9fe3b97-3f2f-4b1d-a295-16c92ae855bc/image.png",
    category: "DevOps",
    verified: true,
    url: "#"
  },
  {
    id: 4,
    title: "IBM Full Stack Software Developer",
    issuer: "IBM",
    date: "2024",
    image: "https://images.credly.com/images/ff8f2956-43b1-47d1-abba-1db32724b24b/image.png",
    category: "Full-Stack",
    verified: true,
    url: "#"
  },
  {
    id: 5,
    title: "Google IT Support",
    issuer: "Google / Coursera",
    date: "2024",
    image: "https://images.credly.com/images/7c355969-da4a-47e5-8155-c4edd0146bba/image.png",
    category: "Soporte TI",
    verified: true,
    url: "#"
  },
  {
    id: 6,
    title: "Diplomado en Desarrollo Web y Apps Móviles",
    issuer: "Fundación Carlos Slim",
    date: "2024",
    image: "https://fsvc.capacitateparaelempleo.org/CapacitateFS/DiplomasImages/b5866d01-ded6-46f0-be13-98801bdc4a4b.png", 
    category: "Web & Mobile",
    verified: true,
    url: "#"
  }
];

const CertificateCard = ({ certificate, index }: { certificate: any; index: number }) => {
  const animationType = index % 3 === 0 ? "slide-in-left" : index % 3 === 1 ? "fade-in-up" : "slide-in-right";

  return (
    <ScrollAnimationWrapper animation={animationType} threshold={0.2}>
      <Card
        className={`group bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover-effect animate-float animate-slide-up-delay-${index % 3 + 1} cursor-pointer`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-10 h-10 rounded-md object-contain"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg group-hover:gradient-text transition-all duration-300">
                  {certificate.title}
                </h3>
                <p className="text-muted-foreground text-sm">{certificate.issuer}</p>
              </div>
            </div>
            {certificate.verified && (
              <div className="flex items-center space-x-1 text-primary">
                <span className="text-sm">✓</span>
                <span className="text-xs">Verificado</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs bg-secondary/50">
              {certificate.category}
            </Badge>
            <span className="text-sm text-muted-foreground font-medium">
              {certificate.date}
            </span>
          </div>
        </CardContent>
      </Card>
    </ScrollAnimationWrapper>
  );
};

export const CertificatesSection = () => {
  return (
    <section id="certificados" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Certificaciones</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certificaciones oficiales que validan mi experiencia en desarrollo, DevOps y nube
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </div>

        <ScrollAnimationWrapper animation="bounce-in" threshold={0.3}>
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3176/3176364.png"
                alt="Certificado"
                className="w-5 h-5"
              />
              <span className="font-medium">Aprendizaje Continuo</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Me mantengo en constante capacitación mediante certificaciones de alto nivel, con enfoque en herramientas modernas y tecnologías emergentes.
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
