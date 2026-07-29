import type { CSSProperties, ReactNode } from 'react';

import styles from './sections.module.css';

function HeroItem({ children, index }: { children: ReactNode; index: number }) {
  return (
    <div
      className={styles.heroItem}
      style={{ '--item-index': index } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section className={`${styles.hero} section`} aria-labelledby="hero-heading">
      <HeroItem index={0}>
        <h1>Hi, my name is</h1>
      </HeroItem>
      <HeroItem index={1}>
        <h2 id="hero-heading">Ayesha Islam.</h2>
      </HeroItem>
      <HeroItem index={2}>
        <h3>
          I build reliable backend
          systems.
        </h3>
      </HeroItem>
      <HeroItem index={3}>
        <p>
          I&apos;m a full-stack developer who enjoys understanding how software
          works beyond the user interface. I&apos;m especially drawn to API
          design, data, and the structure behind dependable systems.
        </p>
      </HeroItem>
      <HeroItem index={4}>
        <a className="button-link" href="#projects">
          View my work
        </a>
      </HeroItem>
    </section>
  );
}
