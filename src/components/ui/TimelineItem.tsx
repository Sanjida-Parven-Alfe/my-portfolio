import type { EducationItem, ExperienceItem } from "@/types";

interface TimelineItemProps {
  item: EducationItem | ExperienceItem;
}

function isExperience(item: EducationItem | ExperienceItem): item is ExperienceItem {
  return "role" in item;
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className="relative pl-8 border-l border-white/10">
      <span className="absolute -left-1.5 top-2.5 block h-3.5 w-3.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />
      <h3 className="text-xl font-semibold text-white">{isExperience(item) ? item.role : item.degree}</h3>
      <p className="mt-2 text-cyan-300 font-medium">{isExperience(item) ? item.company : item.institution}</p>
      <p className="mt-1 text-sm text-slate-500">{item.year}</p>
      <p className="mt-3 text-slate-400 leading-relaxed">{item.details}</p>
    </div>
  );
}
