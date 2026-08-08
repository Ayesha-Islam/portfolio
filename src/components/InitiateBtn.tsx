"use client";

import {motion} from "framer-motion";

export default function InitiateButton() {
  const email = "ayeshaislam.dev@gmail.com";
  const subject = "Software engineering opportunity";
  const body = "Hi Ayesha,\n\nI visited your portfolio and would like to discuss a software engineering opportunity.";

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <motion.a
      href={mailtoUrl}
      whileHover={{ x: 20 }}
      className="group flex items-center gap-8 cursor-pointer"
    >
      <div className="text-right">
        <span className="block text-stone-500 text-[9px] font-black uppercase tracking-[0.5em] mb-2 italic">
          Open_To_Opportunities
        </span>
        <span className="block font-bebas text-5xl md:text-7xl text-stone-100 italic leading-none group-hover:text-red-900 transition-colors">
          CONNECT
        </span>
      </div>
      <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-stone-100 flex items-center justify-center group-hover:bg-stone-100 group-hover:text-stone-950 transition-all">
         <span className="text-4xl md:text-6xl italic">→</span>
      </div>
    </motion.a>
  );
}
