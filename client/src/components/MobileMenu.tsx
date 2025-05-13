import { useEffect } from "react";
import { Link } from "wouter";
import { navItems } from "@/lib/data";
import { motion } from "framer-motion";
import { 
  X, Search, Home, User, Briefcase, GraduationCap, 
  MessageSquare, Building, FileText, Mail, Phone 
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

  // Map of navigation items to icons
  const navIcons = {
    home: <Home className="w-5 h-5 mr-3" />,
    about: <User className="w-5 h-5 mr-3" />,
    projects: <Briefcase className="w-5 h-5 mr-3" />,
    education: <GraduationCap className="w-5 h-5 mr-3" />,
    testimonials: <MessageSquare className="w-5 h-5 mr-3" />,
    partners: <Building className="w-5 h-5 mr-3" />,
    blog: <FileText className="w-5 h-5 mr-3" />,
    contact: <Mail className="w-5 h-5 mr-3" />
  };

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
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-background bg-opacity-95 flex flex-col z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
    >
      <div className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="text-xl font-poppins font-bold">
          Gilber<span className="text-accent">.</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            className="text-white p-2 focus:outline-none"
            onClick={onSearchOpen}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            className="text-white p-2 focus:outline-none" 
            onClick={onClose}
            aria-label="Close Navigation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <nav className="mb-10">
          <ul className="space-y-4">
            {navItems.map((item, i) => {
              const iconKey = item.path.replace('#', '') as keyof typeof navIcons;
              return (
                <motion.li 
                  key={item.id}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <a 
                    href={item.path} 
                    className={`flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 ${
                      item.isActive ? 'text-accent' : 'text-white'
                    }`}
                    onClick={onClose}
                  >
                    {navIcons[iconKey] || <div className="w-5 h-5 mr-3" />}
                    <span className="text-lg font-medium">{item.label}</span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>
        
        <motion.div 
          className="p-4 bg-gray-800 rounded-lg mt-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: {
              delay: navItems.length * 0.05 + 0.2,
              duration: 0.5,
            },
          }}
        >
          <div className="flex items-center text-white mb-2">
            <Phone className="w-5 h-5 mr-3 text-accent" />
            <a 
              href="tel:+12130625-10" 
              className="text-white hover:text-accent transition-colors duration-300"
            >
              +1 (213) 062-25-10
            </a>
          </div>
          
          <div className="flex items-center text-white">
            <Mail className="w-5 h-5 mr-3 text-accent" />
            <a 
              href="mailto:hello@gilber.design" 
              className="text-white hover:text-accent transition-colors duration-300"
            >
              hello@gilber.design
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
