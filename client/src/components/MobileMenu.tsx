import { useEffect, useState } from "react";
import { Link } from "wouter";
import { navItems, getNavItemsWithActive, NavItem } from "@/lib/data";
import { motion } from "framer-motion";
import { 
  X, Facebook, Twitter, Instagram
} from "lucide-react";
import { useCurrentSection } from "./FullpageScroll";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchOpen: () => void;
}

export default function MobileMenu({ isOpen, onClose, onSearchOpen }: MobileMenuProps) {
  // Get current section from context
  const { currentIndex, setCurrentIndex } = useCurrentSection();
  
  // Get navigation items with active state based on current section
  const [activeNavItems, setActiveNavItems] = useState<NavItem[]>(navItems);
  
  // Update active nav items when current section changes
  useEffect(() => {
    setActiveNavItems(getNavItemsWithActive(currentIndex));
  }, [currentIndex]);
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

  // Background overlay animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.7 } 
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.8, // Delay opacity fade until all sidebar elements and the panel have started to exit
        ease: "easeInOut"
      } 
    }
  };

  // Right panel animation (sliding from right)
  const rightPanelVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: "0%", 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      } 
    },
    exit: { 
      x: "100%", 
      transition: { 
        duration: 0.6,
        ease: "easeInOut",
        // Delay the panel exit animation so content items can animate out first
        delay: 0.5 
      } 
    }
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.6, // Increased delay so sidebar appears first
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    }),
    exit: (i: number) => ({
      x: 50,
      opacity: 0,
      transition: {
        // Create a delay that's proportional to the number of items, so last items animate out first
        delay: 0.3 - (i * 0.1),
        duration: 0.6,
        ease: "easeInOut"
      },
    }),
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto">
      {/* Semi-transparent overlay */}
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={overlayVariants}
        onClick={onClose}
      />

      {/* Right navigation panel */}
      <motion.div 
        className="absolute top-0 right-0 bottom-0 w-[450px] bg-black shadow-2xl flex flex-col py-12 px-8"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={rightPanelVariants}
      >
        {/* Language selector */}
        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ x: 50, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            transition: { 
              delay: 0.5, 
              duration: 0.7 
            }
          }}
          exit={{ 
            x: 50, 
            opacity: 0,
            transition: { 
              duration: 0.6, 
              delay: 0.2, // Exit with the close button
              ease: "easeInOut" 
            }
          }}
        >
          <a href="#" className="text-accent font-medium text-sm">EN</a>
          <a href="#" className="text-white/70 hover:text-white font-medium text-sm">FR</a>
          <a href="#" className="text-white/70 hover:text-white font-medium text-sm">DE</a>
        </motion.div>
        
        <motion.button 
          className="absolute top-12 right-8 text-white focus:outline-none" 
          onClick={onClose}
          aria-label="Close Navigation"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ 
            opacity: 1, 
            rotate: 0,
            transition: { 
              duration: 0.6, 
              delay: 0.5 
            }
          }}
          exit={{ 
            opacity: 0, 
            rotate: 90,
            transition: { 
              duration: 0.6, 
              delay: 0.2,
              ease: "easeInOut" 
            }
          }}
        >
          <X className="w-6 h-6" />
        </motion.button>
        
        {/* Navigation items */}
        <nav className="flex-1">
          <ul className="space-y-8 mt-16 text-center">
            {activeNavItems.map((item, i) => (
              <motion.li 
                key={item.id}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={itemVariants}
              >
                <a 
                  href={item.path} 
                  className={`block text-2xl font-medium transition-colors duration-300 relative ${
                    item.isActive 
                      ? 'text-accent' 
                      : 'text-white hover:text-accent'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentIndex(item.sectionIndex);
                    onClose();
                  }}
                >
                  {item.isActive && (
                    <span className="absolute left-[-25px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(255,0,0,0.8)] animate-pulse"></span>
                  )}
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        {/* Bottom info */}
        <motion.div 
          className="mt-auto flex flex-col items-center justify-center space-y-2 text-white/50 text-sm pt-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            transition: { delay: 0.7, duration: 0.8 }
          }}
          exit={{ 
            x: 50, 
            opacity: 0,
            transition: { 
              duration: 0.6, 
              delay: 0.1, // Make footer disappear first before menu items
              ease: "easeInOut" 
            }
          }}
        >
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white/80 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          <span className="text-xs text-center">© {currentYear} COPYRIGHT.<br/>ALL RIGHTS RESERVED.</span>
        </motion.div>
        
        {/* Right red line */}
        <motion.div 
          className="absolute right-12 top-0 bottom-0 w-[1px] bg-accent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.9 }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
