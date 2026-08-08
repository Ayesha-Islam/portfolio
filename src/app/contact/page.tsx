"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";

const email = "ayeshaislam.dev@gmail.com";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    "Software engineering opportunity",
  )}&body=${encodeURIComponent(
    "Hi Ayesha,\n\nI visited your portfolio and would like to discuss a software engineering opportunity.",
  )}`;

  return (
    <main className="min-h-screen bg-white px-4 py-14 text-black md:px-6 md:py-24">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12"
      >
        <aside className="relative bg-stone-950 p-8 text-stone-100 shadow-[12px_12px_0px_black] lg:col-span-5 md:p-10">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-500">
            Current status
          </p>
          <h2 className="mt-8 font-bebas text-6xl uppercase italic leading-[0.9]">
            Open to my first software engineering opportunity.
          </h2>
          <p className="mt-8 text-sm font-semibold leading-relaxed text-stone-400">
            I&apos;m interested in junior backend and full-stack roles where I
            can contribute to real products, learn from experienced engineers,
            and continue strengthening my backend fundamentals.
          </p>
          <div className="mt-12 border-t border-stone-800 pt-6 text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">
            Faisalabad // Punjab // Pakistan
          </div>
        </aside>

        <div className="space-y-10 lg:col-span-7">
          <header className="border-b-[8px] border-black pb-8">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-black/45">
              Contact // Opportunities
            </p>
            <h1 className="font-bebas text-7xl italic leading-[0.8] tracking-tighter md:text-9xl">
              LET&apos;S <span className="text-transparent [-webkit-text-stroke:1.5px_black]">TALK</span>
            </h1>
          </header>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/45">Email</p>
            <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={mailtoUrl} className="break-all border-b-4 border-black font-bebas text-3xl hover:italic md:text-4xl">
                {email} →
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-2 border-2 border-black bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_black] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <a href={mailtoUrl} className="group border-[3px] border-black p-5 transition-colors hover:bg-black hover:text-white">
              <Mail className="mb-4" />
              <span className="font-bebas text-3xl">EMAIL</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ayesha-islam-b4b988212/"
              target="_blank"
              rel="noreferrer"
              className="group border-[3px] border-black p-5 transition-colors hover:bg-black hover:text-white"
            >
              <Linkedin className="mb-4" />
              <span className="font-bebas text-3xl">LINKEDIN</span>
            </a>
            <a
              href="https://github.com/Ayesha-Islam"
              target="_blank"
              rel="noreferrer"
              className="group border-[3px] border-black p-5 transition-colors hover:bg-black hover:text-white"
            >
              <Github className="mb-4" />
              <span className="font-bebas text-3xl">GITHUB</span>
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
