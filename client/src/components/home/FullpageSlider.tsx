import { useRef, useState } from 'react';
import { useFullpage } from '@/hooks/use-fullpage';
import { navLinks } from '@/lib/utils';
import { motion } from 'framer-motion';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SocialSidebar from '@/components/layout/SocialSidebar';
import ProgressBar from '@/components/layout/ProgressBar';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import TestimonialsSection from './TestimonialsSection';
import PartnersSection from './PartnersSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';

const sectionIds = navLinks.map(link => link.path.substring(1));

export default function FullpageSlider() {
  const [currentSection, setCurrentSection] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const { scrollToSection, totalSections } = useFullpage({
    sectionIds,
    onSectionChange: (index) => {
      setCurrentSection(index);
    }
  });

  return (
    <motion.div 
      className="fullpage-slider" 
      ref={sliderRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header 
        currentSection={currentSection} 
        onNavClick={scrollToSection} 
      />
      <SocialSidebar />
      <ProgressBar 
        currentSection={currentSection} 
        totalSections={totalSections}
      />

      <HomeSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <EducationSection id="education" />
      <TestimonialsSection id="testimonials" />
      <PartnersSection id="partners" />
      <BlogSection id="blog" />
      <ContactSection id="contact" />

      <Footer />
    </motion.div>
  );
}
