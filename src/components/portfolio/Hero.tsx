import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  { prompt: "$", text: "whoami", delay: 0 },
  { prompt: ">", text: "matheus_martins :: backend_dev", delay: 600, primary: true },
  { prompt: "$", text: "cat /etc/profile", delay: 1400 },
  { prompt: ">", text: "18yo · São Paulo · Java + Spring Boot", delay: 2000, primary: true },
  { prompt: "$", text: "ls ./achievements", delay: 2800 },
  { prompt: ">", text: "saas_em_producao  2x_medalha_omasp  autodidata", delay: 3400, primary: true },
  { prompt: "$", text: "status", delay: 4200 },
  { prompt: ">", text: "disponível para júnior / estágio", delay: 4800, primary: true, accent: true },
];

export const Hero = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 50);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24">
      {/* Decorative numbers */}
      <div className="pointer-events-none absolute right-6 top-32 font-mono text-[10px] tracking-widest text-muted-foreground hidden md:block">
        <div className="space-y-1">
          <div>// SECTION_00</div>
          <div className="text-primary">[ INTRO ]</div>
          <div>LAT: -23.5505</div>
          <div>LNG: -46.6333</div>
        </div>
      </div>

      <div className="container relative z-10 grid grid-cols-12 gap-4 py-10">
        {/* Left column — meta */}
        <div className="col-span-12 md:col-span-3 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
          >
            <div>—— PORTFOLIO / 2026</div>
            <div className="mt-1">v.001 · BUILD #1984</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              ROLE
            </div>
            <div className="font-mono text-sm text-foreground">
              backend<br />
              <span className="text-primary">developer</span>
            </div>
          </motion.div>
        </div>

        {/* Center column — name */}
        <div className="col-span-12 md:col-span-9 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="font-display font-bold leading-[0.85] tracking-tighter"
          >
            <h1 className="text-[18vw] md:text-[14vw] lg:text-[11vw] text-balance">
              <span className="block">matheus</span>
              <span className="block text-primary glitch" data-text="martins.">
                martins<span className="text-foreground">.</span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl font-display text-lg md:text-xl text-muted-foreground text-pretty"
          >
            Construindo APIs, microsserviços e <span className="font-serif-italic text-foreground">um SaaS em produção</span> — com café, Java e atenção obsessiva ao detalhe.
          </motion.p>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 max-w-2xl brutal-border bg-surface relative scanline"
          >
            <div className="flex items-center gap-2 border-b border-border-strong px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                martns@portfolio:~$
              </span>
            </div>
            <div className="p-5 font-mono text-xs md:text-sm space-y-1.5 min-h-[220px]">
              {lines.map((l, idx) => {
                const charProgress = Math.max(0, tick * 50 - l.delay);
                const visibleChars = Math.min(l.text.length, Math.floor(charProgress / 30));
                const showLine = charProgress > 0;
                if (!showLine) return null;
                return (
                  <div key={idx} className="flex gap-3">
                    <span className={l.primary ? "text-primary" : "text-muted-foreground"}>
                      {l.prompt}
                    </span>
                    <span className={l.accent ? "text-accent" : l.primary ? "text-foreground" : "text-foreground/80"}>
                      {l.text.slice(0, visibleChars)}
                      {visibleChars < l.text.length && idx === lines.findIndex((x, i) => tick * 50 - x.delay > 0 && tick * 50 - x.delay < x.text.length * 30 + 30 && i === idx) && (
                        <span className="text-primary animate-pulse">▊</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-border-strong bg-background/80 backdrop-blur-sm py-4 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track font-mono text-sm uppercase tracking-widest">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-8">
                {["JAVA", "SPRING BOOT", "POSTGRESQL", "DOCKER", "AWS", "JWT", "STRIPE", "NEXT.JS", "TYPESCRIPT", "MICROSERVICES", "REST API", "1984 COMMITS"].map((t) => (
                  <span key={t} className="flex items-center gap-8">
                    <span className="text-primary">●</span>
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-6 bottom-24 hidden md:flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-12 w-px bg-primary"
        />
      </div>
    </section>
  );
};
