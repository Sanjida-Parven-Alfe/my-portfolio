import type { PersonalInfo, Certificate, ExperienceItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Sanjida Parven Alfe",
  designation: "MERN Stack Developer",
  about:
    "I build fast and polished web experiences using Next.js, React, and Tailwind CSS. My work is centered on clean architecture, performance, and UI clarity, with a strong focus on maintainability and accessibility.",
  resumeLink: "/Sanjida Parven Alfe.pdf",
  email: "sanjidaparvinalfe@gmail.com",
  phone: "+880 1316 315141",
  socials: {
    github: "https://github.com/Sanjida-Parven-Alfe",
    linkedin: "https://www.linkedin.com/in/sanjida-parven-alfe/",
    facebook: "https://www.facebook.com/profile.php?id=61577289311471",
    whatsapp: "https://wa.me/8801316315141",
  },
  highlights: [
    "Programming Hero Complete Web Development Certificate",
    "Endgame participant, team finished top 3",
    "Remote part-time developer, Jan–Feb 2024",
    "Focused on performance, animation, and modern portfolio UX",
  ],
};

export const certificates: Certificate[] = [
  {
    title: "Complete Web Development Certificate",
    issuer: "Programming Hero",
    year: "2024",
  },
  {
    title: "Endgame Top 3 Team Award",
    issuer: "Programming Hero",
    year: "2024",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Part-time Frontend Developer",
    company: "Remote Company",
    year: "Jan 2024 - Feb 2024",
    details:
      "Built responsive interface components and optimized page performance for a remote B2B product.",
  },
  {
    role: "Fresher / Open to Internships",
    company: "Seeking new opportunities",
    year: "2024 - Present",
    details:
      "Focused on MERN stack applications, component-driven UI, and production-ready architecture.",
  },
];
