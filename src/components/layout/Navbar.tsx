"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const sections = ["about", "skills", "education", "projects", "contact"] as const;

export function Navbar() {
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () => sections.map((id) => ({ id, label: id.charAt(0).toUpperCase() + id.slice(1) })),
    []
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#060B18]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#about" className="text-2xl font-semibold tracking-tight text-white">
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Alfe
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "text-sm font-medium transition duration-200",
                activeSection === id ? "text-white" : "text-slate-400 hover:text-white"
              )}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <ScrollProgress />

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#070D1B] md:hidden"
          >
            <div className="flex flex-col gap-3 px-6 py-5">
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition",
                    activeSection === id
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
