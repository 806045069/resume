import type { LucideIcon } from "lucide-react";
import { Award, FlaskConical, GraduationCap, MapPin } from "lucide-react";
import { about } from "../content";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";

const icons: Record<string, LucideIcon> = {
  school: GraduationCap,
  degree: Award,
  flask: FlaskConical,
  pin: MapPin,
};

export function About() {
  return (
    <Section id="about" className="py-28 md:py-36">
      <SectionHead index="01" kicker="About" title="关于我" />
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <Reveal className="space-y-6 text-[15px] leading-[1.9] text-muted md:text-base">
          {about.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <div className="grid content-start gap-4">
          {about.facts.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal key={f.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 rounded-xl border border-line bg-surface/60 p-4 transition hover:border-accent/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-bg-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                      {f.label}
                    </div>
                    <div className="mt-1 text-[15px] font-medium text-text">{f.value}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
