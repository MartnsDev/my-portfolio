import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { id: "sobre", label: "Sobre", num: "01" },
  { id: "gestpro", label: "GestPro", num: "02" },
  { id: "projetos", label: "Projetos", num: "03" },
  { id: "stack", label: "Stack", num: "04" },
  { id: "trajetoria", label: "Trajetória", num: "05" },
  { id: "contato", label: "Contato", num: "06" },
];

export const Nav = () => {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "America/Sao_Paulo",
        })
      );
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] bg-primary origin-left"
        style={{ width }}
      />
      <header className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="font-mono text-xs tracking-widest text-foreground" data-cursor-hover>
            <span className="text-primary">▍</span> MARTNS<span className="text-primary">.</span>DEV
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                data-cursor-hover
              >
                <span className="text-[10px] text-muted-foreground group-hover:text-primary">{item.num}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>SP / BR</span>
            <span className="text-primary">●</span>
            <span>{time}</span>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden font-mono text-xs uppercase"
            data-cursor-hover
          >
            {open ? "[ FECHAR ]" : "[ MENU ]"}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-0 top-16 z-40 bg-background border-y border-border-strong md:hidden"
        >
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 font-mono text-sm uppercase tracking-wider"
              >
                <span className="text-xs text-primary">{item.num}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
};
