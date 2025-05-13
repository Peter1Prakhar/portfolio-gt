import { navLinks } from '../../client/src/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../../client/src/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentSection: number;
  onNavClick: (index: number) => void;
}

export default function MobileMenu({ isOpen, onClose, currentSection, onNavClick }: MobileMenuProps) {
  const { language, setLanguage, t } = useLanguage();

  // Animation variants
  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    }),
    exit: (i: number) => ({
      x: 50,
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
        delay: 0.8,
        staggerChildren: 0.1 
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
          className="fixed top-0 right-0 w-full md:w-96 h-screen bg-muted z-50 flex flex-col overflow-hidden"
        >
          {/* Top bar with logo, language switcher, close button */}
          <div className="flex justify-between items-center p-8">
            <div className="text-white font-syne font-bold text-2xl">
              Gilber<span className="text-accent">.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 items-center">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`text-sm font-semibold ${language === 'en' ? 'text-accent' : 'text-text-secondary hover:text-white'}`}
                >
                  EN
                </button>
                <span className="text-text-secondary">|</span>
                <button 
                  onClick={() => setLanguage('fr')}
                  className={`text-sm font-semibold ${language === 'fr' ? 'text-accent' : 'text-text-secondary hover:text-white'}`}
                >
                  FR
                </button>
                <span className="text-text-secondary">|</span>
                <button 
                  onClick={() => setLanguage('de')}
                  className={`text-sm font-semibold ${language === 'de' ? 'text-accent' : 'text-text-secondary hover:text-white'}`}
                >
                  DE
                </button>
              </div>
              
              <motion.button 
                className="text-white p-2"
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
          <div className="flex px-8 py-6">
            <div className="w-full relative">
              {/* Red vertical line - always visible */}
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-accent"></div>
              
              {/* Menu items */}
              <div className="flex flex-col space-y-5 pr-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={itemVariants}
                  >
                    <a
                      href={link.path}
                      className={`text-xl font-syne py-3 flex items-center justify-end ${
                        currentSection === index 
                        ? 'text-accent'
                        : 'text-white hover:text-accent'
                      } transition-colors duration-300`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavClick(index);
                      }}
                    >
                      {language === 'en' ? link.name : t(link.key)}
                      
                      {currentSection === index && (
                        <span className="text-accent ml-3 text-xl">•</span>
                      )}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Footer with copyright and social icons */}
          <div className="mt-auto p-8">
            <div className="flex justify-between items-center">
              <div className="text-xs text-white/60">
                © 2020 COPYRIGHT<br />
                ALL RIGHTS RESERVED.
              </div>
              
              <motion.div 
                className="flex space-x-6"
                variants={socialIconsVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  className="text-white hover:text-accent transition-colors"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  className="text-white hover:text-accent transition-colors"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  className="text-white hover:text-accent transition-colors"
                >
                  <Instagram size={20} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}