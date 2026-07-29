import { Icon } from '@/components/icons';
import { siteConfig } from '@/config/site';

import styles from './side-links.module.css';

export function SideLinks() {
  return (
    <>
      <aside className={`${styles.side} ${styles.left}`} aria-label="Social links">
        <ul className={styles.socialList}>
          {siteConfig.socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={link.label} />
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <aside className={`${styles.side} ${styles.right}`} aria-label="Email">
        <div className={styles.email}>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </aside>
    </>
  );
}
