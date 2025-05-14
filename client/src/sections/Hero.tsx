import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import portraitImage from "../assets/joshua_portrait.png";

export default function Hero() {
  const currentYear = new Date().getFullYear();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Pure black background like in the reference image
  const heroStyles = {
    backgroundColor: '#000000',
  };

  // Trigger the zoom animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Pure Black Background */}
      <div className="absolute inset-0" style={heroStyles}></div>
      
      {/* Social Icons - Left side vertical */}
      <div className="absolute left-10 top-0 bottom-0 flex flex-col justify-center items-center z-20">
        <div className="h-16 w-px bg-white/20 mb-10"></div>
        <motion.div 
          className="flex flex-col space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#" className="text-white/50 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="text-white/50 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="#" className="text-white/50 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </motion.div>
        <div className="h-16 w-px bg-white/20 mt-10"></div>
      </div>
      
      {/* Play Button */}
      <motion.div 
        className="absolute left-1/4 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </div>
      </motion.div>
      
      {/* Portrait Image with Zoom Animation - Right Side */}
      <motion.div 
        className="absolute top-0 right-0 bottom-0 w-1/2"
        initial={{ scale: 1.05, opacity: 0.5 }}
        animate={{ 
          scale: isLoaded ? 1 : 1.05,
          opacity: isLoaded ? 1 : 0.5
        }}
        transition={{ 
          type: "tween", 
          duration: 1.2,
          ease: "easeOut"
        }}
      >
        <img 
          src={portraitImage} 
          alt="Joshua Kanatt" 
          className="h-full w-full object-cover object-right"
        />
      </motion.div>
      
      {/* Vertical lines decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-px bg-accent"></div>
      
      {/* Content - Positioned like in the reference */}
      <div className="absolute bottom-40 left-20 z-10 max-w-md">
        <motion.p
          className="text-white/70 mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Business Strategist & Data Scientist
        </motion.p>
        
        <motion.h1 
          className="text-6xl md:text-7xl font-poppins font-bold mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Joshua Kanatt<span className="text-accent">.</span>
        </motion.h1>
        
        <motion.p 
          className="text-base text-white/60 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          With extensive expertise in data analysis and strategic planning, I help organizations leverage data for informed decision-making and sustainable growth.
        </motion.p>
      </div>
      
      {/* Copyright */}
      <motion.div
        className="absolute bottom-5 left-20 text-xs text-white/50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        © {currentYear} Joshua Kanatt. All rights reserved.
      </motion.div>
    </section>
  );
}