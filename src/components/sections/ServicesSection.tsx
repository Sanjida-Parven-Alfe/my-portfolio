import { Monitor, Server, Code, Zap } from "lucide-react";
import type { ElementType } from "react";

interface ServiceData {
  title: string;
  projectsCount: string;
  icon: string;
}

interface ServicesSectionProps {
  services: ServiceData[];
}

const iconMap: Record<string, ElementType> = {
  Monitor: Monitor,
  Server: Server,
  Code: Code,
  Zap: Zap,
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="bg-[#050814] py-20 lg:py-32 font-sans border-b border-slate-800/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-10 bg-slate-900/50 rounded-3xl shadow-sm border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 hover:bg-slate-800 cursor-pointer"
              >
                <div className="h-20 w-20 rounded-full bg-slate-900 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#FF4F4F]">
                  <Icon size={32} className="text-[#FF4F4F] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-100 mb-2 transition-colors duration-300 group-hover:text-[#FF4F4F]">
                  {service.title}
                </h4>
                <p className="text-slate-400 font-medium">{service.projectsCount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
