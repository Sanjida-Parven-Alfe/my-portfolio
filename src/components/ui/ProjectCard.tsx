import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      className="group flex flex-col h-full overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/80 shadow-2xl shadow-black/40 transition-all"
    >
      <div className="relative h-64 overflow-hidden shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={project.featured ?? false}
        />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex-grow space-y-5">
          <div>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          View Details
        </button>
      </div>
    </motion.article>
  );
}
