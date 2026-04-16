import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Email", value: "mtz.martinss03@gmail.com", href: "mailto:mtz.martinss03@gmail.com" },
  { label: "LinkedIn", value: "in/matheusmartnsdev", href: "https://www.linkedin.com/in/matheusmartnsdev/" },
  { label: "GitHub", value: "@MartnsDev", href: "https://github.com/MartnsDev" },
  { label: "WhatsApp", value: "(11) 93264-9629", href: "https://wa.me/5511932649629" },
  { label: "Instagram", value: "@martnsx_rb", href: "https://www.instagram.com/martnsx_rb/" },
  { label: "SaaS", value: "gestpro.site", href: "https://gestpro.site" },
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "mtz.martinss03@gmail.com";

  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="relative py-32 md:py-40 border-t border-border-strong overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-transparent pointer-events-none" />

      <div className="container relative grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-32 space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [ 06 / CONTATO ]
            </div>
            <div className="font-mono text-xs text-primary">▍ ./connect</div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9 space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
              ●  disponível para júnior · estágio
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tighter text-balance">
              Vamos construir{" "}
              <span className="font-serif-italic text-primary">algo bom</span>{" "}
              juntos?
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={copy}
            className="group block w-full text-left brutal-border bg-surface hover:bg-surface-elevated transition-all p-6 md:p-8 relative overflow-hidden"
            data-cursor-hover
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
              [ click para copiar ]
            </div>
            <div className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground group-hover:text-primary transition-colors break-all">
              {email}
            </div>
            <div className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest">
              {copied ? (
                <span className="text-primary">✓ copiado</span>
              ) : (
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  copiar →
                </span>
              )}
            </div>
            <div className="absolute -bottom-px left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700" />
          </motion.button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-strong border border-border-strong">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface hover:bg-surface-elevated transition-all p-5 group"
                data-cursor-hover
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  {l.label}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                    {l.value}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                    ↗
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container relative mt-32 pt-8 border-t border-border-strong">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <div>
            © 2026 Matheus Martins · construído à mão em São Paulo
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">●</span>
            sistema operacional
          </div>
        </div>
      </footer>
    </section>
  );
};
