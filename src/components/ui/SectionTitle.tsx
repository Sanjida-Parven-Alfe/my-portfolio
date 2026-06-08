import type { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  highlight?: string;
  description?: string;
  children?: ReactNode;
}

export function SectionTitle({ title, highlight, description, children }: SectionTitleProps) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/80">
        {highlight ?? "Section"}
      </p>
      <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white tracking-tight">{title}</h2>
      {description ? <p className="mt-4 text-slate-400 text-base md:text-lg">{description}</p> : null}
      {children}
    </div>
  );
}
