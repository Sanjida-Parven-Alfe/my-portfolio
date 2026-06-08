interface Counter {
  number: string;
  title: string;
}

interface StatsSectionProps {
  data: {
    experience: {
      number: string;
      title: string;
      description: string;
    };
    counters: Counter[];
  };
}

export function StatsSection({ data }: StatsSectionProps) {
  return (
    <section className="bg-[#fdfdfd] py-20 lg:py-32 font-sans border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Experience Box */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-10 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col justify-center h-full">
              <div className="flex items-center gap-6 mb-6">
                <h2 className="text-7xl lg:text-8xl font-bold text-[#FF4F4F]">
                  {data.experience.number}
                </h2>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight whitespace-pre-line">
                  {data.experience.title}
                </h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-md">
                {data.experience.description}
              </p>
            </div>
          </div>

          {/* Right Side: 4 Counters Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.counters.map((counter, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 cursor-default hover:-translate-y-1 group"
                >
                  <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-[#FF4F4F]">
                    {counter.number}
                  </h3>
                  <p className="text-slate-500 font-medium text-lg">
                    {counter.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
