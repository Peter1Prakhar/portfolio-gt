import { navLinks } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Facebook, Twitter, Instagram } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentSection: number;
  onNavClick: (index: number) => void;
}

export default function MobileMenu({ isOpen, onClose, currentSection, onNavClick }: MobileMenuProps) {
  // Temporary language state (in a real app, this would use the context)
  const language = 'en';
  
  // Animation variants
  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.05,
        duration: 0.3,
        ease: 'easeOut'
      }
    }),
    exit: (i: number) => ({
      x: 20,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    })
  };

  // Animation for close button
  const closeButtonVariants = {
    hover: { rotate: 90, transition: { duration: 0.2 } }
  };

  // Social icons variants
  const socialIconsVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  // Get translated menu item names based on the selected language
  const getMenuName = (name: string): string => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        education: 'Education',
        testimonials: 'Testimonials',
        partners: 'Partners',
        blog: 'Blog',
        contact: 'Contact'
      },
      fr: {
        home: 'Accueil',
        about: 'À Propos',
        projects: 'Projets',
        education: 'Éducation',
        testimonials: 'Témoignages',
        partners: 'Partenaires',
        blog: 'Blog',
        contact: 'Contact'
      },
      de: {
        home: 'Startseite',
        about: 'Über Mich',
        projects: 'Projekte',
        education: 'Bildung',
        testimonials: 'Referenzen',
        partners: 'Partner',
        blog: 'Blog',
        contact: 'Kontakt'
      }
    };
    
    return translations[language][name.toLowerCase()] || name;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
          className="fixed top-0 right-0 w-full md:w-72 h-screen bg-[#151515] z-50 flex flex-col overflow-hidden"
        >
          {/* Top bar with language switcher and close button */}
          <div className="flex justify-end items-center p-4 pt-6">
            <div className="flex items-center space-x-8">
              <div className="flex space-x-6 items-center">
                <button className="text-sm text-[#ff0000]">
                  EN
                </button>
                <button className="text-sm text-white">
                  FR
                </button>
                <button className="text-sm text-white">
                  DE
                </button>
              </div>
              
              <motion.button 
                className="text-white"
                onClick={onClose}
                variants={closeButtonVariants}
                whileHover="hover"
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>
            </div>
          </div>
          
          {/* Menu items with red accent vertical line */}
          <div className="flex mt-8">
            <div className="w-full relative">
              {/* Red vertical line - always visible */}
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#ff0000]"></div>
              
              {/* Menu items */}
              <div className="flex flex-col space-y-5 pr-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={itemVariants}
                    className="text-right"
                  >
                    <a
                      href={link.path}
                      className={`text-base font-syne py-1 flex items-center justify-end ${
                        currentSection === index 
                        ? 'text-[#ff0000]'
                        : 'text-white hover:text-[#ff0000]'
                      } transition-colors duration-300`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavClick(index);
                        onClose();
                      }}
                    >
                      {currentSection === index && (
                        <span className="text-[#ff0000] mr-2 text-lg">•</span>
                      )}
                      {getMenuName(link.name)}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Footer section */}
          <div className="mt-auto flex flex-col space-y-6 items-center p-5">
            {/* Social icons - centered */}
            <motion.div 
              className="flex space-x-8 justify-center w-full"
              variants={socialIconsVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialIconVariants}
                className="text-white hover:text-[#ff0000] transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialIconVariants}
                className="text-white hover:text-[#ff0000] transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialIconVariants}
                className="text-white hover:text-[#ff0000] transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
            </motion.div>
            
            {/* Copyright text - centered */}
            <div className="text-xs text-white/80 text-center">
              © 2020 COPYRIGHT.<br />
              ALL RIGHTS RESERVED.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
