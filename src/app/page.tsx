import FeaturedLog from "@/components/FeaturedBlog";
import BindingVow from "@/components/MangaStyle/BiddingVow";
import MangaAbout from "@/components/MangaStyle/MangaAbout";
import FeaturedProjects from "@/components/MangaStyle/MangaFeatures";
import MangaHero from "@/components/MangaStyle/MangaHero";
import TechSection from "@/components/MangaStyle/MangaTech";

export default function HomePage() {
  return (
    <>
      <MangaHero />
      <MangaAbout />
      <FeaturedProjects />
      <TechSection />
      <FeaturedLog />
      <BindingVow />
    </>
  );
}
