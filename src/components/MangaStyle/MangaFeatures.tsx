"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";
import Link from "next/link"; 

interface ProjectCardProps {
  title: string;
  id: string;
  desc: string;
  tech: string[];
  label: string;
}

const ProjectCard = ({ title, id, desc, tech, label }: ProjectCardProps) => (
  <Link href={`/projects#${id}`} className="block group">
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative border-[3px] md:border-[4px] border-black bg-white p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:shadow-none group-hover:translate-x-[3px] md:group-hover:translate-x-[4px] group-hover:translate-y-[3px] md:group-hover:translate-y-[4px]"
    >
      <div className="relative w-full aspect-video bg-stone-950 border-b-[3px] md:border-b-[4px] border-black overflow-hidden mb-5 md:mb-6 p-5 flex flex-col justify-between">
        <div className="absolute inset-0 opacity-5 md:opacity-10 group-hover:opacity-20 transition-opacity z-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 0)', backgroundSize: '8px 8px' }} />
        <span className="relative z-20 text-[9px] font-black uppercase tracking-[0.35em] text-stone-500">
          {label}
        </span>
        <div className="relative z-20 grid grid-cols-3 gap-2">
          {(id === "job-scraper"
            ? ["244 Listings", "8 Sources", "124 Tests"]
            : ["Next.js", "TypeScript", "App Router"]
          ).map((item) => (
            <span key={item} className="border border-stone-700 p-2 text-center text-[9px] font-black uppercase text-stone-200">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <div>
          <h3 className="font-bebas text-3xl md:text-4xl text-black leading-none uppercase tracking-tighter group-hover:italic transition-all group-hover:underline decoration-red-600 underline-offset-4">
            {title}
          </h3>
        </div>
        <ExternalLink size={18} className="text-black group-hover:rotate-12 transition-transform" />
      </div>

      {/* DESCRIPTION */}
      <p className="text-xs md:text-sm font-bold leading-tight text-black/80 mb-5 md:mb-6 line-clamp-2 border-l-2 border-black pl-3">
        {desc}
      </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-1.5 md:gap-2 pt-4 border-t border-black/10">
        {tech.map((t) => (
          <span key={t} className="text-[8px] md:text-[9px] font-black uppercase tracking-tighter md:tracking-widest bg-black text-white px-1.5 md:px-2 py-0.5 skew-x-[-10deg]">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  </Link>
);

export default function FeaturedProjects() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-32 mb-24 md:mb-40 overflow-x-hidden">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 md:mb-16">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-bebas text-5xl sm:text-7xl md:text-9xl text-white/60 leading-none italic uppercase "
        >
          ACTIVE <br /> <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">PROJECTS</span>
        </motion.h2>
        <div className="h-[2px] w-full md:flex-grow bg-black/10 mb-2 md:mb-4 relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="absolute top-0 left-0 h-full bg-red-600/50" 
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <ProjectCard
          title="Job Scraper Platform"
          id="job-scraper"
          label="Flagship Project // Dec 2025–Jul 2026"
          desc="A tested job aggregation platform with eight scraping sources, search, filtering, pagination, authentication, saved jobs, caching, and background workflows."
          tech={["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"]}
        />

        <ProjectCard
          title="Developer Portfolio"
          id="developer-portfolio"
          label="Current Project // Jul 2026–Present"
          desc="A recruiter-focused portfolio built with the Next.js App Router, reusable components, responsive navigation, accessible motion, and clear project storytelling."
          tech={["Next.js", "React", "TypeScript", "CSS"]}
        />
      </div>

      {/* FOOTER DETAIL */}
      <div className="mt-8 md:mt-12 flex justify-end">
        <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-black/30">
          <Terminal size={12} /> Two Projects // Evidence Over Volume
        </div>
      </div>
    </section>
  );
}
