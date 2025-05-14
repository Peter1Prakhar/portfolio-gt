import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import portraitImage from "../assets/joshua_portrait.png";
import steveJobsImage from "../assets/steve_jobs.png";

export default function Hero() {
  const currentYear = new Date().getFullYear();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger the zoom animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-background"></div>
      
      {/* Steve Jobs image positioned on the right */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden">
        <img 
          src={steveJobsImage} 
          alt="Background Portrait" 
          className="absolute top-0 right-0 h-full w-auto object-cover object-right"
          style={{ 
            maxWidth: 'none', 
            transform: 'scale(1.2) translateX(0%)',
            opacity: 0.9
          }}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-background bg-opacity-40"></div>
      </div>
      
      {/* Portrait Image with Zoom Animation */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 1.2, opacity: 0.9 }}
        animate={{ 
          scale: isLoaded ? 1 : 1.2,
          opacity: isLoaded ? 1 : 0.9
        }}
        transition={{ 
          duration: 2,
          ease: "easeOut"
        }}
      >
        <div className="relative w-[560px] h-[560px] md:w-[780px] md:h-[780px]">
          <img 
            src={portraitImage} 
            alt="Joshua Kanatt" 
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
      
      {/* Dark gradient overlay that covers bottom of the image */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Minimalist Content - Positioned higher at bottom left */}
      <div className="absolute bottom-36 left-40 z-10">
        {/* Play Button - Now above the name */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mb-8 inline-block"
        >
          <button 
            className="group relative flex items-center justify-center w-20 h-20 rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300"
            aria-label="Play Video"
          >
            <span className="block w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></span>
            
            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75"></span>
          </button>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-7xl font-poppins font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          Joshua Kanatt<span className="text-accent">.</span>
        </motion.h1>
        
        <motion.p 
          className="text-base text-white/90 max-w-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          Business Strategist & Data Scientist with expertise<br />
          in complex problem-solving across multiple industries.
        </motion.p>
      </div>
      
      {/* Copyright */}
      <motion.div
        className="absolute bottom-5 left-40 text-xs text-white/50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        © {currentYear} Joshua Kanatt. All rights reserved.
      </motion.div>
    </section>
  );
}