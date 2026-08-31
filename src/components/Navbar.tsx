import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { nav, profile } from "../content";

export function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX }}
        className="h-[2px] origin-left bg-gradient-to-r from-accent/80 to-accent-2/60"
      />
      <div className="border-b border-line/70 bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1700px] items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-20">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-sm font-semibold text-accent">
              唐
            </span>
            <span className="hidden flex-col sm:flex">
              <span className="text-sm font-semibold leading-tight text-text">{profile.name}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                {profile.role}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative rounded-lg px-4 py-2 text-sm transition-colors ${
                  active === n.id ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-accent/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{n.label}</span>
              </a>
            ))}
          </nav>

          <button
            onClick={onOpenContact}
            className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-medium text-accent-soft transition hover:bg-accent/20"
          >
            联系我
          </button>
        </div>
      </div>
    </header>
  );
}
