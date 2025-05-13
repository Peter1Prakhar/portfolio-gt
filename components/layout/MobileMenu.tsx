import { navLinks } from '../../client/src/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
          className="fixed top-0 right-0 w-full h-screen bg-muted z-50 flex flex-col overflow-hidden"
        >
          <div className="flex justify-between items-center p-8">
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
              <X size={30} />
            </motion.button>
          </div>
          
          <div className="flex flex-col px-8 py-12 space-y-5">
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
                  className={`text-2xl font-syne py-3 flex items-center ${
                    currentSection === index 
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-white'
                  } transition-colors duration-300`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(index);
                  }}
                >
                  {currentSection === index && (
                    <span className="text-accent mr-3 text-xl">•</span>
                  )}
                  {language === 'en' ? link.name : t(link.key)}
                </a>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-auto px-8 pb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="tel:+12130525-10" className="text-white text-lg hover:text-accent transition-colors">
              +1 (213) 05-25-10
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}