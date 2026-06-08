import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineItem } from "@/components/ui/TimelineItem";
import type { EducationItem, ExperienceItem } from "@/types";

interface EducationSectionProps {
  education: EducationItem[];
  experience: ExperienceItem[];
}

export function EducationSection({ education, experience }: EducationSectionProps) {
  return (
    <section id="education" className="px-6 py-24">
      <SectionTitle
        title="Education & Experience"
        highlight="Journey"
        description="A timeline of my studies, certifications, and practical work experience."
      />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 rounded-3xl border border-white/10 bg-[#111827]/80 p-8 shadow-xl shadow-black/20"
        >
          <h3 className="text-2xl font-semibold text-white">Education</h3>
          <div className="space-y-8">
            {education.map((item) => (
              <TimelineItem key={item.degree} item={item} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8 rounded-3xl border border-white/10 bg-[#111827]/80 p-8 shadow-xl shadow-black/20"
        >
          <h3 className="text-2xl font-semibold text-white">Experience</h3>
          <div className="space-y-8">
            {experience.map((item) => (
              <TimelineItem key={`${item.role}-${item.company}`} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
