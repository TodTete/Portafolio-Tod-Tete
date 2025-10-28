import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/TodTete' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/ricardovallejotodtete' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:vallejoricardo3@gmail.com' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold gradient-text mb-2">
                &lt;TodTete /&gt;
              </h3>
              <p className="text-muted-foreground text-sm">
                Desarrollador Full-Stack apasionado<br />
                por el aprendizaje continuo
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 bg-card/50 backdrop-blur-sm rounded-full border border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-110"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-muted-foreground text-sm">
              <p>© {currentYear} Portfolio Developer</p>
              <p>Hecho por Ricardo V.S.</p>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </footer>
  );
};
