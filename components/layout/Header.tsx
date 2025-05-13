import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import SearchModal from '../common/SearchModal';

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

  // Add keyboard shortcut for opening sidebar with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSidebarOpen(prevState => !prevState);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
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
          <Link href="/" className="text-white font-syne font-bold text-2xl">
            Gilber<span className="text-accent">.</span>
          </Link>
          
          {/* Menu Button - Always visible on all screen sizes */}
          <div>
            <button 
              className="text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fixed Button for Desktop - Bottom right corner */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-40 hidden md:flex items-center justify-center bg-accent text-white p-4 rounded-full hover:bg-accent/80 transition-colors shadow-lg"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </motion.button>

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