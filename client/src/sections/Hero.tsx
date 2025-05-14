import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Total number of slides
  const currentYear = new Date().getFullYear();
  
  // Auto slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000); // Change slide every 8 seconds
    
    return () => clearInterval(interval);
  }, []);

  const heroStyles = {
    backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center right'
  };
  
  return (
    <section className="h-screen flex items-center relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={heroStyles}>
        <div className="absolute inset-0 bg-background bg-opacity-70"></div>
      </div>
      
      {/* Social icons are now in the global layout */}
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 ml-24">
        <div className="max-w-3xl">
          <motion.p 
            className="text-lg text-muted mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Product Designer
          </motion.p>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-poppins font-bold mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Gilber<span className="text-accent">.</span>
          </motion.h1>
          
          <motion.p 
            className="text-base text-white/70 mb-8 max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <button className="rounded-full border border-white/30 p-6 group">
              <Play className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
            </button>
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            className="absolute bottom-10 left-20 text-xs text-white/50 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            © Gilber. {currentYear}
          </motion.div>
        </div>
      </div>
      
      {/* Right Line */}
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-accent z-10"></div>
    </section>
  );
}
