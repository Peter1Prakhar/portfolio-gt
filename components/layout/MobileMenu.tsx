import { navLinks } from '../../client/src/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentSection: number;
  onNavClick: (index: number) => void;
}

export default function MobileMenu({ isOpen, onClose, currentSection, onNavClick }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-4/5 h-screen bg-muted z-50 p-8 flex flex-col"
        >
          <div className="flex flex-col space-y-6 mt-16">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`${
                  currentSection === index ? 'text-white' : 'text-text-secondary'
                } text-xl font-syne py-2`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(index);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-12">
            <a href="tel:+12130525-10" className="text-white text-lg">
              +1 (213) 05-25-10
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}