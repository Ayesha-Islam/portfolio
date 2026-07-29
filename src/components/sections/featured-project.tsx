import Image from 'next/image';

import { Icon } from '@/components/icons';

import styles from './sections.module.css';

const githubUrl = 'https://github.com/Ayesha-Islam/Job-scraper';
const documentationUrl = `${githubUrl}/tree/main/docs`;

const technologies = [
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Redis',
  'Docker',
];

export function FeaturedProject() {
  return (
    <section id="projects" className={`${styles.featured} section`}>
      <h2 className="numbered-heading">Featured Project</h2>
      <p className={styles.sectionIntro}>
        A full-stack platform where I applied backend architecture, testing,
        and production-minded engineering decisions.
      </p>

      <article className={styles.project}>
        <a
          className={styles.screenshot}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View the Job Scraper project on GitHub"
        >
          <Image
            src="/images/featured/JobScraper/dashboard.png"
            alt="Job Scraper market statistics dashboard"
            fill
            priority={false}
            sizes="(max-width: 900px) calc(100vw - 100px), 56vw"
          />
        </a>

        <div className={styles.projectContent}>
          <p className={styles.cardLabel}>Flagship full-stack platform</p>
          <h3>Job Scraper Platform</h3>
          <p className={styles.projectDescription}>
            Aggregates remote listings from multiple sources into one searchable
            platform with filters, saved jobs, and market statistics.
          </p>

          <ul className={styles.highlights}>
            <li>Scheduled multi-source scraping and aggregation</li>
            <li>Semantic deduplication across job providers</li>
            <li>Redis caching with explicit invalidation</li>
          </ul>

          <div className={styles.metrics} aria-label="Project snapshot from July 2026">
            <span><strong>244</strong> listings</span>
            <span><strong>8</strong> sources</span>
            <span><strong>73</strong> companies</span>
            <span><strong>124</strong> tests</span>
          </div>

          <ul className={styles.technologies} aria-label="Technologies used">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <div className={styles.projectLinks}>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="GitHub" />
              GitHub
            </a>
            <a href={documentationUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="External" />
              Documentation
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
