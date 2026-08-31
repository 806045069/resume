import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-[1700px] px-6 sm:px-10 lg:px-16 xl:px-20 ${
        className ?? ""
      }`}
    >
      {children}
    </section>
  );
}

export function SectionHead({
  index,
  kicker,
  title,
  intro,
}: {
  index: string;
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-accent/60 to-transparent" />
        <span className="font-mono text-xs uppercase tracking-[0.32em] text-faint">{kicker}</span>
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text md:text-[2.5rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{intro}</p>
      )}
    </Reveal>
  );
}
