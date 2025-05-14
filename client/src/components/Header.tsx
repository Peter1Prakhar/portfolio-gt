import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { useCurrentSection } from "./FullpageScroll";

interface HeaderProps {
  isScrolled: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

export default function Header({ isScrolled, setIsSearchOpen }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { currentIndex } = useCurrentSection();
  
  // Determine which hamburger line should be active based on the current section
  const getActiveLineIndex = () => {
    // Map section indices to hamburger line indices (0, 1, or 2)
    // Spread active sections across the three lines
    if (currentIndex < 3) return 0;       // First few sections activate top line
    if (currentIndex >= 3 && currentIndex < 6) return 1;  // Middle sections activate middle line
    return 2;  // Last sections activate bottom line
  };

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 py-8 transition-all duration-300 ${
        isScrolled ? "bg-background bg-opacity-90 shadow-lg backdrop-blur-sm" : ""
      }`}
    >
      <div className="w-full px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl md:text-4xl font-poppins font-bold ml-8">
            <Link href="#">
              Gilber<span className="text-accent">.</span>
            </Link>
          </div>
          
          {/* Hamburger Menu Toggle (Three Lines) */}
          <button 
            className="focus:outline-none mr-8" 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle Navigation"
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="hamburger-icon"
            >
              <path 
                d="M3 6H21" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                className={`hamburger-line ${getActiveLineIndex() === 0 ? 'active-line' : ''}`}
              />
              <path 
                d="M3 12H21" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                className={`hamburger-line ${getActiveLineIndex() === 1 ? 'active-line' : ''}`}
              />
              <path 
                d="M3 18H21" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                className={`hamburger-line ${getActiveLineIndex() === 2 ? 'active-line' : ''}`}
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            key="mobile-menu"
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)}
            onSearchOpen={() => {
              setIsMobileMenuOpen(false);
              setIsSearchOpen(true);
            }}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
