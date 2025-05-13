import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../client/src/lib/utils';

// Layout Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SocialSidebar from '../components/layout/SocialSidebar';
import ProgressBar from '../components/layout/ProgressBar';

// Section Components
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import EducationSection from '../components/sections/EducationSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PartnersSection from '../components/sections/PartnersSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionIds = navLinks.map(link => link.path.substring(1));
  
  const handleSectionChange = (index: number) => {
    setCurrentSection(index);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionIds[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fullpage-slider">
      <Head>
        <title>Gilber - Personal Portfolio</title>
        <meta name="description" content="Gilber is a professional portfolio website for a product designer showcasing work, experience and services." />
        <meta property="og:title" content="Gilber - Personal Portfolio" />
        <meta property="og:description" content="Gilber is a professional portfolio website for a product designer showcasing work, experience and services." />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header 
        currentSection={currentSection} 
        onNavClick={handleSectionChange} 
      />
      <SocialSidebar />
      <ProgressBar 
        currentSection={currentSection} 
        totalSections={sectionIds.length}
      />

      <motion.div 
        className="fullpage-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HomeSection id="home" />
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <EducationSection id="education" />
        <TestimonialsSection id="testimonials" />
        <PartnersSection id="partners" />
        <BlogSection id="blog" />
        <ContactSection id="contact" />
      </motion.div>

      <Footer />
    </div>
  );
}