import { useEffect } from "react";
import { Link } from "wouter";
import { navItems } from "@/lib/data";
import { motion } from "framer-motion";
import { X, Search } from "lucide-react";

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
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "100%",
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
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-background bg-opacity-95 flex flex-col items-center justify-center z-50 md:hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
    >
      <button 
        className="absolute top-6 right-6 text-white p-2 focus:outline-none" 
        onClick={onClose}
        aria-label="Close Navigation"
      >
        <X className="w-6 h-6" />
      </button>
      
      <button
        className="absolute top-6 left-6 text-white p-2 focus:outline-none"
        onClick={onSearchOpen}
        aria-label="Search"
      >
        <Search className="w-6 h-6" />
      </button>
      
      <nav>
        <ul className="flex flex-col items-center space-y-6">
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
                className={`text-${item.isActive ? 'accent' : 'white'} hover:text-accent transition-colors duration-300 text-2xl uppercase font-medium`}
                onClick={onClose}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
      
      <motion.div 
        className="mt-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          transition: {
            delay: navItems.length * 0.1,
            duration: 0.5,
          },
        }}
      >
        <a 
          href="tel:+12130625-10" 
          className="text-white hover:text-accent transition-colors duration-300 text-xl font-medium"
        >
          +1 (213) 062-25-10
        </a>
      </motion.div>
    </motion.div>
  );
}
