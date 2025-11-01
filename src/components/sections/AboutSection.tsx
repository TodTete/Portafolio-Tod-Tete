import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useInView, animate } from "framer-motion";
import { ScrollAnimationWrapper } from "../ScrollAnimationWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cloud, ShieldCheck, Activity } from "lucide-react";

export const AboutSection: React.FC = () => {
  // Spotlight que sigue al mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);
  const maskImage = useMotionTemplate`radial-gradient(220px_220px_at_${x}px_${y}px, rgba(255,255,255,0.16), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent) {
    const b = ref.current?.getBoundingClientRect();
    if (!b) return;
    x.set(e.clientX - b.left);
    y.set(e.clientY - b.top);
  }

  // Partículas decorativas
  const particles = useMemo(
    () => Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      s: Math.floor(Math.random() * 5) + 3,
      l: Math.random() * 100,
      t: Math.random() * 100,
      d: 6 + Math.random() * 8,
      delay: Math.random() * 2,
    })),
    []
  );

  return (
    <section id="sobre-mi" className="relative py-24 overflow-hidden text-white">
      {/* FONDO HERO: auroras, blobs morph, grid y spotlight */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Auroras */}
        <div className="absolute -inset-x-24 -top-44 h-[520px] bg-[radial-gradient(60%_80%_at_50%_0%,theme(colors.primary/38),transparent_70%)] blur-2xl" />
        <div className="absolute -inset-x-24 top-1/4 h-[520px] bg-[radial-gradient(60%_80%_at_75%_0%,theme(colors.accent/30),transparent_70%)] blur-3xl" />

        {/* Grid sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(#151a27_1px,transparent_1px),linear-gradient(90deg,#151a27_1px,transparent_1px)] bg-[size:46px_46px] opacity-30 mix-blend-overlay" />

        {/* Blobs morphing */}
        <div className="absolute left-[-10%] top-1/3 w-[420px] h-[420px] bg-primary/25 blur-3xl rounded-[40%_60%_60%_40%/40%_40%_60%_60%] animate-[morph_14s_ease-in-out_infinite]" />
        <div className="absolute right-[-12%] top-[55%] w-[360px] h-[360px] bg-accent/25 blur-3xl rounded-[60%_40%_40%_60%/50%_60%_40%_50%] animate-[morph_18s_ease-in-out_infinite_reverse]" />

        {/* Partículas */}
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.8, 0.15], y: [0, -14, 0], x: [0, 12, 0] }}
            transition={{ duration: p.d, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-white/20 shadow-[0_0_12px_0_theme(colors.white/30)]"
            style={{ width: p.s, height: p.s, left: `${p.l}%`, top: `${p.t}%` }}
          />
        ))}
      </div>

      {/* Spotlight follow */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{ WebkitMaskImage: hovering ? (maskImage as any) : undefined, maskImage: hovering ? (maskImage as any) : undefined }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(900px_360px_at_50%_0%,rgba(99,102,241,0.16),transparent)]" />
      </motion.div>

      {/* Encabezado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
              <span className="gradient-text bg-[length:220%_220%] animate-gradient-move">Sobre Mí</span>
              <span className="block h-[3px] w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto mt-4" />
            </h2>
            <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
              Apasionado por la nube, DevOps y el impacto positivo de la innovación.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: bio + métricas + stack */}
          <LeftColumn />

          {/* RIGHT: features con tilt */}
          <RightFeatures />
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes morph {
          0% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; transform: translateY(0px); }
          50% { border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%; transform: translateY(-10px); }
          100% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

// =====================
// Subcomponentes
// =====================

const LeftColumn: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <ScrollAnimationWrapper animation="slide-in-left">
      <div ref={ref} className="space-y-8">
        <div className="space-y-4 text-white/80">
          <p className="text-lg leading-relaxed">
            Soy <span className="font-semibold text-white">Ricardo Vallejo Sánchez</span>, estudiante de Ingeniería en Desarrollo y Gestión de Software Multiplataforma y desarrollador Full‑Stack centrado en soluciones con datos, DevOps y cloud computing.
          </p>
          <p className="text-lg leading-relaxed">
            He participado en eventos como <span className="font-medium">AWS Community Day</span>, <span className="font-medium">Google Cloud Next</span> y hackathones Web3. También he trabajado en proyectos de ciberseguridad y blockchain. Mi objetivo: construir tecnología útil, innovadora y de impacto real.
          </p>
        </div>

        {/* Métricas animadas */}
        <div className="grid grid-cols-3 gap-4">
          <StatBox label="Años creando" value={3} prefix="+" inView={inView} />
          <StatBox label="Proyectos" value={12} prefix="+" inView={inView} />
          <StatBox label="Certificaciones" value={6} prefix="+" inView={inView} />
        </div>

        {/* Tech Pills */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm tracking-wide text-white/70">Stack principal</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Angular",
              "Tailwind",
              "Node.js",
              "Spring Boot",
              "PHP",
              "Docker",
              "Firebase",
              "GCP",
              "AWS",
              "CI/CD",
              "PostgreSQL",
            ].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-sm hover:bg-white/10 transition">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Grids detallados */}
        <div className="grid grid-cols-2 gap-6 pt-2">
          <div className="space-y-2">
            <h4 className="font-semibold text-primary">Frontend</h4>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• React & Angular</li>
              <li>• Tailwind CSS</li>
              <li>• Laravel (Blade)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-primary">Backend & DevOps</h4>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• Node.js, Spring Boot, PHP</li>
              <li>• AWS & Google Cloud</li>
              <li>• Jenkins, Docker, Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
};

const RightFeatures: React.FC = () => {
  const items = [
    { icon: Brain, title: "Aprendizaje Continuo", desc: "Siempre busco dominar nuevas tecnologías emergentes" },
    { icon: Cloud, title: "Cloud & DevOps", desc: "Experiencia práctica en entornos cloud y automatización" },
    { icon: ShieldCheck, title: "Ciberseguridad", desc: "Exploración constante de la seguridad en sistemas modernos" },
    { icon: Activity, title: "Impacto Real", desc: "Soluciones útiles, escalables y medibles" },
  ];

  return (
    <ScrollAnimationWrapper animation="slide-in-right">
      <div className="grid grid-cols-2 gap-4">
        {items.map((it, i) => (
          <TiltCard key={it.title} i={i} Icon={it.icon} title={it.title} desc={it.desc} />)
        )}
      </div>
    </ScrollAnimationWrapper>
  );
};

const TiltCard: React.FC<{ i: number; Icon: any; title: string; desc: string }> = ({ i, Icon, title, desc }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const t = useMotionTemplate`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;

  return (
    <motion.div
      ref={ref}
      style={{ transform: t as any }}
      onMouseMove={(e) => {
        const b = ref.current?.getBoundingClientRect();
        if (!b) return;
        const px = (e.clientX - b.left) / b.width - 0.5;
        const py = (e.clientY - b.top) / b.height - 0.5;
        ry.set(px * 10);
        rx.set(-py * 10);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      className="relative group"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur" />
      <Card className="relative rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <CardContent className="p-6 text-center">
          <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 group-hover:scale-105 transition">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h4 className="font-semibold mb-1 text-white">{title}</h4>
          <p className="text-sm text-white/70">{desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const StatBox: React.FC<{ label: string; value: number; prefix?: string; inView: boolean }> = ({ label, value, prefix = "", inView }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(v) { node.textContent = `${prefix}${Math.round(v)}`; },
    });
    return () => controls.stop();
  }, [inView, value, prefix]);

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-4 text-center">
      <div className="text-2xl font-semibold tracking-tight"><span ref={ref}>0</span></div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
};