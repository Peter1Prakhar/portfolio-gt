import SocialSidebar from "@/components/SocialSidebar";
import FullpageScroll from "@/components/FullpageScroll";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Testimonials from "@/sections/Testimonials";
import Partners from "@/sections/Partners";
import Blog from "@/sections/Blog";
import Contact from "@/sections/Contact";

export default function Home() {
  // Using the new FullpageScroll component for shutter-style animations
  return (
    <>
      <SocialSidebar />
      
      <FullpageScroll>
        {/* Each section becomes a full page with shutter animations */}
        <div id="hero">
          <Hero />
        </div>
        
        <div id="journey">
          <About />
        </div>
        
        <div id="skills">
          <Projects />
        </div>
        
        <div id="education">
          <Education />
        </div>
        
        <div id="testimonials">
          <Testimonials />
        </div>
        
        <div id="articles">
          <Blog />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </FullpageScroll>
    </>
  );
}
