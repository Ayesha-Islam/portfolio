"use client";

import { useEffect, useRef } from 'react';
import type { Job } from '@/lib/jobs';
import styled from 'styled-components';
import { srConfig } from '@/config';
import sr from '@/utils/sr';
import { usePrefersReducedMotion } from '@/hooks';

const StyledJourneySection = styled.section`
  max-width: 900px;

  .section-intro {
    max-width: 650px;
    margin: -10px 0 48px;
    color: var(--slate);
    font-size: var(--fz-lg);
  }
`;

const StyledTimeline = styled.ol`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    top: 22px;
    bottom: 22px;
    left: 23px;
    width: 1px;
    background: var(--lightest-navy);
  }
`;

const StyledMilestone = styled.li`
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 24px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 28px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 38px minmax(0, 1fr);
    gap: 14px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const StyledMarker = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  z-index: 1;
  width: 48px;
  height: 48px;
  border: 1px solid var(--green);
  border-radius: 50%;
  background: var(--navy);
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);

  @media (max-width: 600px) {
    width: 38px;
    height: 38px;
  }
`;

const StyledCard = styled.article`
  padding: 28px 30px;
  border: 1px solid var(--lightest-navy);
  border-radius: var(--border-radius);
  background: var(--light-navy);
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(100, 255, 218, 0.45);
  }

  .phase {
    margin-bottom: 8px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  h3 {
    margin: 0 0 4px;
    color: var(--lightest-slate);
    font-size: clamp(22px, 4vw, var(--fz-xxl));
    line-height: 1.25;
  }

  .focus {
    margin-bottom: 18px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};
    margin-bottom: 0;
  }

  li {
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    padding: 22px 20px;
  }
`;

const StyledCallout = styled.div`
  margin: 38px 0 0 72px;
  padding: 22px 26px;
  border-left: 2px solid var(--green);
  background: rgba(100, 255, 218, 0.06);

  p {
    margin: 0;
    color: var(--light-slate);
  }

  strong {
    color: var(--lightest-slate);
  }

  @media (max-width: 600px) {
    margin-left: 52px;
    padding: 18px 20px;
  }
`;
interface JobsProps {
  jobs?: Job[];
}

const Jobs = ({ jobs = [] }: JobsProps) => {

  const revealContainer =
    useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (
      !prefersReducedMotion &&
      revealContainer.current
    ) {
      sr.reveal(
        revealContainer.current,
        srConfig(),
      );
    }
  }, [prefersReducedMotion]);

  return (
    <StyledJourneySection id="journey" ref={revealContainer}>
      <h2 className="numbered-heading">My Journey</h2>
      <p className="section-intro">
        How I progressed from learning backend fundamentals to building and
        strengthening a production-style full-stack platform.
      </p>

      <StyledTimeline aria-label="Engineering journey">
        {jobs.map((milestone, index) => (
          <StyledMilestone key={milestone.slug}>
            <StyledMarker aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </StyledMarker>

            <StyledCard>
              <p className="phase">{milestone.company}</p>
              <h3>{milestone.title}</h3>
              {milestone.range && <p className="focus">{milestone.range}</p>}
              <div dangerouslySetInnerHTML={{ __html: milestone.html }} />
            </StyledCard>
          </StyledMilestone>
        ))}
      </StyledTimeline>

      <StyledCallout>
        <p>
          <strong>What I’m looking for:</strong> My first professional software
          engineering opportunity, where I can contribute to real systems,
          learn from experienced engineers, and keep growing in backend
          development.
        </p>
      </StyledCallout>
    </StyledJourneySection>
  );
};

export default Jobs;