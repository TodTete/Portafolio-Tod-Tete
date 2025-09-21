import { ScrollAnimationWrapper } from '../ScrollAnimationWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code2, FileCode, Github, MonitorPlay, Trophy } from 'lucide-react';
import React from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  award?: string;       
  highlight?: boolean;  
};

const projects: Project[] = [
  {
    id: 1,
    title: "ETHCDMX2025",
    description:
      "Cross-Chain Polling System: dApp para crear y participar en encuestas en múltiples redes blockchain.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    technologies: ["TypeScript", "Web3", "Blockchain"],
    githubUrl: "https://github.com/TodTete/ETHCDMX2025",
    demoUrl: "https://www.youtube.com/watch?v=kPkAyP5HibA",
    award: "2º lugar · Scroll",
    highlight: true,
  },
  {
    id: 2,
    title: "Laravel-Cursos",
    description:
      "Plataforma educativa tipo Coursera con gestión de cursos, usuarios y contenidos.",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    technologies: ["Laravel", "PHP", "Node.js", "MySQL"],
    githubUrl: "https://github.com/TodTete/Laravel-Cursos",
    demoUrl: "https://youtu.be/NPIxYypWsNk",
  },
  {
    id: 3,
    title: "Proyecto-Angular",
    description:
      "Conversor de valores con Angular y Material Design, rápido y centrado en UX.",
    icon: <FileCode className="w-6 h-6 text-primary" />,
    technologies: ["Angular", "Material UI", "TypeScript"],
    githubUrl: "https://github.com/TodTete/Proyecto-Angular",
    demoUrl: "https://youtu.be/pv_dGZo-Aco",
  },
  {
    id: 4,
    title: "Salud-Python",
    description:
      "Análisis de datos en el área de la salud con Python y LaTeX.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    technologies: ["Python", "TeX", "Data Analysis"],
    githubUrl: "https://github.com/TodTete/Salud-Python",
    demoUrl: "https://youtu.be/4y8nAh_SkRM",
  }
];

/** Obtiene thumbnail si la demo es YouTube; para Drive usa un placeholder elegante */
const getDemoThumb = (url: string) => {
  const ytMatch = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_\-]+)/);
  if (ytMatch?.[1]) return `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;

  if (/drive\.google\.com\/file\/d\/([A-Za-z0-9_\-]+)/.test(url)) {
    return null;
  }

  return null;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const animationType = index % 2 === 0 ? "slide-in-left" : "slide-in-right";
  const thumb = getDemoThumb(project.demoUrl);

  return (
    <ScrollAnimationWrapper animation={animationType} threshold={0.2}>
      <div className="relative group">
        {/* Glow/Outline degradado al hover */}
        <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur" />

        {/* Ribbon de premio */}
        {project.award && (
          <div className="absolute z-10 -top-2 -left-2 flex items-center gap-1 rounded-full bg-primary/90 text-primary-foreground px-2 py-1 text-[10px] font-semibold shadow-md">
            <Trophy className="w-3 h-3" /> {project.award}
          </div>
        )}

        <Card
          className={`relative rounded-2xl bg-card/80 backdrop-blur-sm border-border/60 transition-all duration-300 hover:translate-y-[-4px] ${
            project.highlight ? "ring-1 ring-primary/30" : ""
          }`}
        >
          {/* Media / Thumbnail */}
          <div
            className="relative overflow-hidden rounded-t-2xl h-36 bg-gradient-to-br from-background via-muted to-background"
          >
            {thumb ? (
              <img
                src={thumb}
                alt={`${project.title} demo`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <MonitorPlay className="w-4 h-4" />
                  Vista previa
                </div>
              </div>
            )}

            {/* Overlay botones rápidos */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-end justify-end p-3 gap-2">
            </div>
          </div>

          <CardHeader className="pb-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-md shrink-0">
                {project.icon}
              </div>
              <div className="min-w-0">
                <CardTitle className="text-lg group-hover:gradient-text transition-all duration-300 truncate">
                  {project.title}
                </CardTitle>
                <div className="mt-1 flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((t) => (
                    <Badge key={t} variant="outline" className="text-[10px]">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Acciones grandes en móvil / visibles siempre */}
            <div className="flex gap-3 pt-1">
              <Button
                size="sm"
                className="flex-1 glow-effect transition-all duration-300"
                onClick={() => window.open(project.demoUrl, '_blank')}
              >
                <MonitorPlay className="w-4 h-4 mr-2" />
                Demostración
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 transition-all duration-300 hover:scale-105"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                Código
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollAnimationWrapper>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span className="gradient-text">Proyectos Destacados</span>
              <span className="block h-[3px] w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto mt-3" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Algunos proyectos representativos en diferentes tecnologías
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Grid responsiva */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimationWrapper animation="bounce-in" threshold={0.3}>
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
              onClick={() => window.open('https://github.com/TodTete', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              Ver todos los proyectos en GitHub
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
