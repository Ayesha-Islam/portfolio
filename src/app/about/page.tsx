"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const skillGroups = [
  {
    title: "Backend & Data",
    skills: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "Redis", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Tools & Testing",
    skills: ["Docker", "Vitest", "Puppeteer", "Cheerio", "Git"],
  },
  {
    title: "Currently Exploring",
    skills: ["Go", "Rust"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14 text-black md:px-6 md:py-24">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-7xl"
      >
        <header className="mb-14 border-b-[8px] border-black pb-8">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-black/45">
            Profile // Ayesha Islam
          </p>
          <h1 className="font-bebas text-7xl italic leading-[0.8] tracking-tighter md:text-[9rem]">
            ABOUT <span className="text-transparent [-webkit-text-stroke:1.5px_black]">ME</span>
          </h1>
        </header>

        <div className="grid gap-14 lg:grid-cols-12">
          <aside className="space-y-8 lg:col-span-5">
            <div className="border-[4px] border-black bg-stone-950 p-7 text-stone-100 shadow-[10px_10px_0px_black]">
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-stone-500">
                Positioning
              </p>
              <p className="mt-6 font-bebas text-4xl uppercase italic leading-tight md:text-5xl">
                Backend-focused developer building practical full-stack products.
              </p>
            </div>

            <div className="border-l-[8px] border-black pl-6">
              <h2 className="font-bebas text-4xl uppercase italic">How I work</h2>
              <p className="mt-4 text-base font-medium text-black/70">
                I&apos;m Ayesha Islam, a full-stack developer who enjoys building
                software that&apos;s practical, maintainable, and designed to
                solve real problems. I value correctness before cleverness,
                clear boundaries, reproducible environments, and tests that
                protect important behavior.
              </p>
            </div>

            <div>
              <h2 className="font-bebas text-3xl uppercase italic">Current goal</h2>
              <p className="mt-3 text-sm font-bold text-black/65">
                I&apos;m seeking my first software engineering opportunity in a
                junior backend or full-stack role with a backend emphasis.
              </p>
            </div>
          </aside>

          <section className="space-y-10 lg:col-span-7">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/45">
                Technical journey // 01
              </p>
              <h2 className="mt-3 font-bebas text-5xl uppercase italic">
                Building My First Production-Style Application
              </h2>
              <p className="mt-5 border-l-4 border-black pl-5 text-sm font-semibold text-black/70">
                Job Scraper began as a way to remove the friction of searching
                separate job platforms. It grew into an end-to-end system with
                scraping workflows, a typed API, PostgreSQL data access, Redis
                caching, authentication, saved jobs, Docker, and automated tests.
              </p>
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/45">
                Technical journey // 02
              </p>
              <h2 className="mt-3 font-bebas text-5xl uppercase italic">
                Growing Beyond the Application
              </h2>
              <p className="mt-5 border-l-4 border-black pl-5 text-sm font-semibold text-black/70">
                The project pushed me to think beyond features: how dependencies
                are assembled, where raw SQL is appropriate, how cache
                invalidation affects consistency, and how documentation makes
                engineering decisions easier to revisit. I&apos;m now deepening
                those backend fundamentals while exploring Go and Rust.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="border-[3px] border-black p-5">
                  <h3 className="font-bebas text-3xl uppercase italic">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="bg-black px-2 py-1 text-[9px] font-black uppercase tracking-wider text-white">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/projects"
              className="inline-block border-[3px] border-black bg-black px-8 py-4 font-black uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-1"
            >
              Explore my projects →
            </Link>
          </section>
        </div>
      </motion.section>
    </main>
  );
}
