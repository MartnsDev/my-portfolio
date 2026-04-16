import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1800;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(start + (to - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return <span ref={ref}>{val.toLocaleString("pt-BR")}{suffix}</span>;
};

export const About = () => {
  return (
    <section id="sobre" className="relative py-32 md:py-40 border-t border-border-strong">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-32 space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [ 01 / SOBRE ]
            </div>
            <div className="font-mono text-xs text-primary">▍ profile.json</div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9 space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-balance"
          >
            Backend dev de{" "}
            <span className="text-primary font-bold">18 anos</span>{" "}
            que escolheu construir <span className="font-serif-italic">silenciosamente</span> antes de aparecer.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              <p>
                Sou autodidata, foco em <span className="text-foreground font-medium">Java + Spring Boot</span>, e tenho um SaaS próprio rodando em produção atendendo clientes reais.
              </p>
              <p>
                Construo APIs REST, arquitetura de microsserviços, autenticação com JWT, integrações com Stripe e Cloudinary. Container, deploy, monitoramento — tudo na mão.
              </p>
              <p className="text-foreground">
                <span className="text-primary">▍</span> Estudo todo dia. Codo todo dia. Quebro coisa todo dia. Aprendo todo dia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-px bg-border-strong border border-border-strong"
            >
              {[
                { n: 1984, s: "", l: "commits / ano" },
                { n: 8, s: "+", l: "certificações" },
                { n: 2, s: "x", l: "medalha OMASP" },
                { n: 1, s: "", l: "SaaS em produção" },
              ].map((s) => (
                <div key={s.l} className="bg-surface p-6 hover:bg-surface-elevated transition-colors">
                  <div className="font-mono text-3xl md:text-4xl font-bold text-primary">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Personal data table */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="brutal-border divide-y divide-border-strong font-mono text-sm"
          >
            {[
              ["LOCATION", "São Paulo, SP — Brasil"],
              ["PRONOUNS", "he/him"],
              ["FOCUS", "Backend · APIs REST · Microservices · SaaS"],
              ["LEARNING", "AWS · Docker avançado"],
              ["AVAILABLE", "Júnior · Estágio · Presencial · Híbrido · Remoto"],
              ["CONTACT", "mtz.martinss03@gmail.com"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col md:flex-row md:items-center px-5 py-3 hover:bg-surface transition-colors group"
                data-cursor-hover
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground md:w-32">
                  {k}
                </span>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {v}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
