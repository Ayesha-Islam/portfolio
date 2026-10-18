const notes = [
  {
    title: "Tracing a Misleading EAI_AGAIN Database Failure",
    label: "Engineering incident // JobLens",
    summary:
      "The scraper repeatedly surfaced a database or DNS-style error even though PostgreSQL was healthy. I traced the workflow from the command entry point through dependency creation and found an incomplete container: it provided Prisma while JobService also required the shared PostgreSQL pool for raw SQL.",
    resolution:
      "I made the scraper use the same configured application container as the API, verified Docker service names, and added dependency-initialization tests. The scraper then received every service required by the execution path.",
    lesson:
      "Trace the complete execution path instead of treating a surface-level error message as the root cause.",
  },
  {
    title: "Choosing a Clear Prisma and Raw SQL Boundary",
    label: "Architecture decision // Data access",
    summary:
      "The application needs straightforward CRUD alongside flexible search, filters, pagination, and analytics. I compared the needs of both query types instead of forcing every operation through one abstraction.",
    resolution:
      "I use Prisma for CRUD-oriented operations and the shared PostgreSQL pool for search, filtering, pagination, and analytics queries.",
    lesson:
      "A useful abstraction boundary follows the shape of the workload, not a rule that every query must use the same tool.",
  },
  {
    title: "Caching Without Hiding Stale Data",
    label: "Engineering note // Redis",
    summary:
      "List, detail, and statistics queries are cached for repeated reads, but every write creates a consistency question: which cached results may now be stale?",
    resolution:
      "The JobLens uses endpoint-appropriate TTLs and invalidates relevant cache keys after writes, while documenting short-lived eventual consistency as an explicit trade-off.",
    lesson:
      "A cache strategy is incomplete until invalidation and consistency expectations are documented.",
  },
];

export default function EngineeringNotesPage() {
  return (
    <main className="min-h-screen bg-stone-950 px-4 py-16 text-stone-100 md:px-6 md:py-24">
      <section className="mx-auto max-w-7xl">
        <header className="mb-14 border-b border-stone-800 pb-10">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-stone-500">
            Technical journey // What the project taught me
          </p>
          <h1 className="font-bebas text-6xl italic uppercase leading-[0.85] md:text-9xl">
            Engineering <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f4]">Notes</span>
          </h1>
        </header>

        <div className="grid gap-px border-2 border-stone-800 bg-stone-800 lg:grid-cols-3">
          {notes.map((note, index) => (
            <article key={note.title} className="flex min-h-[520px] flex-col bg-stone-950 p-7 md:p-9">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-600">
                0{index + 1}{" // "}{note.label}
              </p>
              <h2 className="mt-8 font-bebas text-4xl uppercase leading-tight text-stone-100">
                {note.title}
              </h2>
              <p className="mt-6 text-sm font-medium leading-relaxed text-stone-400">{note.summary}</p>
              <div className="mt-auto space-y-5 border-t border-stone-800 pt-7">
                <div>
                  <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-stone-600">Response</h3>
                  <p className="mt-2 text-xs font-semibold text-stone-300">{note.resolution}</p>
                </div>
                <div>
                  <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-stone-600">Lesson</h3>
                  <p className="mt-2 text-sm font-black italic text-stone-100">{note.lesson}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
