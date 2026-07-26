import Layout from '@/components/layout';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Jobs from '@/components/sections/jobs';
import Featured from '@/components/sections/featured';
import Contact from '@/components/sections/contact';
import type { Metadata } from 'next';
import { getAllJobs } from '@/lib/jobs';

export const metadata: Metadata = {
  title: 'Ayesha Islam | Backend Engineer',
  description: 'Portfolio of Ayesha Islam, backend and full-stack developer.',
};

export default function Home() {
  const jobs = getAllJobs();
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Jobs jobs={jobs} />
        <Featured />
        <Contact />
      </Layout>
    </>
  );
}