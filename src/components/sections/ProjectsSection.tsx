import { ScrollAnimationWrapper } from '../ScrollAnimationWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code2, FileCode, Github, MonitorPlay } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "ETHCDMX2025",
    description:
      "Cross-Chain Polling System: dApp para crear y participar en encuestas en múltiples redes blockchain. Ganador 2º lugar categoría Scroll en hackathon.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    technologies: ["TypeScript", "Web3", "Blockchain"],
    githubUrl: "https://github.com/TodTete/ETHCDMX2025",
    demoUrl: "https://www.youtube.com/watch?v=kPkAyP5HibA"
  },
  {
    id: 2,
    title: "Laravel-Cursos",
    description:
      "Plataforma educativa tipo Coursera, desarrollada con Laravel y Node.js para gestión de cursos, usuarios y contenidos.",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    technologies: ["Laravel", "PHP", "Node.js", "MySQL"],
    githubUrl: "https://github.com/TodTete/Laravel-Cursos",
    demoUrl: "https://drive.google.com/file/d/1bg7h11-sNkbozfeRd_qXr2pKJdeZ0wg0/view?usp=sharing"
  },
  {
    id: 3,
    title: "Proyecto-Angular",
    description:
      "Conversor de valores con Angular y Material Design. Aplicación rápida y orientada a la experiencia de usuario.",
    icon: <FileCode className="w-6 h-6 text-primary" />,
    technologies: ["Angular", "Material UI", "TypeScript"],
    githubUrl: "https://github.com/TodTete/Proyecto-Angular",
    demoUrl: "https://drive.google.com/file/d/1DM6KaZK4JdEcio-dnzXtVLyGXU5wPecx/view?usp=sharing"
  },
  {
    id: 4,
    title: "Salud-Python",
    description:
      "Proyecto académico desarrollado en Python y LaTeX, orientado al análisis de datos en el área de la salud.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    technologies: ["Python", "TeX", "Data Analysis"],
    githubUrl: "https://github.com/TodTete/Salud-Python",
    demoUrl: "https://drive.google.com/file/d/1TNnH4i6RZ71BY2ok04j38BljuPxsjBle/view?usp=sharing"
  }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const animationType = index % 2 === 0 ? "slide-in-left" : "slide-in-right";

  return (
    <ScrollAnimationWrapper animation={animationType} threshold={0.2}>
      <Card className="group bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover-effect animate-slide-up">
        <CardHeader className="pb-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-md">
              {project.icon}
            </div>
            <div>
              <CardTitle className="text-lg group-hover:gradient-text transition-all duration-300">
                {project.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              size="sm"
              variant="default"
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
    </ScrollAnimationWrapper>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Proyectos Destacados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Algunos de los proyectos más representativos desarrollados en diferentes tecnologías
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <ScrollAnimationWrapper animation="bounce-in" threshold={0.3}>
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
              onClick={() => window.open('https://github.com/TodTete', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              Ver Todos los Proyectos en GitHub
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
