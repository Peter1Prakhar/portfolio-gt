import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import portraitImage from "../assets/joshua_portrait.png";
import steveJobsImage from "../assets/steve_jobs.png";

export default function Hero() {
  const currentYear = new Date().getFullYear();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="h-screen relative overflow-hidden bg-background">
      {/* Steve Jobs as a primary background element on the right side */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-3/5 overflow-hidden">
        <img 
          src={steveJobsImage}
          alt="Portrait Background" 
          className="absolute right-0 h-full md:h-[140%] w-auto max-w-none object-cover"
          style={{ 
            objectPosition: 'right 20%',
            transform: 'scale(1.5)',
            opacity: 0.85
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30"></div>
      </div>
      
      {/* Left side content */}
      <div className="relative h-full w-full flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-10 lg:px-16">
          <div className="w-full lg:w-1/2 mb-10">
            {/* Play Button */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <button 
                className="group relative flex items-center justify-center w-16 h-16 rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300"
                aria-label="Play Video"
              >
                <span className="block w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></span>
                <span className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75"></span>
              </button>
            </motion.div>
            
            {/* Name */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Joshua Kanatt<span className="text-accent">.</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-base md:text-lg text-white/90 max-w-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Business Strategist & Data Scientist with expertise<br />
              in complex problem-solving across multiple industries.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Social links on left side */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6">
        <div className="w-px h-20 bg-white/30"></div>
        <a href="#" className="text-white/70 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="#" className="text-white/70 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
        </a>
        <a href="#" className="text-white/70 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <div className="w-px h-20 bg-white/30"></div>
      </div>
      
      {/* Copyright */}
      <div className="absolute bottom-6 left-6 text-xs text-white/40">
        © {currentYear} Joshua Kanatt. All rights reserved.
      </div>
    </section>
  );
}