'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { siteConfig } from '@/config/site';

import styles from './site-header.module.css';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let previousScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);
      setHidden(currentScroll > previousScroll && currentScroll > 100);
      previousScroll = Math.max(currentScroll, 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={[
        styles.header,
        scrolled ? styles.scrolled : '',
        hidden && !menuOpen ? styles.hidden : '',
      ].join(' ')}
    >
      <nav className={styles.navigation} aria-label="Primary navigation">
        <Link className={styles.logo} href="/" aria-label="Ayesha Islam, home">
          AI
        </Link>

        <div className={styles.desktopNavigation}>
          <ol>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ol>
          <Link className={styles.contactButton} href="/#contact">
            Let&apos;s talk
          </Link>
        </div>

        <button
          className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
        </button>

        <aside
          id="mobile-navigation"
          className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}
          aria-hidden={!menuOpen}
        >
          <ol>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
          <Link
            className={styles.mobileContact}
            href="/#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            Let&apos;s talk
          </Link>
        </aside>
      </nav>
    </header>
  );
}
