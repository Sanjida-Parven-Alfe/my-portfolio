"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 30, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 30, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(event) => event.stopPropagation()}
          className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]/95 shadow-2xl shadow-black/60"
        >
          <div className="relative h-72 w-full">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-white/10"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-6 p-8 text-slate-200">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80">Featured project</p>
              <h2 className="text-3xl font-semibold text-white">{project.title}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-white">Description</h3>
                <p className="mt-2 text-slate-400">{project.description}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Challenges</h3>
                <p className="mt-2 text-slate-400">{project.challenges}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Future Plans</h3>
              <p className="mt-2 text-slate-400">{project.improvements}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
              >
                View Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-400/50"
              >
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
