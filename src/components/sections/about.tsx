import styles from './sections.module.css';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'Go',
  'Rust',
  'Next.js',
  'React',
  'Node.js',
  'Express.js',
];

export function About() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <h2 className="numbered-heading">About Me</h2>
      <div className={styles.aboutGrid}>
        <div>
          <p>
            I&apos;m Ayesha Islam, a full-stack developer focused on practical,
            maintainable software. Building my Job Scraper platform deepened my
            interest in API design, database architecture, caching, testing,
            and technical documentation.
          </p>
          <p>
            I learn by building, investigating failures, and improving systems
            through real implementation experience.
          </p>
          <p>Technologies I&apos;ve been working with recently:</p>
          <ul className={styles.skills}>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <aside className={styles.focusCard} aria-label="Engineering focus">
          <p className={styles.cardLabel}>Current direction</p>
          <h3>Backend-minded full-stack engineering</h3>
          <p>
            Reliable APIs, clear data boundaries, observable failures, and
            maintainable delivery.
          </p>
        </aside>
      </div>
    </section>
  );
}
