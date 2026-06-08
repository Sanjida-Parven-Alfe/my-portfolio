import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import type { SkillCategory } from "@/types";

interface SkillsSectionProps {
  skills: SkillCategory; // Changed back to object format
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-24 bg-[#050814]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#FF4F4F] uppercase bg-[#FF4F4F]/10 rounded-full">
            PROFESSIONAL SKILLS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F4F] to-[#f97316]">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I craft fast, scalable, and responsive web applications using the latest modern technologies and best practices in the MERN stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {Object.entries(skills)
            .filter(([category]) => category !== "Tools")
            .map(([categoryName, skillList], idx) => (
            <div key={idx} className="space-y-8 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
              <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF4F4F]/10 text-[#FF4F4F]">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">{categoryName}</h3>
              </div>
              
              <div className="space-y-6">
                {skillList.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-base font-bold text-slate-200 group-hover:text-[#FF4F4F] transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-slate-400">
                        {skill.percentage || "80%"}
                      </span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      {/* Progress Bar Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.percentage || "80%" }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-[#FF4F4F] to-[#f97316] h-2.5 rounded-full transition-all duration-1000 ease-out"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
