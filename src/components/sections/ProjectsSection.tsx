import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper } from "../ScrollAnimationWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, MonitorPlay, Trophy } from "lucide-react";

/**
 * PROYECTOS — Versión con vista previa YouTube + fondo más impresionante ⚡
 * - Thumbnails reales de YouTube (hqdefault)
 * - Fondo "Aurora Nebula" con ondas animadas, destellos y partículas
 * - Efectos de resplandor, elevación y overlay con botón de play
 * - Animaciones con Framer Motion al hacer scroll
 */

// =====================
// Utils
// =====================

const getDemoThumb = (url: string) => {
  // Captura ID tanto en youtube.com/watch?v= como en youtu.be/
  const ytMatch = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_\-]{6,})/);
  if (ytMatch?.[1]) return `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
  return null;
};

// =====================
// Data
// =====================

const projects = [
  {
    id: 1,
    title: "ETHCDMX2025",
    description:
      "Cross-Chain Polling System: dApp para crear y participar en encuestas en múltiples redes blockchain.",
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
    technologies: ["Laravel", "PHP", "Node.js", "MySQL"],
    githubUrl: "https://github.com/TodTete/Laravel-Cursos",
    demoUrl: "https://youtu.be/NPIxYypWsNk",
  },
  {
    id: 3,
    title: "Proyecto-Angular",
    description:
      "Conversor de valores con Angular y Material Design, rápido y centrado en UX.",
    technologies: ["Angular", "Material UI", "TypeScript"],
    githubUrl: "https://github.com/TodTete/Proyecto-Angular",
    demoUrl: "https://youtu.be/pv_dGZo-Aco",
  },
  {
    id: 4,
    title: "Salud-Python",
    description:
      "Análisis de datos en el área de la salud con Python y LaTeX.",
    technologies: ["Python", "TeX", "Data Analysis"],
    githubUrl: "https://github.com/TodTete/Salud-Python",
    demoUrl: "https://youtu.be/4y8nAh_SkRM",
  },
];

// =====================
// Section
// =====================

export const ProjectsSection = () => {
  // Partículas decorativas (memo para no recalcular en cada render)
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
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
    <section
      id="proyectos"
      className="relative py-24 overflow-hidden text-white"
    >
      {/* ======= FONDO IMPRESIONANTE ======= */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Nebula core */}
        <div className="absolute -inset-x-24 -top-48 h-[520px] bg-[radial-gradient(60%_80%_at_50%_0%,theme(colors.primary/35),transparent_70%)] blur-2xl" />
        <div className="absolute -inset-x-32 top-1/3 h-[520px] bg-[radial-gradient(50%_80%_at_70%_0%,theme(colors.accent/35),transparent_70%)] blur-3xl" />

        {/* Mesh gradient layer */}
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_80%,rgba(255,255,255,0.06),transparent_70%)]" />

        {/* Aurora waves */}
        <div className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <div className="absolute -inset-x-20 top-10 h-40 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.primary/30),transparent_25%,theme(colors.accent/30),transparent_75%)] blur-2xl animate-[drift_12s_linear_infinite]" />
          <div className="absolute -inset-x-40 top-40 h-40 bg-[conic-gradient(from_120deg_at_50%_50%,theme(colors.accent/25),transparent_35%,theme(colors.primary/25),transparent_85%)] blur-3xl animate-[drift_16s_linear_infinite_reverse]" />
        </div>

        {/* Grid sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(#151a27_1px,transparent_1px),linear-gradient(90deg,#151a27_1px,transparent_1px)] bg-[size:44px_44px] opacity-30 mix-blend-overlay" />

        {/* Partículas */}
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              y: [0, -16, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: p.d, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-white/20 shadow-[0_0_12px_0_theme(colors.white/30)]"
            style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
          />
        ))}
      </div>

      {/* ======= ENCABEZADO ======= */}
      <ScrollAnimationWrapper animation="fade-in-up">
        <div className="relative text-center mb-16 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text bg-[length:220%_220%] animate-gradient-move">Proyectos Destacados</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Algunos proyectos que combinan creatividad, tecnología y pasión.
          </p>
        </div>
      </ScrollAnimationWrapper>

      {/* ======= GRID ======= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative"
            >
              {/* Glow dinámico */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 opacity-0 group-hover:opacity-100 blur transition duration-300" />

              {/* Ribbon premio */}
              {project.award && (
                <div className="absolute z-10 -top-2 -left-2 flex items-center gap-1 rounded-full bg-primary/90 text-white px-2 py-1 text-[10px] font-semibold shadow-md">
                  <Trophy className="w-3 h-3" /> {project.award}
                </div>
              )}

              <Card className={`relative bg-slate-900/70 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 ${project.highlight ? "ring-1 ring-primary/30" : ""}`}>
                {/* THUMB: YouTube o placeholder */}
                <Thumb url={project.demoUrl} title={project.title} />

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold group-hover:gradient-text transition-all duration-300 truncate">
                    {project.title}
                  </CardTitle>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.technologies.map((t) => (
                      <Badge key={t} variant="outline" className="text-[10px] border-white/20">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/65 mb-4 min-h-[64px] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary text-white hover:shadow-[0_0_14px_theme(colors.primary/40)]"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <MonitorPlay className="w-4 h-4 mr-2" /> Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-white/10 border-white/20"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" /> Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="font-semibold text-white border-white/20 hover:bg-white/10 hover:shadow-[0_0_22px_theme(colors.accent/30)] transition"
            onClick={() => window.open("https://github.com/TodTete", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" /> Ver más en GitHub
          </Button>
        </motion.div>
      </div>

      {/* KEYFRAMES - aurora waves */}
      <style>{`
        @keyframes drift { to { transform: translateX(20%); } }
        @keyframes drift_reverse { to { transform: translateX(-20%); } }
      `}</style>
    </section>
  );
};

// =====================
// Subcomponents
// =====================

const Thumb = ({ url, title }: { url: string; title: string }) => {
  const thumb = getDemoThumb(url);
  return (
    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700/60 to-slate-900">
      {thumb ? (
        <img
          src={thumb}
          alt={`${title} demo`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-white/70 text-sm">
          <MonitorPlay className="mr-2 w-5 h-5 text-primary" /> Vista previa
        </div>
      )}

      {/* Overlay con botón play */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />
      <button
        onClick={() => window.open(url, "_blank")}
        aria-label="Abrir demo"
        className="absolute inset-0 m-auto h-12 w-12 rounded-full grid place-items-center backdrop-blur-sm border border-white/40 bg-white/20 shadow-lg transition-transform duration-300 group-hover:scale-105"
      >
        <span className="sr-only">Reproducir</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-0.5">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      {/* Halo */}
      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)]" />
    </div>
  );
};