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
        <div id="hero" className="h-screen w-full overflow-hidden">
          <Hero />
        </div>
        
        <div id="journey" className="h-screen w-full overflow-hidden">
          <About />
        </div>
        
        <div id="skills" className="h-screen w-full overflow-hidden">
          <Projects />
        </div>
        
        <div id="education" className="h-screen w-full overflow-hidden">
          <Education />
        </div>
        
        <div id="testimonials" className="h-screen w-full overflow-hidden">
          <Testimonials />
        </div>
        
        <div id="articles" className="h-screen w-full overflow-hidden">
          <Blog />
        </div>
        
        <div id="contact" className="h-screen w-full overflow-hidden">
          <Contact />
        </div>
      </FullpageScroll>
    </>
  );
}
