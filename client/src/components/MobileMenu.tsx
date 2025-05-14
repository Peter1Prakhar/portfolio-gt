import { useEffect } from "react";
import { Link } from "wouter";
import { navItems } from "@/lib/data";
import { motion } from "framer-motion";
import { 
  X, Facebook, Twitter, Instagram
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchOpen: () => void;
}

export default function MobileMenu({ isOpen, onClose, onSearchOpen }: MobileMenuProps) {
  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  const menuVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.div 
      className="fixed inset-0 bg-background bg-opacity-95 flex z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
    >
      <div className="w-3/5 relative">
        
        <div className="ml-20 mt-12">
          <div className="text-xl font-poppins font-bold">
            Gilber<span className="text-accent">.</span>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-20 flex items-center space-x-4 text-white/50 text-sm">
          <a href="#" className="hover:text-white/80 transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-white/80 transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-white/80 transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <span className="text-xs ml-4">© {currentYear} COPYRIGHT.<br/>ALL RIGHTS RESERVED.</span>
        </div>
      </div>
      
      <div className="w-2/5 flex flex-col bg-black py-12 px-8 relative">
        {/* Language selector */}
        <div className="flex justify-end space-x-6 mb-12 mr-10">
          <a href="#" className="text-accent font-medium text-sm">EN</a>
          <a href="#" className="text-white/70 hover:text-white font-medium text-sm">FR</a>
          <a href="#" className="text-white/70 hover:text-white font-medium text-sm">DE</a>
        </div>
        
        <button 
          className="absolute top-12 right-8 text-white focus:outline-none" 
          onClick={onClose}
          aria-label="Close Navigation"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Right sidebar with nav items */}
        <nav className="flex-1 pr-12">
          <ul className="space-y-8 mt-16">
            {navItems.map((item, i) => (
              <motion.li 
                key={item.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <a 
                  href={item.path} 
                  className={`block text-2xl font-medium transition-colors duration-300 ${
                    item.isActive ? 'text-accent border-l-4 border-accent pl-4' : 'text-white hover:text-accent'
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        {/* Right red line */}
        <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-accent"></div>
      </div>
    </motion.div>
  );
}
