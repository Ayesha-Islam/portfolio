'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { navLinks } from '@config';
import Menu from './menu';

type ScrollDirection = 'up' | 'down';

interface HeaderProps {
  $scrollDirection: ScrollDirection;
  $scrolledToTop: boolean;
}

interface NavProps {
  isHome?: boolean;
}

const StyledHeader = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height); /* 100px */
  backdrop-filter: blur(10px);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.$scrollDirection === 'up' &&
    !props.$scrolledToTop &&
    css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${props =>
    props.$scrollDirection === 'down' &&
    !props.$scrolledToTop &&
    css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;

  .logo {
    display: flex;
    align-items: center;

    a {
      color: var(--green);
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0 5px;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;
        text-decoration: none;
        color: var(--lightest-slate);

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
        }

        &:hover {
          color: var(--green);
        }
      }
    }
  }

  .resume-button {
    margin-left: 15px;
    padding: 0.75rem 1rem;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    color: var(--green);
    text-decoration: none;
    font-size: var(--fz-xs);

    &:hover {
      background-color: var(--green-tint);
    }
  }
`;

const Nav = ({ isHome = true }: NavProps) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      setScrolledToTop(currentScroll < 50);

      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    const timeout = setTimeout(() => setIsMounted(true), 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <StyledHeader
      $scrollDirection={scrollDirection}
      $scrolledToTop={scrolledToTop}>
      <StyledNav>
        {isMounted && (
          <div className="logo">
            <Link href="/">AI</Link>
          </div>
        )}

        <StyledLinks>
          <ol>
            {isMounted &&
              navLinks.map(({ url, name }) => (
                <li key={url}>
                  <Link href={url}>{name}</Link>
                </li>
              ))}
          </ol>

          {isMounted && (
            <a
              className="resume-button"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer">
              Resume
            </a>
          )}
        </StyledLinks>

        <Menu />
      </StyledNav>
    </StyledHeader>
  );
};


export default Nav;