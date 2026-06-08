import type { Skill } from "@/types";

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-500/10">
      {skill.icon ? <img src={skill.icon} alt={skill.name} className="h-4 w-4 rounded-sm" /> : null}
      <span>{skill.name}</span>
    </div>
  );
}
