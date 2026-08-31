import { motion, type Variants } from "framer-motion";
import { ArrowDown, MapPin, ShieldCheck } from "lucide-react";
import { profile } from "../content";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const quickFacts = [
  { k: "院校", v: profile.school },
  { k: "专业", v: profile.major },
  { k: "城市", v: profile.location },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-[1700px] items-center gap-16 px-6 sm:px-10 lg:px-16 xl:px-20 lg:grid-cols-[1.6fr_1fr]">
        {/* 左：文案 */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            <ShieldCheck className="h-4 w-4" />
            {profile.schoolEn} · {profile.school}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 text-[clamp(3.2rem,7vw,6.5rem)] font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-lg text-muted md:text-xl">
            {profile.degree} · <span className="text-text">{profile.major}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-base"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-[#05121c] transition hover:bg-accent-soft"
            >
              查看项目实践
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 text-sm font-medium text-text transition hover:border-accent/50 hover:text-accent-soft"
            >
              联系方式
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {quickFacts.map((s) => (
              <div key={s.k}>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-faint">{s.k}</div>
                <div className="mt-2 text-sm font-medium text-text">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 右：头像占位 + 装饰 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 rounded-full border border-line" />
            <div className="absolute inset-6 rounded-full border border-accent/20" />
            <div className="animate-spin-slow absolute inset-3 rounded-full border border-dashed border-accent/25" />
            <div className="absolute inset-10 grid place-items-center rounded-full bg-gradient-to-br from-surface to-bg-soft">
              <span className="text-gradient text-7xl font-bold">唐</span>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-10 flex items-center gap-2 rounded-xl border border-line bg-surface/80 px-4 py-3 backdrop-blur"
          >
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted">{profile.location}</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-2 bottom-14 flex items-center gap-2 rounded-xl border border-line bg-surface/80 px-4 py-3 backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted">{profile.major}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部滚动提示 */}
      <motion.a
        href="#about"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-faint transition hover:text-accent">
          <ArrowDown className="h-4 w-4" />
        </span>
      </motion.a>
    </section>
  );
}
