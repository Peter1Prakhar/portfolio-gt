import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function SocialSidebar() {
  return (
    <motion.div 
      className="fixed left-0 top-0 bottom-0 flex flex-col justify-center z-10 ml-6 hidden md:flex"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="flex flex-col space-y-6">
        <a 
          href="#" 
          className="text-white hover:text-accent transition-colors duration-300"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a 
          href="#" 
          className="text-white hover:text-accent transition-colors duration-300"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a 
          href="#" 
          className="text-white hover:text-accent transition-colors duration-300"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
}
