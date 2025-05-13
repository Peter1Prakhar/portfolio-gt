import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function SocialSidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col items-center space-y-6">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-secondary hover:text-white transition-colors duration-300"
        >
          <Facebook size={18} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-secondary hover:text-white transition-colors duration-300"
        >
          <Twitter size={18} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-secondary hover:text-white transition-colors duration-300"
        >
          <Instagram size={18} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-secondary hover:text-white transition-colors duration-300"
        >
          <Linkedin size={18} />
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-secondary hover:text-white transition-colors duration-300"
        >
          <Github size={18} />
        </a>
        <div className="h-16 w-px bg-text-secondary/20 mt-4"></div>
      </div>
    </motion.div>
  );
}