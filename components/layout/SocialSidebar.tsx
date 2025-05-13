import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function SocialSidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center"
    >
      {/* Top vertical line */}
      <div className="h-16 w-px bg-text-secondary/20 mb-8"></div>
      
      <div className="flex flex-col items-center space-y-8">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-accent transition-colors duration-300"
        >
          <Facebook size={20} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-accent transition-colors duration-300"
        >
          <Twitter size={20} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-accent transition-colors duration-300"
        >
          <Instagram size={20} />
        </a>
      </div>
      
      {/* Bottom vertical line */}
      <div className="h-16 w-px bg-text-secondary/20 mt-8"></div>
    </motion.div>
  );
}