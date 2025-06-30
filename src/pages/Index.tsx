
import { Hero } from '@/components/Hero';
import { FeaturedEssays } from '@/components/FeaturedEssays';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
        
        <Navigation />
        <Hero />
        
        <div className="relative z-10">
          <FeaturedEssays />
          <ServicesSection />
          <ProjectsSection />
          <AboutSection />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
