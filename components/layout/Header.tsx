import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AlignJustify, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchModal from '../common/SearchModal';
import { navLinks } from '../../client/src/lib/utils';
import { useLanguage } from '../../client/src/contexts/LanguageContext';

interface HeaderProps {
  currentSection: number;
  onNavClick: (index: number) => void;
}

export default function Header({ currentSection, onNavClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Handle keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-300 ${
          scrolled ? 'bg-muted shadow-lg' : ''
        }`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-syne font-bold text-2xl">
            Gilber<span className="text-accent">.</span>
          </Link>
          
          {/* Hamburger Menu Button (three lines) */}
          <div ref={menuRef} className="relative">
            <button 
              className="text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={28} /> : <AlignJustify size={28} />}
            </button>
            
            {/* Dropdown Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 right-0 w-64 bg-muted p-4 rounded shadow-lg z-50"
                >
                  {/* Language Switcher */}
                  <div className="flex space-x-4 items-center mb-4 pb-2 border-b border-gray-700">
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
                  
                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-2">
                    {navLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.path}
                        className={`py-2 px-3 rounded transition-colors duration-200 flex items-center ${
                          currentSection === index 
                            ? 'text-accent bg-gray-800'
                            : 'text-white hover:bg-gray-800'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavClick(index);
                          setMenuOpen(false);
                        }}
                      >
                        {currentSection === index && (
                          <span className="text-accent mr-2">•</span>
                        )}
                        {language === 'en' ? link.name : t(link.key)}
                      </a>
                    ))}
                  </nav>
                  
                  {/* Social Icons */}
                  <div className="mt-4 pt-2 border-t border-gray-700 flex justify-between">
                    <div className="text-xs text-white/60">
                      © 2020 COPYRIGHT
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}