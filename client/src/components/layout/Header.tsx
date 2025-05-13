import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { navLinks } from '@/lib/utils';
import { Menu, Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import SearchModal from '@/components/search/SearchModal';

interface HeaderProps {
  currentSection: number;
  onNavClick: (index: number) => void;
}

export default function Header({ currentSection, onNavClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 px-8 py-6 lg:px-16 transition-all duration-300 ${
          scrolled ? 'bg-muted shadow-lg' : ''
        }`}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-white font-syne font-bold text-2xl">
              Gilber<span className="text-accent">.</span>
            </a>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`navbar-link ${
                  currentSection === index
                    ? 'text-white active'
                    : 'text-text-secondary'
                } hover:text-white transition-colors duration-300`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(index);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              className="text-white hidden lg:flex items-center"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={20} />
            </button>

            <div className="hidden lg:block">
              <a href="tel:+12130525-10" className="text-white">
                +1 (213) 05-25-10
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button 
                className="text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        currentSection={currentSection}
        onNavClick={(index) => {
          onNavClick(index);
          setMobileMenuOpen(false);
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
