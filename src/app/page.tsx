"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { LatestServicesSection } from "@/components/sections/LatestServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { personalInfo, projects, skills, education, experience, servicesData, statsData, latestServicesData } from "@/data";
import type { Project } from "@/types";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050814] text-slate-200">
      <Navbar />
      <main>
        <HeroSection info={personalInfo} />
        {/* <ServicesSection services={servicesData} /> */}
        {/* <StatsSection data={statsData} /> */}
        {/* <LatestServicesSection data={latestServicesData} /> */}
        <SkillsSection skills={skills} />
        <EducationSection education={education} experience={experience} />
        <ProjectsSection
          projects={projects}
          selectedProject={selectedProject}
          onOpen={setSelectedProject}
          onClose={() => setSelectedProject(null)}
        />
        <ContactSection info={personalInfo} />
      </main>
      <Footer />
      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-2xl shadow-cyan-500/30 transition hover:scale-105"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      ) : null}
    </div>
  );
}
