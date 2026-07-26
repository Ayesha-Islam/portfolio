"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { srConfig } from '@/config';
import { usePrefersReducedMotion } from '@/hooks';
import sr from '@/utils/sr';

const GITHUB_URL = 'https://github.com/Ayesha-Islam/job-scraper';
const DOCUMENTATION_URL = `${GITHUB_URL}/tree/main/docs`;

const StyledFeaturedSection = styled.section`
  max-width: 980px;
  scroll-margin-top: 0;

  .section-intro {
    max-width: 640px;
    margin: -12px 0 48px;
    color: var(--light-slate);
    font-size: var(--fz-lg);
    line-height: 1.55;
  }
`;

const StyledProject = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.9fr);
  align-items: start;
  gap: 46px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 34px;
  }
`;

const StyledScreenshotLink = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border: 1px solid var(--lightest-navy);
  border-radius: var(--border-radius);
  background: var(--light-navy);
  box-shadow: 0 20px 50px -28px var(--navy-shadow);
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(100, 255, 218, 0.04);
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
  }

  img {
    object-fit: cover;
    object-position: top center;
    transition: transform 0.35s ease;
  }

  &:hover,
  &:focus-visible {
    border-color: rgba(100, 255, 218, 0.6);
    transform: translateY(-4px);
    box-shadow: 0 26px 55px -28px var(--navy-shadow);

    &::after {
      opacity: 1;
    }

    img {
      transform: scale(1.012);
    }
  }

  @media (max-width: 600px) {
    aspect-ratio: 4 / 3;
  }
`;

const StyledContent = styled.div`
  padding-top: 4px;

  .overline {
    margin: 0 0 8px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  h3 {
    margin: 0 0 20px;
    color: var(--lightest-slate);
    font-size: clamp(30px, 4vw, 38px);
    line-height: 1.2;
  }

  .description {
    margin: 0 0 24px;
    color: var(--light-slate);
    font-size: clamp(var(--fz-md), 1.5vw, var(--fz-lg));
    line-height: 1.65;
  }
`;

const StyledHighlights = styled.ul`
  ${({ theme }) => theme.mixins.fancyList};
  margin: 0 0 25px;

  li {
    margin-bottom: 10px;
    color: var(--light-slate);
    font-size: var(--fz-md);
    line-height: 1.55;
  }
`;

const StyledMetrics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  margin: 0 0 22px;
  padding: 13px 0;
  border-top: 1px solid var(--lightest-navy);
  border-bottom: 1px solid var(--lightest-navy);
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  line-height: 1.6;

  strong {
    color: var(--green);
    font-weight: 400;
  }

  span {
    white-space: nowrap;
  }
`;

const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px 16px;
  margin: 0 0 22px;
  padding: 0;
  list-style: none;

  li {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    white-space: nowrap;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    &:hover,
    &:focus-visible {
      color: var(--green);
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const Featured = () => {
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
    <StyledFeaturedSection id="projects" ref={revealContainer}>
      <h2 className="numbered-heading">Featured Project</h2>
      <p className="section-intro">
        A full-stack platform where I applied backend architecture, testing,
        and production-minded engineering decisions.
      </p>

      <StyledProject>
        <StyledScreenshotLink
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View the Job Scraper project on GitHub">
          <Image
            src="/images/featured/JobScraper/dashboard.png"
            alt="Job Scraper market statistics dashboard showing jobs, companies, sources, and job types"
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </StyledScreenshotLink>

        <StyledContent>
          <p className="overline">Flagship full-stack platform</p>
          <h3>Job Scraper Platform</h3>

          <p className="description">
            Aggregates remote listings from multiple sources into one searchable
            platform with filtering, saved jobs, and market statistics.
          </p>

          <StyledHighlights>
            <li>Scheduled multi-source scraping and aggregation</li>
            <li>Semantic deduplication across job providers</li>
            <li>Redis caching with explicit invalidation</li>
          </StyledHighlights>

          <StyledMetrics aria-label="Project snapshot from July 2026">
            <span><strong>244</strong> listings</span>
            <span><strong>8</strong> sources</span>
            <span><strong>73</strong> companies</span>
            <span><strong>124</strong> tests</span>
          </StyledMetrics>

          <StyledTechList aria-label="Technologies used">
            {['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'].map(
              technology => <li key={technology}>{technology}</li>,
            )}
          </StyledTechList>

          <StyledLinks>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Icon name="GitHub" />
              GitHub
            </a>
            <a href={DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
              <Icon name="External" />
              Documentation
            </a>
          </StyledLinks>
        </StyledContent>
      </StyledProject>
    </StyledFeaturedSection>
  );
};

export default Featured;