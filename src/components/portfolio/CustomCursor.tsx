import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
      if (hidden) setHidden(false);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const enter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, [data-cursor-hover]")) {
        setHovering(true);
      }
    };
    const leave = () => setHovering(false);
    const out = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    document.addEventListener("mouseleave", out);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      document.removeEventListener("mouseleave", out);
    };
  }, [hidden]);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[6px] w-[6px] rounded-full bg-primary mix-blend-difference"
        style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.2s" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-primary mix-blend-difference"
        style={{
          opacity: hidden ? 0 : 1,
          transform: "translate3d(-100px,-100px,0)",
          transition: `width 0.3s var(--ease-out-expo), height 0.3s var(--ease-out-expo), opacity 0.2s, border-color 0.3s`,
          width: hovering ? "56px" : "32px",
          height: hovering ? "56px" : "32px",
          marginLeft: hovering ? "-12px" : "0",
          marginTop: hovering ? "-12px" : "0",
        }}
      />
    </>
  );
};
