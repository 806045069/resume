import { GraduationCap } from "lucide-react";
import { education, profile } from "../content";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";

export function Education() {
  return (
    <Section id="education" className="py-28 md:py-36">
      <SectionHead index="02" kicker="Education" title="教育背景" />
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/50">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-accent-2/40" />
          <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:p-12">
            <div>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-bg-soft text-accent">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                    {profile.schoolEn}
                  </div>
                  <h3 className="mt-1 text-2xl font-semibold text-text">{education.school}</h3>
                </div>
              </div>
              <div className="mt-7 text-lg font-medium text-accent-soft">{education.degree}</div>
              <ul className="mt-6 space-y-3">
                {education.items.map((it, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start md:justify-end">
              <div className="rounded-xl border border-line bg-bg-soft px-6 py-4 font-mono text-sm text-accent-soft">
                {education.period}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
