import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function SocialSidebar() {
  return (
    <motion.div 
      className="social-icons"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-white transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={16} />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-white transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={16} />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={16} />
      </a>
    </motion.div>
  );
}
