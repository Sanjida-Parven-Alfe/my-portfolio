import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types";

const ProjectModal = dynamic(() => import("@/components/ui/ProjectModal").then((mod) => mod.ProjectModal), {
  ssr: false,
});

interface ProjectsSectionProps {
  projects: Project[];
  selectedProject: Project | null;
  onOpen: (project: Project) => void;
  onClose: () => void;
}

export function ProjectsSection({ projects, selectedProject, onOpen, onClose }: ProjectsSectionProps) {
  return (
    <section id="projects" className="bg-[#050814] px-6 py-24">
      <SectionTitle
        title="Projects"
        highlight="Featured"
        description="Selected projects that highlight my MERN stack skills, UX focus, and production readiness."
      />
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={onClose} />
    </section>
  );
}
