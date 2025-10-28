import { ScrollAnimationWrapper } from '../ScrollAnimationWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import React from 'react';

type Cert = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
  verified: boolean;
  url: string;
  highlight?: boolean;

  download?: boolean;    
  filename?: string;     
};

const certificates: Cert[] = [
  {
    id: 11,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    image: "https://education.oracle.com/file/general/Oracle_Foundations_Associate_Badge.png",
    category: "AI",
    verified: true,
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=57614CE39CADC0E88BEDD8C4521398D628649C0CD5EB99305690CEB59565CC20",
    highlight: true,
  },
  {
    id: 12,
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    issuer: "Oracle",
    date: "2025",
    image: "https://education.oracle.com/file/general/Oracle_Professional_Badge_final.png",
    category: "DevOps",
    verified: true,
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3B5BDD511340F72D2DFB3D47924E88EA6CE1C0CECFDAB2A179AF2C0C82013903",
    highlight: true,
  },
  {
    id: 13,
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    image: "https://education.oracle.com/file/general/Oracle_Foundations_Associate_Badge.png",
    category: "Cloud",
    verified: true,
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3396EC9997AF72C54D09539D1B841C26A1FDC70B9E61B075344430ACA5D014EA",
    highlight: true,
  },

  {
    id: 7,
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    image:
      "https://education.oracle.com/file/general/Oracle_Foundations_Associate_Badge.png",
    category: "Cloud",
    verified: true,
    url:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3396EC9997AF72C54D09539D1B841C26A1FDC70B9E61B075344430ACA5D014EA",
    highlight: true,
  },
  {
    id: 8,
    title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
    issuer: "Oracle",
    date: "2025",
    image:
      "https://images.credly.com/images/2747d1bc-859f-4c82-b9f8-e370fa0b9438/60_Oracle_Cloud_Infrastructure_Architect.png",
    category: "Cloud",
    verified: true,
    url:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C3DF7C138B1ED36400F3DA04FDAC3FD866862A5DD237680BE03D29DF62500F06",
    highlight: true,
  },
  {
    id: 3,
    title: "IBM DevOps and Software Engineering",
    issuer: "IBM",
    date: "2024",
    image:
      "https://images.credly.com/images/d9fe3b97-3f2f-4b1d-a295-16c92ae855bc/image.png",
    category: "DevOps",
    verified: true,
    url: "https://coursera.org/share/507f030255a2c6571e09d0bba500268b",
  },
  {
    id: 2,
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "2024",
    image:
      "https://images.credly.com/size/680x680/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png",
    category: "Dev Tools",
    verified: true,
    url: "#",
  },
  {
    id: 4,
    title: "IBM Back-End Development",
    issuer: "IBM",
    date: "2024",
    image:
      "https://images.credly.com/images/ff8f2956-43b1-47d1-abba-1db32724b24b/image.png",
    category: "Back-End",
    verified: true,
    url: "https://coursera.org/share/f8ddb6a548f16655f24a751ea132f32c",
  },
  {
    id: 5,
    title: "Google IT Support",
    issuer: "Google / Coursera",
    date: "2024",
    image:
      "https://images.credly.com/images/7c355969-da4a-47e5-8155-c4edd0146bba/image.png",
    category: "Soporte TI",
    verified: true,
    url: "https://coursera.org/share/b22c2b473cd0f1c3444646a6e1f530f3",
  },
  {
    id: 6,
    title: "Diplomado en Desarrollo Web y Apps Móviles",
    issuer: "Fundación Carlos Slim",
    date: "2024",
    image:
      "https://fsvc.capacitateparaelempleo.org/CapacitateFS/DiplomasImages/b5866d01-ded6-46f0-be13-98801bdc4a4b.png",
    category: "Web & Mobile",
    verified: true,
    url:
      "https://capacitateparaelempleo.org/verifica/dcc74fb0-f165-4b30-95a8-4a8a042eb4f1/aab766b7-add9-4e79-902f-5f3baefc95ff",
  },
  {
    id: 9,
    title: "Técnico en Big Data",
    issuer: "Fundación Carlos Slim",
    date: "2024",
    image:
      "https://capacitateparaelempleo.org/assets/DiplomasImages/cfbec728-8abb-4cc3-8d2c-e782b1862082.png",
    category: "Big Data",
    verified: true,
    url:
      "https://capacitateparaelempleo.org/verifica/dcc74fb0-f165-4b30-95a8-4a8a042eb4f1/7cd760e8-6448-4ea5-8f6e-1abe407764ff",
  },
  {
    id: 10,
    title: "HCIA Cloud Services",
    issuer: "Huawei Academy",
    date: "2023",
    image: "https://infosyte.com/wp-content/uploads/2021/05/HCIA-Cloud-Service.jpg",
    category: "Cloud",
    verified: true,
    url: "HCIA-Cloud-Services.png",
    download: true,
    filename: "/HCIA-Cloud-Services.png",
  },
];


const CertificateCard = ({
  certificate,
  index,
}: {
  certificate: Cert;
  index: number;
}) => {
  const animationType =
    index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'fade-in-up' : 'slide-in-right';

  const open = () => {
    if (certificate.download) {
      // Descarga directa del archivo en /public
      const link = document.createElement('a');
      link.href = encodeURI(certificate.url);
      link.setAttribute('download', certificate.filename || `${certificate.title.replace(/\s+/g, '_')}.png`);
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(certificate.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <ScrollAnimationWrapper animation={animationType} threshold={0.2}>
      <div
        className="relative group"
        role="button"
        tabIndex={0}
        onClick={open}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && open()}
      >
        {/* Borde degradado animado */}
        <div className="absolute -inset-[1.5px] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 animate-border bg-[length:300%_300%] bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 via-yellow-500 to-pink-500" />

        {/* Ribbon para destacar (Oracle) */}
        {certificate.highlight && (
          <div className="absolute z-10 -top-2 -left-2 rounded-full bg-primary/90 text-primary-foreground px-2 py-1 text-[10px] font-semibold shadow-sm">
            Top · Oracle
          </div>
        )}

        <Card className="relative bg-card/80 backdrop-blur-sm border-border/60 rounded-2xl hover:translate-y-[-3px] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                  className="w-18 h-18 min-w-16 min-h-16 w-16 h-16 rounded-md object-contain"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base md:text-lg group-hover:gradient-text transition-all duration-300 line-clamp-2">
                    {certificate.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{certificate.issuer}</p>
                </div>
              </div>

              {certificate.verified && (
                <div className="hidden sm:flex items-center gap-1 text-primary">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-medium">Verificado</span>
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

            {/* Botón acción: Verificar o Descargar */}
            <div className="mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  open();
                }}
                className="md:opacity-0 md:group-hover:opacity-100 transition inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground"
                aria-label={`${certificate.download ? 'Descargar' : 'Verificar'} ${certificate.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {certificate.download ? 'Descargar' : 'Verificar'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollAnimationWrapper>
  );
};

export const CertificatesSection = () => {
  return (
    <section id="certificados" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span className="gradient-text">Certificaciones</span>
              <span className="block h-[3px] w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto mt-3" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certificaciones oficiales que validan mi experiencia en desarrollo, DevOps y nube.
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
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border/60">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3176/3176364.png"
                alt="Certificado"
                className="w-5 h-5"
                loading="lazy"
              />
              <span className="font-medium">Aprendizaje Continuo</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Me mantengo en constante capacitación con certificaciones de alto nivel, enfocadas en herramientas modernas y tecnologías emergentes.
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
