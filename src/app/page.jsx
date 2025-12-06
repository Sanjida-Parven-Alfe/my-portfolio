"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink, X, Menu, Download, Facebook, Twitter } from "lucide-react";

// --- DATA SECTION ---

const personalInfo = {
  name: "Sanjida Parven Alfe",
  designation: "MERN Stack Web Developer",
  about: "I am a passionate developer currently learning web development. I enjoy building clean, functional, and user-friendly websites. Apart from coding, I love data analysis and exploring AI agents. When not coding, I enjoy reading tech blogs and gaming.",
  resumeLink: "/Sanjida Parven Alfe.pdf", // Ensure this file exists in 'public' folder
  email: "sanjidaparvinalfe@gmail.com",
  phone: "+880 1316 315141",
  socials: {
    github: "https://github.com/Sanjida-Parven-Alfe",
    linkedin: "https://www.linkedin.com/in/sanjida-parven-alfe/",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  }
};

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "Figma"]
};

const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University Name, Dhaka",
    year: "2022 - Present",
    details: "Currently studying core CS subjects including Algorithms and Web Engineering."
  },
  {
    degree: "HSC (Science)",
    institution: "College Name",
    year: "2019 - 2021",
    details: "GPA: 5.00"
  }
];

const experiences = [
  {
    role: "Frontend Intern",
    company: "Tech Company Ltd",
    year: "Jan 2024 - Present",
    details: "Working on responsive UI design and React components."
  }
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/project1.png", 
    stack: ["Next.js", "Tailwind", "MongoDB"],
    description: "A fully functional e-commerce website with cart and checkout functionality.",
    challenges: "Handling complex state management for the cart and optimizing database queries.",
    improvements: "Adding AI-based product recommendations.",
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "/project2.png", 
    stack: ["React", "Framer Motion", "CSS"],
    description: "A personal portfolio to showcase skills and projects.",
    challenges: "Making the design fully responsive and smooth animations.",
    improvements: "Adding a dark/light mode toggle.",
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 3,
    title: "Task Management App",
    image: "/project3.png", 
    stack: ["Vue.js", "Firebase"],
    description: "A drag-and-drop task manager for teams.",
    challenges: "Real-time data synchronization.",
    improvements: "Mobile app version using React Native.",
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  }
];

// --- LOOPING TYPEWRITER COMPONENT ---

