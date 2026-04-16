import { motion } from "framer-motion";

const projects = [
  {
    name: "AluraFood_MS-AWS",
    desc: "Arquitetura de microsserviços com Java e Spring Boot — API Gateway, Eureka, comunicação síncrona entre serviços e MySQL dockerizado.",
    tags: ["Java", "Spring Cloud", "Eureka", "Docker"],
    lang: "Java",
    color: "#f89820",
    url: "https://github.com/MartnsDev/AluraFood_MS-AWS",
  },
  {
    name: "voll_med",
    desc: "Aplicação de gerenciamento de consultas médicas — agendamento, listagem e cancelamento, com JWT, validações e testes automatizados.",
    tags: ["Spring Boot", "JWT", "JUnit", "MySQL"],
    lang: "Java",
    color: "#f89820",
    url: "https://github.com/MartnsDev/voll_med",
  },
  {
    name: "PetHub",
    desc: "API REST para gerenciamento de adoção de pets — cadastro de tutores, abrigos, pets e solicitações, com auth JWT e Swagger.",
    tags: ["Spring Boot", "JWT", "Swagger", "JPA"],
    lang: "Java",
    color: "#f89820",
    url: "https://github.com/MartnsDev/PetHub",
  },
  {
    name: "Screenmatch-Web",
    desc: "Aplicação MVC com backend Java/PostgreSQL e frontend JS/HTML/CSS, comunicação via API REST com JSON.",
    tags: ["Java", "PostgreSQL", "MVC", "REST"],
    lang: "Java",
    color: "#f89820",
    url: "https://github.com/MartnsDev/Screenmatch-Web",
  },
  {
    name: "my-portfolio",
    desc: "Portfólio pessoal anterior apresentando habilidades e projetos como desenvolvedor web.",
    tags: ["HTML", "CSS", "JS"],
    lang: "HTML",
    color: "#e34c26",
    url: "https://github.com/MartnsDev/my-portfolio",
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="relative py-32 md:py-40 border-t border-border-strong">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-32 space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [ 03 / OPEN SOURCE ]
            </div>
            <div className="font-mono text-xs text-primary">▍ ./repos</div>
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
            Outros{" "}
            <span className="font-serif-italic text-primary">experimentos</span>{" "}
            de código.
          </motion.h2>

          <div className="brutal-border divide-y divide-border-strong">
            {projects.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group block p-6 md:p-8 hover:bg-surface transition-all relative overflow-hidden"
                data-cursor-hover
              >
                <div className="grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-12 md:col-span-1 font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-12 md:col-span-7 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                        ↗
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base max-w-xl text-pretty">
                      {p.desc}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-border-strong text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="col-span-12 md:col-span-1 flex md:justify-end items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: p.color }}
                    />
                    <span className="text-muted-foreground">{p.lang}</span>
                  </div>
                </div>
                <div className="absolute -bottom-px left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://github.com/MartnsDev"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
            data-cursor-hover
          >
            <span className="h-px w-12 bg-current" />
            Ver tudo no GitHub
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
