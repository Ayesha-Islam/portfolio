"use client"

import { motion } from "framer-motion"

export default function MangaHero() {
  return (
    <section className="relative min-h-[83vh] flex flex-col justify-start md:justify-center overflow-hidden bg-white text-black font-inter border-[7px] border-black m-2 md:m-2">

      {/* HALFTONE TEXTURE */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#000 1.5px, transparent 0)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="relative z-20 w-full px-8 md:px-24 pt-12 md:pt-0">

        {/* HERO CONTENT */}
        <div className="max-w-5xl space-y-8">

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-black/45">
              Hello, I&apos;m
            </p>
            <h1 className="text-7xl md:text-[10rem] font-bebas leading-[0.82] tracking-tighter italic">
              AYESHA <br />
              ISLAM
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-5"
          >

            {/* ROLE */}
            <div className="inline-block bg-black text-white px-6 py-3 text-lg md:text-xl font-bold uppercase tracking-tight rotate-[-1deg]">
              Backend-Focused Full-Stack Developer
            </div>

            {/* DESCRIPTION */}
            <div className="max-w-2xl space-y-4">
              <p className="text-lg md:text-xl font-medium leading-relaxed text-black/75 tracking-tight">
                I build reliable backend systems that turn fragmented data
                into useful products.
              </p>

              {/* METRICS */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "244 Job Listings",
                  "8 Data Sources",
                  "73 Companies",
                  "124 Tests",
                ].map((item) => (
                  <span
                    key={item}
                    className="border-2 border-black px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.18em]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* LOCATION */}
              <p className="text-xs font-black tracking-[0.25em] uppercase text-black/40 pt-2">
                Faisalabad, Punjab, Pakistan
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PROJECT SYSTEM PREVIEW */}
      <div className="absolute bottom-8 right-8 hidden lg:block w-[42%] z-10 pointer-events-none">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative border-[5px] border-black bg-stone-950 p-6 shadow-[14px_14px_0px_black] rotate-[1deg]"
        >
          <div className="flex items-center justify-between border-b border-stone-700 pb-4">
            <span className="text-xs font-black tracking-[0.3em] text-white uppercase">
              Job Scraper Platform
            </span>
            <span className="h-3 w-3 bg-emerald-400 rounded-full" />
          </div>
          <div className="grid grid-cols-3 gap-3 py-5">
            {["244 Listings", "8 Sources", "73 Companies"].map((metric) => (
              <div key={metric} className="border border-stone-700 p-3 text-center text-[10px] font-black uppercase tracking-wider text-stone-200">
                {metric}
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {["Backend Developer · Remote", "Full-Stack Engineer · Hybrid", "Node.js Developer · Remote"].map((job) => (
              <div key={job} className="border-l-4 border-white bg-stone-900 px-4 py-3 text-xs font-bold text-stone-300">
                {job}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-10 z-30 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="[writing-mode:vertical-lr] font-black text-[10px] tracking-[0.5em] uppercase opacity-40">
            Explore Work
          </span>

          <div className="w-[2px] h-20 bg-gradient-to-b from-black to-transparent" />
        </div>
      </div>
    </section>
  )
}
