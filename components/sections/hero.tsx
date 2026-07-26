'use client';

import {
  createRef,
  useEffect,
  useState,
} from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import styled from 'styled-components';

import { navDelay, loaderDelay } from '@/utils';
import { usePrefersReducedMotion } from '@/hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Ayesha Islam.</h2>;
  const three = <h3 className="big-heading">I build full-stack applications with a focus on reliable backend systems.</h3>;
  const four = (
    <p>
      I’m a full-stack developer who enjoys understanding how software works
      beyond the user interface. The more projects I’ve built, the more I’ve
      found myself drawn to designing APIs, working with data, and thinking
      about how systems are structured. That curiosity continues to shape
      the way I build software and the direction I’m growing as an engineer.
    </p>
  );
  const five = (
    <a
      className="email-link"
      href="#projects"
      target="_blank"
      rel="noreferrer">
      View my work!
    </a>
  );

  const items = [one, two, three, four, five];
  const [itemRefs] = useState(() =>
    Array.from(
      { length: items.length },
      () => createRef<HTMLDivElement>(),
    ),
  );
  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => {
              const nodeRef = itemRefs[i];

              return (
                <CSSTransition
                  key={i}
                  nodeRef={nodeRef}
                  classNames="fadeup"
                  timeout={loaderDelay}>
                  <div
                    ref={nodeRef}
                    style={{
                      transitionDelay: `${i + 1}00ms`,
                    }}>
                    {item}
                  </div>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
