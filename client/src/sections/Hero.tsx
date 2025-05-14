import { motion } from "framer-motion";

export default function Hero() {
  const currentYear = new Date().getFullYear();
  
  const heroStyles = {
    backgroundImage: `url('https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center right'
  };
  
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={heroStyles}>
        <div className="absolute inset-0 bg-background bg-opacity-80"></div>
      </div>
      
      {/* Minimalist Content - Positioned at bottom left */}
      <div className="absolute bottom-20 left-20 z-10">
        <motion.h1 
          className="text-6xl md:text-7xl font-poppins font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Joshua Kanatt<span className="text-accent">.</span>
        </motion.h1>
        
        <motion.p 
          className="text-base text-white/90 max-w-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Business Strategist & Data Scientist with expertise<br />
          in complex problem-solving across multiple industries.
        </motion.p>
      </div>
      
      {/* Copyright */}
      <motion.div
        className="absolute bottom-5 left-20 text-xs text-white/50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        © {currentYear} Joshua Kanatt. All rights reserved.
      </motion.div>
    </section>
  );
}