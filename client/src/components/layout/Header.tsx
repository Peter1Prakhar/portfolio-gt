import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { AlignJustify, X } from 'lucide-react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import SearchModal from '@/components/search/SearchModal';

interface HeaderProps {
  currentSection: number;
  onNavClick: (index: number) => void;
}

export default function Header({ currentSection, onNavClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
        className={`fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-300 ${
          scrolled ? 'bg-muted shadow-lg' : ''
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="text-white font-syne font-bold text-2xl cursor-pointer" onClick={() => window.location.href = '/'}>
            Gilber<span className="text-accent">.</span>
          </div>
          
          {/* Hamburger Menu Button (three lines) - Always Visible */}
          <div>
            <button 
              className="text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <AlignJustify size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Sidebar Navigation */}
      <MobileMenu 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        currentSection={currentSection}
        onNavClick={(index) => {
          onNavClick(index);
          setSidebarOpen(false);
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
