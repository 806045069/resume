import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact } from "../content";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";

const items = [
  { icon: Mail, label: "邮箱", value: contact.email, href: `mailto:${contact.email}` },
  {
    icon: Phone,
    label: "电话",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/[^0-9]/g, "")}`,
  },
  { icon: MessageCircle, label: "微信", value: contact.wechat },
  { icon: MapPin, label: "地址", value: contact.location },
];

export function Contact() {
  return (
    <Section id="contact" className="py-28 md:py-36">
      <SectionHead index="06" kicker="Contact" title="联系方式" />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => {
              const Icon = it.icon;
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-bg-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                      {it.label}
                    </div>
                    <div className="mt-1 truncate text-[15px] font-medium text-text">{it.value}</div>
                  </div>
                </>
              );
              return it.href ? (
                <a
                  key={it.label}
                  href={it.href}
                  className="flex items-center gap-4 rounded-xl border border-line bg-surface/60 p-5 transition hover:border-accent/40"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={it.label}
                  className="flex items-center gap-4 rounded-xl border border-line bg-surface/60 p-5"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/50 p-8">
            <div className="glow absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10" />
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
                Get in touch
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-text">期待与你交流</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{contact.note}</p>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#05121c] transition hover:bg-accent-soft"
            >
              <Mail className="h-4 w-4" />
              发送邮件
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
