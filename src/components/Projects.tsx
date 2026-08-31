import { ArrowUpRight } from "lucide-react";
import { projects } from "../content";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";

export function Projects() {
  return (
    <Section id="projects" className="py-28 md:py-36">
      <SectionHead
        index="04"
        kicker="Projects"
        title="项目实践"
        intro="以下为研究课题（占位内容，可替换为真实经历）。"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-7 transition hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-soft">
                  {p.tag}
                </span>
                <ArrowUpRight className="h-5 w-5 text-faint transition group-hover:text-accent" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-text">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-bg-soft px-2.5 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
