"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { PersonalInfo } from "@/types";

interface ContactSectionProps {
  info: PersonalInfo;
}

export function ContactSection({ info }: ContactSectionProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const isValid = useMemo(() => {
    return form.name.trim().length > 1 && /.+@.+\..+/.test(form.email) && form.message.trim().length > 10;
  }, [form]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 py-24">
      <SectionTitle
        title="Contact"
        highlight="Reach Out"
        description="Send a message, book a call, or connect with me through email, phone, and WhatsApp."
      />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-[#111827]/80 p-8 shadow-xl shadow-black/20">
          <p className="text-slate-300 leading-relaxed">
            I’m open to internships, freelance work, and remote collaborations. Share your project details and I’ll respond as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="rounded-3xl bg-white/5 p-5">
              <div className="flex items-center gap-3 text-cyan-400">
                <Mail size={20} />
                <span className="font-semibold text-white">Email</span>
              </div>
              <p className="mt-3 text-slate-400">{info.email}</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5">
              <div className="flex items-center gap-3 text-violet-400">
                <Phone size={20} />
                <span className="font-semibold text-white">Phone</span>
              </div>
              <p className="mt-3 text-slate-400">{info.phone}</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5">
              <div className="flex items-center gap-3 text-green-400">
                <MessageCircle size={20} />
                <span className="font-semibold text-white">WhatsApp</span>
              </div>
              <a href={info.socials.whatsapp} target="_blank" rel="noreferrer" className="mt-3 block text-slate-400 hover:text-white">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-white/10 bg-[#111827]/80 p-8 shadow-xl shadow-black/20"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                placeholder="Your email"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate-300">
            <span>Message</span>
            <textarea
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              rows={6}
              className="w-full rounded-3xl border border-white/10 bg-[#0B1120] px-4 py-4 text-white outline-none transition focus:border-cyan-400"
              placeholder="Tell me about your project or opportunity"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Send Message
          </button>
          {status === "success" ? (
            <p className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              Message ready to send! I will contact you soon.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="rounded-2xl bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
              Please fill out all fields with a valid email and a message longer than 10 characters.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
