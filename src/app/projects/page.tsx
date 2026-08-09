"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "job-scraper",
    name: "Job Scraper Platform",
    period: "Independent Full-Stack Project // Dec 2025–Jul 2026",
    description:
      "An independently built full-stack application that brings job listings from eight sources into one searchable, filterable, and saveable interface.",
    evidence: ["244 listings", "73 companies", "8 sources", "124 tests"],
    features: [
      "Problem — Job seekers often need to search several platforms separately",
      "Solution — Scheduled Puppeteer and Cheerio scrapers collect listings into one application",
      "Architecture — A Next.js frontend communicates with a Node.js and Express API backed by PostgreSQL",
      "Data decisions — Prisma handles CRUD, raw SQL handles search and analytics, and Redis caches frequent reads",
      "Evidence — Docker-based local services and 124 tests; no public live demo is currently available",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "Vitest",
    ],
    link: "https://github.com/Ayesha-Islam/Job-scraper",
  },
  {
    id: "developer-portfolio",
    name: "Developer Portfolio",
    period: "Personal Project // Jul 2026–Present",
    description:
      "A responsive Next.js application built to present my software projects, engineering decisions, and technical growth.",
    evidence: ["Next.js App Router", "TypeScript", "Responsive UI", "Accessible motion"],
    features: [
      "Built with the Next.js App Router and TypeScript",
      "Uses reusable React components and route metadata",
      "Includes responsive navigation for desktop and mobile",
      "Supports reduced-motion preferences",
    ],
    tech: ["Next.js", "React", "TypeScript", "CSS", "Framer Motion"],
    link: "https://github.com/Ayesha-Islam/portfolio",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14 text-black md:px-6 md:py-24">
      <section className="mx-auto max-w-7xl">
        <header className="mb-16 border-b-[8px] border-black pb-8">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-black/45">
            Selected work // Evidence over volume
          </p>
          <h1 className="font-bebas text-7xl italic leading-[0.8] tracking-tighter md:text-[9rem]">
            PROJECT <span className="text-transparent [-webkit-text-stroke:1.5px_black]">FILES</span>
          </h1>
        </header>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-28 border-[4px] border-black bg-white p-6 shadow-[10px_10px_0px_black] md:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <p className="mb-3 text-[9px] font-black uppercase tracking-[0.3em] text-black/45">
                    0{index + 1}{" // "}{project.period}
                  </p>
                  <h2 className="font-bebas text-5xl uppercase italic md:text-7xl">
                    {project.name}
                  </h2>
                  <p className="mt-6 max-w-3xl border-l-4 border-black pl-5 text-base font-semibold text-black/70 md:text-lg">
                    {project.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm font-bold text-black/75">
                        <span aria-hidden="true">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <aside className="space-y-6 bg-stone-950 p-6 text-white lg:col-span-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.35em] text-stone-500">
                    Verified snapshot
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {project.evidence.map((item) => (
                      <div key={item} className="border border-stone-700 p-3 text-xs font-black uppercase text-stone-200">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 border-t border-stone-800 pt-5">
                    {project.tech.map((item) => (
                      <span key={item} className="bg-white px-2 py-1 text-[9px] font-black uppercase text-black">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between border-2 border-white px-4 py-3 font-black uppercase tracking-wider transition-colors hover:bg-white hover:text-black"
                  >
                    <span className="flex items-center gap-3"><Github size={18} /> View repository</span>
                    <ExternalLink size={18} />
                  </a>
                </aside>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
