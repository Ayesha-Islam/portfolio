'use client';

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import styled from 'styled-components';

import { loaderDelay } from '@/utils';
import { usePrefersReducedMotion } from '@/hooks';

type Orientation = 'left' | 'right';

interface SideProps {
  children: ReactNode;
  isHome?: boolean;
  orientation: Orientation;
}

interface StyledSideElementProps {
  $orientation: Orientation;
}

const StyledSideElement = styled.div<StyledSideElementProps>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.$orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.$orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${props => (props.$orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.$orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side = ({ children, isHome, orientation }: SideProps) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();
  const nodeRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(
      () => setIsMounted(true),
      loaderDelay,
    );

    return () => clearTimeout(timeout);
  }, [isHome, prefersReducedMotion]);

  return (
    <StyledSideElement $orientation={orientation}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              nodeRef={nodeRef}
              classNames={isHome ? 'fade' : ''}
              timeout={isHome ? loaderDelay : 0}>
              <div ref={nodeRef}>{children}</div>
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </StyledSideElement>
  );
};

export default Side;
