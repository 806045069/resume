import { footer, profile } from "../content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row sm:px-10 lg:px-16 xl:px-20">
        <div className="text-sm text-muted">
          © {year} <span className="text-text">{profile.name}</span> · {profile.school} · {profile.major}
        </div>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {footer.slogan}
        </div>
      </div>
    </footer>
  );
}
