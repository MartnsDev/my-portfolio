import { motion } from "framer-motion";

const items = [
  {
    period: "nov/2025 — presente",
    title: "GestPro · SaaS em produção",
    org: "Desenvolvedor Solo",
    desc: "Concepção, dev, deploy e manutenção de plataforma completa de gestão comercial.",
    tag: "PROJETO",
  },
  {
    period: "mai/2025 — presente",
    title: "Trilha Backend Java",
    org: "Alura",
    desc: "8+ certificações: Spring Boot 3, JPA, Spring Security, Testes com JUnit/Mockito, REST API, Deploy.",
    tag: "FORMAÇÃO",
  },
  {
    period: "jan/2025 — mai/2025",
    title: "Soft Skills e Projeto Profissional",
    org: "Instituto PROA",
    desc: "Comunicação profissional, raciocínio lógico, autoconhecimento e planejamento de carreira.",
    tag: "FORMAÇÃO",
  },
  {
    period: "2025",
    title: "Certificações Complementares",
    org: "IFMG · Cursa · Santander · CEJAM",
    desc: "JavaScript Avançado · MySQL · Python · IA Generativa · Pacote Office.",
    tag: "CERTS",
  },
  {
    period: "2024",
    title: "2× Medalha de Prata · OMASP",
    org: "Olimpíada de Matemática do Estado de SP",
    desc: "Reconhecimento consecutivo em duas edições da olimpíada estadual.",
    tag: "CONQUISTA",
  },
];

export const Timeline = () => {
  return (
    <section id="trajetoria" className="relative py-32 md:py-40 border-t border-border-strong">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-32 space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [ 05 / HISTÓRICO ]
            </div>
            <div className="font-mono text-xs text-primary">▍ git log</div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9 space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-light leading-[1] tracking-tighter"
          >
            Como cheguei{" "}
            <span className="font-serif-italic text-primary">aqui</span>.
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-border-strong" />

            <ol className="space-y-10">
              {items.map((it, i) => (
                <motion.li
                  key={it.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative pl-8 md:pl-12"
                >
                  <span className="absolute left-0 top-2 h-4 w-4 border-2 border-primary bg-background" />
                  <span className="absolute left-1 top-3 h-2 w-2 bg-primary" />

                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary px-2 py-0.5">
                      {it.tag}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {it.period}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {it.title}
                  </h3>
                  <p className="font-mono text-sm text-primary mt-1">{it.org}</p>
                  <p className="text-muted-foreground mt-2 max-w-2xl">{it.desc}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
