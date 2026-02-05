import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { BrandsMarquee } from '@/components/BrandsMarquee';
import { ServicesSection } from '@/components/ServicesSection';
import MoviePostersAnimation from '@/components/MoviePostersAnimation';
import { CreatorsSection } from '@/components/CreatorsSection';
import { FoundersSection } from '@/components/FoundersSection';
import { ReachSection } from '@/components/ReachSection';
import { ContactSection, Footer } from '@/components/ContactSection';

const Index = () => {
  return (
    // UPDATED: Added overflow-x-hidden to prevent horizontal scrolling issues
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BrandsMarquee />
      <ProblemSolutionSection />
      <ServicesSection />
      <MoviePostersAnimation />
      <CreatorsSection />
      <FoundersSection />
      <ReachSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;