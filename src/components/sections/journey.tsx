import type { JourneyMilestone } from '@/lib/journey';

import styles from './sections.module.css';

interface JourneyProps {
  milestones: JourneyMilestone[];
}

export function Journey({ milestones }: JourneyProps) {
  return (
    <section id="journey" className={`${styles.journey} section`}>
      <h2 className="numbered-heading">My Journey</h2>
      <p className={styles.sectionIntro}>
        How I progressed from backend fundamentals to building and strengthening
        a production-style full-stack platform.
      </p>

      <ol className={styles.timeline} aria-label="Engineering journey">
        {milestones.map((milestone, index) => (
          <li className={styles.milestone} key={milestone.slug}>
            <div className={styles.marker} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </div>
            <article className={styles.milestoneCard}>
              <p className={styles.phase}>{milestone.phase}</p>
              <h3>{milestone.title}</h3>
              {milestone.focus ? (
                <p className={styles.focus}>{milestone.focus}</p>
              ) : null}
              <div
                className={styles.markdown}
                dangerouslySetInnerHTML={{ __html: milestone.html }}
              />
            </article>
          </li>
        ))}
      </ol>

      <div className={styles.callout}>
        <p>
          <strong>What I&apos;m looking for:</strong> My first professional
          software engineering opportunity, where I can contribute to real
          systems and keep growing with experienced engineers.
        </p>
      </div>
    </section>
  );
}
