import type { SkillCategory } from "@/types";

export const skills: SkillCategory = {
  Frontend: [
    { name: "HTML", percentage: "100%" },
    { name: "CSS", percentage: "95%" },
    { name: "JavaScript", percentage: "90%" },
    { name: "TypeScript", percentage: "85%" },
    { name: "React", percentage: "90%" },
    { name: "Next.js", percentage: "85%" },
    { name: "Tailwind CSS", percentage: "95%" },
  ],
  Backend: [
    { name: "Node.js", percentage: "80%" },
    { name: "Express", percentage: "85%" },
    { name: "MongoDB", percentage: "75%" },
    { name: "Firebase", percentage: "70%" },
  ],
  Tools: [
    { name: "Git", percentage: "90%" },
    { name: "GitHub", percentage: "95%" },
    { name: "VS Code", percentage: "100%" },
    { name: "Figma", percentage: "85%" },
    { name: "Postman", percentage: "90%" },
  ],
};
