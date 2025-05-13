import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Total number of slides
  
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
    backgroundPosition: 'center'
  };
  
  return (
    <section className="h-screen flex items-center relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={heroStyles}>
        <div className="absolute inset-0 bg-background bg-opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
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
            className="text-5xl md:text-7xl font-poppins font-bold mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Gilber<span className="text-accent">.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-white/80 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Working with client and community, we deliver presentations that create vibrant new spaces and success, attract people, and encourage investment through.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full bg-accent py-3 pl-4 pr-12 font-medium transition-all duration-300 ease-in-out hover:bg-transparent hover:pl-10 hover:pr-6">
              <span className="absolute left-0 inset-y-0 flex items-center justify-center w-10 h-full bg-white bg-opacity-20 text-white duration-300 -translate-x-full group-hover:translate-x-0">
                <Play className="w-4 h-4" />
              </span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Watch Showreel
              </span>
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Pagination Indicator */}
      <div className="absolute bottom-10 right-10 z-10">
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span 
              key={index}
              className={`w-10 h-0.5 ${index === currentSlide ? 'bg-accent' : 'bg-white opacity-50'}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
