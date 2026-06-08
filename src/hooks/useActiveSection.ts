"use client";

import { useEffect, useState } from "react";

const sectionIds = ["about", "skills", "education", "projects", "contact"] as const;

type SectionId = (typeof sectionIds)[number];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topSection = visible.reduce((current, next) => {
            return current.boundingClientRect.top < next.boundingClientRect.top ? current : next;
          });
          setActiveSection(topSection.target.id as SectionId);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
