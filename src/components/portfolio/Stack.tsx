import { motion } from "framer-motion";

const groups = [
  {
    title: "Linguagens",
    items: ["Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    items: ["Spring Boot 3", "Spring Security", "Spring Data JPA", "Hibernate", "Spring MVC", "Express.js"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Banco de Dados",
    items: ["MySQL", "PostgreSQL", "JPQL"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Docker Compose", "Git", "GitHub", "AWS (learning)", "Maven"],
  },
  {
    title: "Testes",
    items: ["JUnit 5", "Mockito"],
  },
  {
    title: "Auth & Segurança",
    items: ["JWT", "Spring Security", "Bean Validation"],
  },
  {
    title: "Integrações",
    items: ["Stripe", "Cloudinary", "Resend", "Nodemailer", "Postman", "Insomnia", "Swagger / Springdoc"],
  },
];

export const Stack = () => {
  return (
    <section id="stack" className="relative py-32 md:py-40 border-t border-border-strong">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-32 space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [ 04 / TOOLKIT ]
            </div>
            <div className="font-mono text-xs text-primary">▍ stack.yaml</div>
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
            Ferramentas que eu uso{" "}
            <span className="font-serif-italic text-primary">todo dia</span>.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-strong border border-border-strong">
            {groups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-surface p-6 md:p-7 group hover:bg-surface-elevated transition-colors"
              >
                <div className="flex items-baseline justify-between mb-5">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {g.title}
                  </h3>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-cursor-hover
                    >
                      <span className="text-primary opacity-50">▸</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
