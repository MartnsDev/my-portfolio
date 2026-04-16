import { motion } from "framer-motion";

const features = [
  { k: "PDV", v: "Pagamento misto: Pix, Dinheiro, Débito, Crédito · troco automático" },
  { k: "ESTOQUE", v: "Controle em tempo real com reversão automática em cancelamentos" },
  { k: "STRIPE", v: "Webhooks para assinaturas e pagamentos recorrentes" },
  { k: "RELATÓRIOS", v: "Exportação PDF / CSV / HTML · gráficos por período e forma de pagamento" },
  { k: "MULTI-TENANT", v: "Isolamento completo de dados por empresa" },
  { k: "AUTOMAÇÃO", v: "Fechamento automático de caixa via Spring @Scheduled" },
];

export const GestProCase = () => {
  return (
    <section id="gestpro" className="relative py-32 md:py-40 border-t border-border-strong overflow-hidden">
      {/* Bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container relative grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-32 space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [ 02 / CASE STUDY ]
            </div>
            <div className="font-mono text-xs text-primary">▍ projeto_principal</div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9 space-y-12">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary">EM PRODUÇÃO</span>
              <span className="text-muted-foreground">/ gestpro.site</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter"
            >
              Gest<span className="text-primary">Pro</span>
              <span className="font-serif-italic font-light text-muted-foreground text-3xl md:text-5xl ml-3">
                — sistema SaaS de gestão comercial
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              Plataforma completa para pequenos negócios — PDV, estoque, caixa, relatórios e assinaturas. Concebido, desenvolvido, deployado e mantido <span className="text-foreground">solo</span>.
            </motion.p>
          </div>

          {/* Tech stack chips */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {["Java", "Spring Boot", "MySQL", "Next.js", "TypeScript", "Docker", "Spring Security", "JWT", "Stripe", "Cloudinary"].map((t) => (
              <span
                key={t}
                className="brutal-border px-3 py-1.5 font-mono text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                data-cursor-hover
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-strong border border-border-strong">
            {features.map((f, i) => (
              <motion.div
                key={f.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-surface p-6 md:p-7 hover:bg-surface-elevated transition-all group relative overflow-hidden"
                data-cursor-hover
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
                  {String(i + 1).padStart(2, "0")} · {f.k}
                </div>
                <p className="text-foreground text-base leading-relaxed">{f.v}</p>
                <div className="absolute -bottom-px -right-px h-2 w-12 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://gestpro.site"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary-glow transition-all"
              data-cursor-hover
            >
              <span>Ver em produção</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://github.com/MartnsDev/Gest-Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 brutal-border px-6 py-4 font-mono text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
              data-cursor-hover
            >
              <span>Repositório</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
