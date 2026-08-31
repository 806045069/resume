export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="glow absolute -top-48 left-[18%] h-[560px] w-[560px] rounded-full bg-accent/10" />
      <div className="glow absolute right-[-10%] top-1/3 h-[480px] w-[480px] rounded-full bg-accent-2/10" />
      <div className="glow absolute bottom-[-20%] left-[30%] h-[520px] w-[520px] rounded-full bg-accent/5" />
    </div>
  );
}
