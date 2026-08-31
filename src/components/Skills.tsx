import type { LucideIcon } from "lucide-react";
import { Atom, Flame, FlaskConical, Microscope, ShieldAlert, TrendingUp } from "lucide-react";
import { skills } from "../content";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";

const icons: Record<string, LucideIcon> = {
  flask: FlaskConical,
  flame: Flame,
  microscope: Microscope,
  atom: Atom,
  shield: ShieldAlert,
  trend: TrendingUp,
};

export function Skills() {
  return (
    <Section id="skills" className="py-28 md:py-36">
      <SectionHead
        index="03"
        kicker="Skills"
        title="核心技能"
        intro="这里填写一句技能介绍（占位）。"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-surface/50 p-7 transition hover:-translate-y-1 hover:border-accent/40 hover:bg-surface">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-bg-soft text-accent transition group-hover:bg-accent/10">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