const LoopingTypewriter = ({ text, speed = 150, pause = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentLength = displayedText.length;

      if (!isDeleting) {
        // Typing
        if (currentLength < text.length) {
          setDisplayedText(text.substring(0, currentLength + 1));
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        // Deleting
        if (currentLength > 0) {
          setDisplayedText(text.substring(0, currentLength - 1));
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
        }
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    const timer = setTimeout(handleTyping, isDeleting && displayedText === text ? pause : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed, pause]);

  return (
    <span className="inline-flex items-center">
      {displayedText}
      <span className="animate-pulse text-cyan-400 ml-1">|</span>
    </span>
  );
};

// --- MAIN COMPONENT ---

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans selection:bg-violet-500/30 selection:text-violet-200">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            DevPortfolio.
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-violet-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0 }} animate={{ height: "auto" }}
            className="md:hidden bg-[#0F172A] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4 text-center">
              {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-violet-400">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="about" className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] -z-10"></div>

        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            
            {/* LOOPING ANIMATION HERE */}
            <div className="h-8 flex justify-center md:justify-start items-center text-xl text-cyan-400 font-medium tracking-wide font-mono">
               <LoopingTypewriter text="HELLO, I'M" speed={150} pause={2000} />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              {personalInfo.name.split(" ")[0]} <br />
              <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-2xl text-slate-400">{personalInfo.designation}</p>
            
            <p className="text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0 text-lg">
              {personalInfo.about}
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-5 items-center pt-6 justify-center md:justify-start">
              <a 
                href={personalInfo.resumeLink} 
                download 
                className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 transition-all hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Download size={20} /> Download Resume
                </span>
              </a>
              <div className="flex gap-4">
                {[
                  { icon: Github, link: personalInfo.socials.github },
                  { icon: Linkedin, link: personalInfo.socials.linkedin },
                  { icon: Facebook, link: personalInfo.socials.facebook }
                ].map((social, idx) => (
                  <a key={idx} href={social.link} target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-cyan-400 transition-all hover:scale-110">
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full p-1 bg-gradient-to-tr from-violet-500 via-cyan-500 to-transparent mx-auto">
               <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0B1120]">
                  <Image 
                    src="/profile.jpg" 
                    alt="Profile" 
                    fill 
                    className="object-cover"
                    priority
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SKILLS SECTION */}
      <section id="skills" className="py-24 bg-[#0F172A]/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            My <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={category} 
                className="bg-[#1E293B]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all shadow-xl"
              >
                <h3 className="text-xl font-bold mb-6 text-violet-400 border-b border-white/5 pb-2 inline-block">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span key={skill} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-violet-500/20 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 & 8. EDUCATION & EXPERIENCE */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-violet-500 rounded-full"></span> Education
            </h2>
            <div className="space-y-10">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/10">
                  <span className="absolute -left-1.5 top-2 w-3 h-3 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-cyan-400 font-medium mt-1">{edu.institution}</p>
                  <p className="text-sm text-slate-500 mt-1 mb-3">{edu.year}</p>
                  <p className="text-slate-400 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-cyan-500 rounded-full"></span> Experience
            </h2>
            <div className="space-y-10">
              {experiences.length > 0 ? experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/10">
                   <span className="absolute -left-1.5 top-2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-violet-400 font-medium mt-1">{exp.company}</p>
                  <p className="text-sm text-slate-500 mt-1 mb-3">{exp.year}</p>
                  <p className="text-slate-400 leading-relaxed">{exp.details}</p>
                </div>
              )) : <p className="text-slate-500 italic">Fresh Graduate / Open to work</p>}
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-[#0F172A]/50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Featured <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                whileHover={{ y: -10 }}
                className="bg-[#1E293B] rounded-2xl overflow-hidden border border-white/5 group hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent z-10 opacity-60"></div>
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-8 relative z-20 -mt-10">
                  <div className="bg-[#1E293B] p-4 rounded-xl shadow-lg border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 bg-white/5 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 text-slate-300 hover:text-white rounded-lg transition-all font-medium flex items-center justify-center gap-2 group-hover:border-violet-500/30 border border-transparent"
                    >
                      View Details <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#1E293B] w-full max-w-2xl rounded-2xl border border-white/10 overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl shadow-violet-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 w-full group">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent"></div>
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white hover:bg-red-500 transition border border-white/10"><X size={20} /></button>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {selectedProject.stack.map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 bg-violet-500/10 text-violet-300 border border-violet-500/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p><strong className="text-white block mb-1">Description:</strong> {selectedProject.description}</p>
                  <p><strong className="text-white block mb-1">Challenges:</strong> {selectedProject.challenges}</p>
                  <p><strong className="text-white block mb-1">Future Plans:</strong> {selectedProject.improvements}</p>
                </div>

                <div className="flex gap-4 pt-6 border-t border-white/10">
                  <a href={selectedProject.liveLink} target="_blank" className="flex-1 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl text-center transition shadow-lg shadow-violet-500/25">Live Demo</a>
                  <a href={selectedProject.githubLink} target="_blank" className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-center transition flex items-center justify-center gap-2 border border-white/10"><Github size={18}/> GitHub</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Get In <span className="text-cyan-400">Touch</span></h2>
          <p className="text-slate-400 mb-12 text-lg">Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-[#1E293B] border border-white/5 rounded-2xl hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all text-white group">
              <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" /> {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-[#1E293B] border border-white/5 rounded-2xl hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all text-white group">
              <Phone className="text-violet-400 group-hover:scale-110 transition-transform" /> {personalInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="py-8 bg-[#020617] text-center text-slate-600 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="mt-2">Built with <span className="text-violet-500">Next.js</span> & <span className="text-cyan-500">Tailwind</span></p>
      </footer>
    </div>
  );
}