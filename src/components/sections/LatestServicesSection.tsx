import Image from "next/image";

interface LatestServiceItem {
  num: string;
  title: string;
  description: string;
}

interface LatestServicesSectionProps {
  data: {
    header: {
      subtitle: string;
      title: string;
      description: string;
    };
    services: LatestServiceItem[];
  };
}

export function LatestServicesSection({ data }: LatestServicesSectionProps) {
  return (
    <section className="bg-white py-20 lg:py-32 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-block px-4 py-2 rounded-full border border-slate-200 bg-slate-50 mb-6">
            <span className="text-sm font-semibold tracking-widest text-[#FF4F4F] uppercase">
              {data.header.subtitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {data.header.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {data.header.description}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Services List */}
          <div className="space-y-6">
            {data.services.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-1 cursor-default"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-[#FF4F4F]">
                  <span className="text-[#FF4F4F]">{item.num}</span>
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-14">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/profile.png" 
                alt="Latest Services" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
