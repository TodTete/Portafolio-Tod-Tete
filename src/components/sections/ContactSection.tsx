import React, { useMemo, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ScrollAnimationWrapper } from "../ScrollAnimationWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Linkedin, Github, Copy } from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "vallejoricardo3@gmail.com",
    action: () => window.open("mailto:vallejoricardo3@gmail.com"),
    color: "from-sky-500/25 to-blue-500/25 text-sky-300",
    copy: "vallejoricardo3@gmail.com",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "/in/ricardovallejotodtete",
    action: () => window.open("https://www.linkedin.com/in/ricardovallejotodtete", "_blank"),
    color: "from-blue-600/25 to-indigo-600/25 text-blue-400",
    copy: "https://www.linkedin.com/in/ricardovallejotodtete",
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    value: "/TodTete",
    action: () => window.open("https://github.com/TodTete", "_blank"),
    color: "from-zinc-600/25 to-slate-600/25 text-zinc-300",
    copy: "https://github.com/TodTete",
  },
];

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  // Fondo con spotlight que sigue al mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);
  const maskImage = useMotionTemplate`radial-gradient(220px_220px_at_${x}px_${y}px, rgba(255,255,255,0.14), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent) {
    const b = ref.current?.getBoundingClientRect();
    if (!b) return;
    x.set(e.clientX - b.left);
    y.set(e.clientY - b.top);
  }

  // Partículas decorativas
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        size: Math.floor(Math.random() * 6) + 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        d: 6 + Math.random() * 6,
        delay: Math.random() * 2,
      })),
    []
  );

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      toast.success("Copiado al portapapeles", { description: text });
      setTimeout(() => setCopied(null), 2000);
    } catch {
      toast.error("No se pudo copiar");
    }
  };

  return (
    <section id="contacto" className="relative py-24 overflow-hidden text-white">
      {/* ===== FONDO ANIMADO: auroras, ondas y partículas ===== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Auroras radiales */}
        <div className="absolute -inset-x-24 -top-40 h-[520px] bg-[radial-gradient(60%_80%_at_30%_0%,theme(colors.primary/35),transparent_70%)] blur-2xl" />
        <div className="absolute -inset-x-24 top-1/4 h-[520px] bg-[radial-gradient(60%_80%_at_80%_0%,theme(colors.accent/30),transparent_70%)] blur-3xl" />

        {/* Rejilla sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(#151a27_1px,transparent_1px),linear-gradient(90deg,#151a27_1px,transparent_1px)] bg-[size:44px_44px] opacity-30 mix-blend-overlay" />

        {/* Ondas luminiscentes */}
        <div className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <div className="absolute -inset-x-20 top-10 h-40 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.primary/28),transparent_25%,theme(colors.accent/28),transparent_75%)] blur-2xl animate-[drift_13s_linear_infinite]" />
          <div className="absolute -inset-x-40 top-40 h-40 bg-[conic-gradient(from_120deg_at_50%_50%,theme(colors.accent/22),transparent_35%,theme(colors.primary/22),transparent_85%)] blur-3xl animate-[drift_18s_linear_infinite_reverse]" />
        </div>

        {/* Partículas */}
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.8, 0.15], y: [0, -16, 0], x: [0, 12, 0] }}
            transition={{ duration: p.d, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-white/20 shadow-[0_0_12px_0_theme(colors.white/30)]"
            style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
              <span className="gradient-text bg-[length:220%_220%] animate-gradient-move">Hablemos</span>
              <span className="block h-[3px] w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto mt-4" />
            </h2>
            <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Estoy disponible para colaborar en ideas increíbles.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Tarjetas de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CONTACT_METHODS.map((method, index) => (
            <ScrollAnimationWrapper key={method.title} animation="bounce-in" threshold={0.3}>
              <Magnetic>
                <div className="relative group">
                  {/* Borde animado / arcoíris suave */}
                  <div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[length:300%_300%] bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 via-yellow-500 to-pink-500 animate-border" />

                  <Card
                    className="relative bg-slate-900/60 backdrop-blur-sm border border-white/10 rounded-2xl cursor-pointer overflow-hidden"
                    onClick={method.action}
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    {/* Glow interno */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_200px_at_80%_0%,rgba(255,255,255,0.06),transparent_60%)]" />

                    <CardContent className="p-6 text-center relative">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${method.color} mb-4 shadow-[0_0_14px_0_rgba(255,255,255,0.15)]`}> 
                        {method.icon}
                      </div>
                      <h4 className="font-semibold mb-1 text-white">{method.title}</h4>
                      <p className="text-sm text-white/70">{method.value}</p>

                      {method.copy && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(method.copy!);
                          }}
                          className="mt-3 text-xs text-primary hover:underline flex items-center justify-center gap-1 mx-auto"
                        >
                          <Copy className="w-3 h-3" />
                          {copied === method.copy ? "Copiado" : "Copiar"}
                        </button>
                      )}

                      {/* Ripple al click */}
                      <span className="pointer-events-none absolute inset-0 opacity-0 group-active:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(255,255,255,0.14),transparent_25%)]" />
                    </CardContent>
                  </Card>
                </div>
              </Magnetic>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Banner disponibilidad */}
        <ScrollAnimationWrapper animation="fade-in-up" threshold={0.3}>
          <div className="relative max-w-3xl mx-auto mt-12">
            <div className="absolute -inset-[2px] rounded-2xl animate-border bg-[length:400%_400%] bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 via-yellow-500 to-pink-500 opacity-70" />
            <div className="relative bg-slate-900/60 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
              <h4 className="font-semibold text-xl mb-2 gradient-text">¿Trabajamos juntos?</h4>
              <p className="text-white/70 mb-4">
                Disponible para proyectos freelance, consultorías y oportunidades remotas o presenciales.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-white/5">
                <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-primary font-medium">Disponible para nuevos proyectos</span>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes drift { to { transform: translateX(20%); } }
        @keyframes drift_reverse { to { transform: translateX(-20%); } }
        .animate-border { animation: borderShift 8s linear infinite; }
        @keyframes borderShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </section>
  );
};

// ==============
// UI Bits
// ==============

const Magnetic: React.FC<React.PropsWithChildren<{ strength?: number }>> = ({ children, strength = 18 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
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
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="will-change-transform transition-transform duration-300"
    >
      {children}
    </motion.div>
  );
};