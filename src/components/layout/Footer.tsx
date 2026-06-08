export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060C1C] py-8 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} Sanjida Parven Alfe. All rights reserved.</p>
      <p className="mt-2 text-slate-400">Built with Next.js, TypeScript, and Tailwind CSS.</p>
    </footer>
  );
}
