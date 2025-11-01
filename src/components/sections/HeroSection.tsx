import React, { useMemo, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { InteractiveCodeScreen } from "../InteractiveCodeScreen";
import { ScrollAnimationWrapper } from "../ScrollAnimationWrapper";
import { Github, Mail, FileDown, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";


const particles = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  size: (Math.random() * 6 + 4).toFixed(0),
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 2,
}));

export const HeroSection: React.FC = () => {
  // Mouse spotlight
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);

  const maskImage = useMotionTemplate`radial-gradient(180px 180px at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent) {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set(e.clientX - bounds.left);
    y.set(e.clientY - bounds.top);
  }

  // Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  const parallaxLayers = useMemo(
    () => [
      { k: 0.02, cls: "blur-3xl bg-primary/30" },
      { k: 0.04, cls: "blur-2xl bg-accent/30" },
      { k: 0.06, cls: "blur-2xl bg-code-keyword/30" },
    ],
    []
  );

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      {/* --- AURORA + GRID BACKDROP --- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Aurora */}
        <div className="absolute -inset-x-32 -top-48 h-[500px] bg-[radial-gradient(50%_80%_at_50%_0%,theme(colors.primary/40),transparent_70%)] blur-2xl" />
        <div className="absolute -inset-x-24 top-1/3 h-[500px] bg-[radial-gradient(50%_80%_at_70%_0%,theme(colors.accent/35),transparent_70%)] blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(#151a27_1px,transparent_1px),linear-gradient(90deg,#151a27_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(255,255,255,0.08),transparent)] bg-[length:100%_6px] mix-blend-overlay opacity-20 animate-[scrollY_8s_linear_infinite]" />

        {/* Noise */}
        <div className="absolute inset-0 mix-blend-soft-light opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:12px_12px]" />
      </div>

      {/* --- SPOTLIGHT FOLLOW --- */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{ WebkitMaskImage: hovering ? (maskImage as any) : undefined, maskImage: hovering ? (maskImage as any) : undefined }}
        className="absolute inset-0 transition-opacity duration-500"
      >
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_0%,rgba(99,102,241,0.18),transparent)]" />
      </motion.div>

      {/* --- FLOATING PARTICLES --- */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -20, 0],
              x: [0, 8, 0],
            }}
            transition={{ duration: 6 + p.delay, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            className="absolute rounded-full bg-white/20 shadow-[0_0_12px_0_theme(colors.white/30)]"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
          />
        ))}
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <ScrollAnimationWrapper animation="slide-in-left" className="text-center lg:text-left">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="space-y-8">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs tracking-wide text-white/80">Construyendo experiencias modernas</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="relative font-bold leading-tight">
                <span className="block text-lg text-white/60">Hola, soy</span>
                <span className="relative inline-block">
                  <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-30 rounded-lg" />
                  <span className="gradient-text bg-[length:220%_220%] animate-gradient-move relative z-10 text-5xl md:text-7xl">
                    Ricardo Vallejo
                  </span>
                </span>
                <br />
                <span className="text-3xl md:text-5xl text-white/70">Full‑Stack Developer</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0">
                Ingeniero en formación apasionado por la nube, DevOps, blockchain y el desarrollo de soluciones multiplataforma con impacto real. Participo en hackathones y eventos como AWS Day y Google Cloud Next.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Magnetic>
                  <Button asChild className="group h-11 px-6 rounded-2xl text-base font-medium shadow-lg shadow-primary/20">
                    <a href="#proyectos" aria-label="Ver proyectos">
                      Ver proyectos
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </Magnetic>

                <Magnetic>
                  <Button variant="secondary" asChild className="h-11 px-6 rounded-2xl text-base font-medium backdrop-blur bg-white/10 border-white/15 hover:bg-white/20">
                    <a href="mailto:vallejoricardo3@gmail.com" aria-label="Contactar">
                      <Mail className="mr-2 h-4 w-4" /> Contacto
                    </a>
                  </Button>
                </Magnetic>


                <a href="https://github.com/TodTete" className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="underline decoration-dotted underline-offset-4">GitHub</span>
                </a>
              </motion.div>

            </motion.div>
          </ScrollAnimationWrapper>

          {/* RIGHT */}
          <ScrollAnimationWrapper animation="slide-in-right" className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Parallax blobs */}
              {parallaxLayers.map((l, i) => (
                <motion.span
                  key={i}
                  className={`absolute -z-10 -top-12 ${i % 2 ? "-left-8" : "-right-8"} w-56 h-56 ${l.cls} rounded-full`}
                  whileInView={{ y: [0, -12, 0] }}
                  transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}

              {/* 3D tilt card */}
              <Tilt3D className="w-full max-w-lg">
                <div className="relative rounded-3xl p-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent">
                  <div className="rounded-[22px] bg-slate-900/70 backdrop-blur-xl p-2">
                    <InteractiveCodeScreen className="w-full h-[440px] rounded-2xl" />
                  </div>

                  {/* Pulses decorativos */}
                  <span className="pointer-events-none absolute -top-3 -left-3 size-8 rounded-full bg-primary/70 animate-ping" />
                  <span className="pointer-events-none absolute -bottom-4 -right-4 size-6 rounded-full bg-accent/70 animate-ping [animation-delay:700ms]" />
                  <span className="pointer-events-none absolute top-1/2 -right-8 size-4 rounded-full bg-code-keyword/70 animate-ping [animation-delay:350ms]" />
                </div>
              </Tilt3D>
            </div>
          </ScrollAnimationWrapper>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-7 h-12 border-2 border-primary/70 rounded-full flex justify-center">
          <motion.div animate={{ opacity: [0.2, 1, 0.2], y: [2, 18, 2] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1.5 h-3 bg-primary/80 rounded-full mt-2" />
        </motion.div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes scrollY { to { background-position-y: 100%; } }
      `}</style>
    </section>
  );
};



const Magnetic: React.FC<React.PropsWithChildren<{ strength?: number }>> = ({ children, strength = 20 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInside, setIsInside] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const transform = useMotionTemplate`translate3d(${mx}px, ${my}px, 0)`;

  return (
    <motion.div
      ref={ref}
      style={{ transform }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        mx.set((dx / r.width) * strength);
        my.set((dy / r.height) * strength);
      }}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => {
        setIsInside(false);
        mx.set(0);
        my.set(0);
      }}
      className={`will-change-transform ${isInside ? "" : "transition-transform duration-300"}`}
    >
      {children}
    </motion.div>
  );
};

const Tilt3D: React.FC<React.PropsWithChildren<{ className?: string; max?: number }>> = ({ children, className, max = 12 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const t = useMotionTemplate`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;

  return (
    <motion.div
      ref={ref}
      style={{ transform: t as any }}
      onMouseMove={(e) => {
        const b = ref.current?.getBoundingClientRect();
        if (!b) return;
        const px = (e.clientX - b.left) / b.width - 0.5;
        const py = (e.clientY - b.top) / b.height - 0.5;
        ry.set(px * max);
        rx.set(-py * max);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StatGlow: React.FC<{ label: string; value: number }> = ({ label, value }) => {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-20" />
      <div className="relative">
        <div className="text-2xl font-semibold tracking-tight">{value.toLocaleString()}</div>
        <div className="text-xs text-white/60">{label}</div>
      </div>
    </div>
  );
};
