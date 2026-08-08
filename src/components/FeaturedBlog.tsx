"use client"

import { motion } from "framer-motion"
import { Database, Bug, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const MotionLink = motion.create(Link)

export default function FeaturedLog() {
  const featured = {
    title: "Tracing a Misleading EAI_AGAIN Database Failure",
    symptom: "EAI_AGAIN",
    cause: "Missing Pool",
    category: "ENGINEERING_INCIDENT",
    link: "/blog",
    excerpt: "A standalone scraper created an incomplete dependency container. Tracing the full execution path revealed that JobService needed the shared PostgreSQL pool—not only the Prisma client."
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 bg-stone-950 font-inter">
      <div className="border-t-2 border-stone-800 pt-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 bg-red-900 animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.4em] text-stone-500 uppercase">
            Featured_Writing // Engineering_Notes
          </span>
        </div>

        <MotionLink
          href={featured.link}
          className="group block relative border-2 md:border-[4px] border-stone-100 p-6 md:p-12 bg-stone-950 transition-all hover:bg-stone-900"
        >
          <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
            {/* STATS PANEL */}
            <div className="lg:col-span-4 order-2 lg:order-1 flex md:flex-col gap-6 md:gap-8 border-t lg:border-t-0 lg:border-r border-stone-800 pt-8 lg:pt-0 lg:pr-12">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-stone-500 mb-1">
                  <Bug size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Symptom</span>
                </div>
                <div className="font-bebas text-4xl md:text-5xl text-stone-100 italic">{featured.symptom}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-stone-500 mb-1">
                  <Database size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Root_Cause</span>
                </div>
                <div className="font-bebas text-4xl md:text-5xl text-stone-100 italic">{featured.cause}</div>
              </div>
            </div>

            {/* CONTENT PANEL */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-6">
              <div className="inline-block bg-red-900 text-stone-100 px-3 py-1 text-[9px] font-black tracking-widest uppercase italic">
                {featured.category}
              </div>
              <h3 className="font-bebas text-5xl md:text-7xl text-stone-100 leading-[0.85] uppercase tracking-tighter group-hover:italic transition-all">
                {featured.title}
              </h3>
              <p className="text-stone-400 text-sm md:text-lg font-medium leading-relaxed italic border-l-2 border-stone-800 pl-6 uppercase">
                {featured.excerpt}
              </p>
              
              <div className="pt-4 flex items-center gap-4 text-[10px] font-black text-stone-100 uppercase tracking-[0.4em]">
                READ_ENGINEERING_NOTE <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
          
          {/* Manga-style halftone decorative corner */}
          <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#fff 1.5px, transparent 0)`, backgroundSize: '8px 8px' }} />
        </MotionLink>
      </div>
    </section>
  )
}
