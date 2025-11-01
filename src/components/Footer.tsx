import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "https://github.com/TodTete" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/ricardovallejotodtete" },
    { name: "Email", icon: <Mail className="w-5 h-5" />, url: "mailto:vallejoricardo3@gmail.com" },
  ];

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        size: Math.floor(Math.random() * 6) + 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        d: 6 + Math.random() * 6,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Fondo con auroras y partículas */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -inset-x-24 -top-24 h-[420px] bg-[radial-gradient(60%_80%_at_20%_0%,theme(colors.primary/35),transparent_70%)] blur-2xl" />
        <div className="absolute -inset-x-24 top-16 h-[420px] bg-[radial-gradient(60%_80%_at_80%_0%,theme(colors.accent/28),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(#151a27_1px,transparent_1px),linear-gradient(90deg,#151a27_1px,transparent_1px)] bg-[size:44px_44px] opacity-30 mix-blend-overlay" />
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.8, 0.15], y: [0, -14, 0], x: [0, 10, 0] }}
            transition={{ duration: p.d, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-white/20 shadow-[0_0_12px_0_theme(colors.white/30)]"
            style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8 py-10 border-t border-white/10">
            {/* Marca */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-3 py-2 backdrop-blur">
                <span className="text-base font-bold tracking-tight">&lt;TodTete /&gt;</span>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Desarrollador Full-Stack enfocado en crear productos útiles y de alto impacto.
              </p>
            </div>

            {/* Navegación */}
            <div className="text-sm">
              <p className="text-white/60 font-semibold mb-3">Navegación</p>
              <ul className="space-y-1 text-white/70">
                <li><a href="#inicio" className="hover:text-white transition">Inicio</a></li>
                <li><a href="#proyectos" className="hover:text-white transition">Proyectos</a></li>
                <li><a href="#sobre-mi" className="hover:text-white transition">Sobre mí</a></li>
                <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>

            {/* Redes */}
            <div>
              <p className="text-white/60 font-semibold mb-3">Conecta</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Línea inferior */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <span>© {currentYear} Portfolio Developer — Hecho por Ricardo V.S.</span>
          <span className="hidden md:inline">Construido con pasión y creatividad.</span>
        </div>
      </div>

      {/* Botón Back to Top */}
      <motion.button
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 40 }}
        animate={showTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="fixed bottom-6 right-6 z-20 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur p-3 shadow-lg hover:bg-white/20 transition"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};
