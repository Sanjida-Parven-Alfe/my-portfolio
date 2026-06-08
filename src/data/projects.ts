import type { Project } from "@/types";

export const projects: Project[] = [
    {
    id: 1,
    title: "AgriTech",
    image: "/Agritech.png",
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "OpenWeather API", "Tailwind CSS", "Framer Motion"],
    description:
      "An AI-driven agricultural platform with real-time leaf disease detection (Gemini AI) and live farming advice (OpenWeather API). Features a comprehensive crop monitoring system and marketplace. Winner of Best Project Award from Programming Hero.",
    challenges:
      "Integrating Gemini AI for real-time leaf disease detection and managing complex frontend state.",
    improvements:
      "Expand AI capabilities for crop yield prediction.",
    liveLink: "",
    githubLink: "",
    featured: true,
  },
  {
    id: 2,
    title: "StyleDecor (Full-Stack MERN)",
    image: "/StyleDecor.png",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Firebase", "Tailwind CSS"],
    description:
      "A complete interior decoration platform featuring a complex RBAC system (Admin, Decorator, User) and secure Stripe payments.",
    challenges:
      "Implementing secure role-based access control and tracking workflows.",
    improvements:
      "Add interactive 3D room preview for decorations.",
    liveLink: "",
    githubLink: "",
    featured: true,
  },

  {
    id: 3,
    title: "The Book Haven",
    image: "/BookHaven.png",
    stack: ["React", "Firebase", "MongoDB", "Tailwind"],
    description:
      "A friendly book discovery platform with secure authentication, collections, and real-time updates.",
    challenges:
      "Syncing authentication state and user records while keeping the UI responsive.",
    improvements:
      "Add a recommendation engine and native mobile-style reading list interactions.",
    liveLink: "https://the-book-haven-199.netlify.app/",
    githubLink:
      "https://github.com/Sanjida-Parven-Alfe/book-haven-client.git",
  },
  {
    id: 4,
    title: "WarmPaws",
    image: "/WarmPaws.png",
    stack: ["React", "Firebase", "DaisyUI", "Tailwind"],
    description:
      "A winter pet care marketplace that connects pet owners with trusted services.",
    challenges:
      "Building a booking workflow that prevents conflicts across time zones.",
    improvements:
      "Integrate video consultations and service reminders for pet care providers.",
    liveLink: "https://warmpws-mod9.netlify.app/",
    githubLink: "https://github.com/Sanjida-Parven-Alfe/warmpaws.git",
  },
  {
    id: 5,
    title: "Focus & Productivity Hub",
    image: "/HeeroApp.png",
    stack: ["React", "Context API", "Tailwind", "Lazy Loading"],
    description:
      "A productivity showcase app with curated tools, ratings, and performance-first design.",
    challenges:
      "Keeping load time low while presenting visually rich cards and animations.",
    improvements:
      "Add a gamified focus mode and advanced session tracking features.",
    liveLink: "https://hero-io-app-199.netlify.app/",
    githubLink:
      "https://github.com/Sanjida-Parven-Alfe/focus-productivity-app.git",
  },
  
];
