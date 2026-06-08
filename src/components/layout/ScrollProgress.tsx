import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="h-1 w-full overflow-hidden bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 transition-all duration-200"
        style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
      />
    </div>
  );
}
