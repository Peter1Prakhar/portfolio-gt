import { useEffect, useRef } from "react";
import SocialSidebar from "@/components/SocialSidebar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Testimonials from "@/sections/Testimonials";
import Partners from "@/sections/Partners";
import Blog from "@/sections/Blog";
import Contact from "@/sections/Contact";

export default function Home() {
  // Ref for scroll tracking
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({
    hero: null,
    about: null,
    projects: null,
    education: null,
    testimonials: null,
    partners: null,
    blog: null,
    contact: null
  });

  // Handle smooth scroll for anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && sectionRefs.current[hash]) {
        sectionRefs.current[hash]?.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Initial check for hash in URL
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);
    
    // Add click event listener to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href && href !== '#') {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = sectionRefs.current[targetId];
          
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', href);
          }
        }
      });
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <SocialSidebar />
      
      <div id="hero" ref={el => sectionRefs.current.hero = el}>
        <Hero />
      </div>
      
      <div id="about" ref={el => sectionRefs.current.about = el}>
        <About />
      </div>
      
      <div id="projects" ref={el => sectionRefs.current.projects = el}>
        <Projects />
      </div>
      
      <div id="education" ref={el => sectionRefs.current.education = el}>
        <Education />
      </div>
      
      <div id="testimonials" ref={el => sectionRefs.current.testimonials = el}>
        <Testimonials />
      </div>
      
      <div id="partners" ref={el => sectionRefs.current.partners = el}>
        <Partners />
      </div>
      
      <div id="blog" ref={el => sectionRefs.current.blog = el}>
        <Blog />
      </div>
      
      <div id="contact" ref={el => sectionRefs.current.contact = el}>
        <Contact />
      </div>
    </>
  );
}
