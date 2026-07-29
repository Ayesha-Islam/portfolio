import { siteConfig } from '@/config/site';

import styles from './sections.module.css';

export function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section`}>
      <p className={styles.contactOverline}>04. What&apos;s Next?</p>
      <h2>Get In Touch</h2>
      <p>
        I&apos;m seeking my first software engineering opportunity. If
        you&apos;re hiring, collaborating on an interesting project, or would
        simply like to connect, I&apos;d be happy to hear from you.
      </p>
      <a className="button-link" href={`mailto:${siteConfig.email}`}>
        Say Hello
      </a>
    </section>
  );
}
