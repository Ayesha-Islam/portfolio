"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { navLinks } from '@/config';
import { useOnClickOutside } from '@/hooks';

interface MenuOpenProps {
  $menuOpen: boolean;
}

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburgerButton =
  styled.button<MenuOpenProps>`  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.$menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.$menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props => (props.$menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--green);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.$menuOpen ? `100%` : `120%`)};
      top: ${props => (props.$menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.$menuOpen ? 0 : 1)};
      transition: ${({ $menuOpen }) =>
      $menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      width: ${props => (props.$menuOpen ? `100%` : `80%`)};
      bottom: ${props => (props.$menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.$menuOpen ? `-90deg` : `0`)});
      transition: ${({ $menuOpen }) => ($menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`;

const StyledSidebar =
  styled.aside<MenuOpenProps>`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${props => (props.$menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.$menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }

    a {
      ${({ theme }) => theme.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);


  const toggleMenu = () => {
    setMenuOpen(open => !open);
  };

  useOnClickOutside(wrapperRef, closeMenu);

  useEffect(() => {
    if (!menuOpen) {
      document.body.classList.remove('blur');
      return undefined;
    }

    document.body.classList.add('blur');

    // Move keyboard focus to the first menu link.
    sidebarRef.current
      ?.querySelector<HTMLAnchorElement>('a')
      ?.focus();


    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const menuLinks =
        sidebarRef.current?.querySelectorAll<HTMLAnchorElement>(
          'a',
        ) ?? [];

      const focusableElements: HTMLElement[] = [
        ...(buttonRef.current
          ? [buttonRef.current]
          : []),
        ...Array.from(menuLinks),
      ];

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.classList.remove('blur');
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [closeMenu, menuOpen]);

  return (
    <StyledMenu ref={wrapperRef}>
      <StyledHamburgerButton
        ref={buttonRef}
        type="button"
        $menuOpen={menuOpen}
        aria-label={
          menuOpen
            ? 'Close navigation menu'
            : 'Open navigation menu'
        }
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={toggleMenu}>
        <span className="ham-box" aria-hidden="true">
          <span className="ham-box-inner" />
        </span>
      </StyledHamburgerButton>

      <StyledSidebar
        ref={sidebarRef}
        id="mobile-navigation"
        $menuOpen={menuOpen}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}>
        <ol>
          {navLinks.map(({ url, name }) => (
            <li key={url}>
              <Link
                href={url}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}>
                {name}
              </Link>
            </li>
          ))}
        </ol>
      </StyledSidebar>
    </StyledMenu>
  );
};

export default Menu;