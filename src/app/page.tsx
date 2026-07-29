import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { FeaturedProject } from '@/components/sections/featured-project';
import { Hero } from '@/components/sections/hero';
import { Journey } from '@/components/sections/journey';
import { getJourneyMilestones } from '@/lib/journey';

export default function HomePage() {
  const milestones = getJourneyMilestones();

  return (
    <>
      <Hero />
      <About />
      <Journey milestones={milestones} />
      <FeaturedProject />
      <Contact />
    </>
  );
}
