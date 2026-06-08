import Image from "next/image";
import { ArrowRight, Download, Facebook, Github, Linkedin, Dot } from "lucide-react";
import type { PersonalInfo } from "@/types";

interface HeroSectionProps {
  info: PersonalInfo;
}

export function HeroSection({ info }: HeroSectionProps) {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050814] pt-32 pb-20 lg:pt-40 lg:pb-32 font-sans border-b border-slate-800/50">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-1">
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black text-slate-100 leading-[0.9] tracking-tight">
                MERN
              </h1>
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black text-slate-100 leading-[0.9] tracking-tight">
                STACK
              </h1>
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black text-[#FF4F4F] leading-[0.9] tracking-tight">
                DEVELOPER
              </h1>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-300 tracking-tight">
              Build. Optimize. Deploy. <span className="text-[#FF4F4F]">Fast.</span>
            </h3>

            <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-xl">
              Transform your ideas into cutting-edge web solutions. I craft high-performance websites and robust applications tailored to your specific needs.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a 
                href={info.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:bg-[#FF4F4F] hover:text-white shadow-lg shadow-white/5"
              >
                Download CV
                <Download size={18} />
              </a>

              <div className="flex items-center gap-3">
                {info.socials.github && (
                  <a href={info.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-700 text-slate-300 hover:border-[#FF4F4F] hover:text-[#FF4F4F] hover:bg-[#FF4F4F]/10 transition-all">
                    <Github size={20} />
                  </a>
                )}
                {info.socials.linkedin && (
                  <a href={info.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-700 text-slate-300 hover:border-[#FF4F4F] hover:text-[#FF4F4F] hover:bg-[#FF4F4F]/10 transition-all">
                    <Linkedin size={20} />
                  </a>
                )}
                {info.socials.facebook && (
                  <a href={info.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-700 text-slate-300 hover:border-[#FF4F4F] hover:text-[#FF4F4F] hover:bg-[#FF4F4F]/10 transition-all">
                    <Facebook size={20} />
                  </a>
                )}
              </div>
            </div>

            <div className="pt-8 flex items-center gap-2 text-slate-400 font-bold text-sm sm:text-base">
              <Dot className="text-[#FF4F4F]" size={32} />
              <span>{info.name} — {info.designation}</span>
            </div>

          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-slate-900/50 rounded-full scale-90 translate-x-4 translate-y-8 z-0"></div>
            
            <div className="relative z-10 w-full max-w-[400px] lg:max-w-[500px] aspect-[4/5]">
               <Image 
                 src="/profile.png" 
                 alt={info.name} 
                 fill 
                 className="object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
                 priority 
                 unoptimized
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
