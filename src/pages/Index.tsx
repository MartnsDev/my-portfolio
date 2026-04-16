import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { ParticleField } from "@/components/portfolio/ParticleField";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { GestProCase } from "@/components/portfolio/GestProCase";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Matheus Martins · Backend Developer · Java + Spring Boot";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Portfólio de Matheus Martins — desenvolvedor backend (Java, Spring Boot, Microsserviços, Docker, AWS) com SaaS em produção. São Paulo, BR."
      );
    }
  }, []);

  return (
    <SmoothScroll>
      <div className="relative bg-background text-foreground min-h-screen">
        <CustomCursor />
        <ParticleField />
        <div className="noise-overlay" />
        <Nav />
        <main className="relative z-10">
          <Hero />
          <About />
          <GestProCase />
          <Projects />
          <Stack />
          <Timeline />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
};

export default Index;
