import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  isScrolled: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

export default function Header({ isScrolled, setIsSearchOpen }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-background bg-opacity-90 shadow-lg backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-poppins font-bold ml-20 md:ml-10">
            <Link href="#">
              Gilber<span className="text-accent">.</span>
            </Link>
          </div>
          
          {/* Hamburger Menu Toggle (Three Lines) */}
          <button 
            className="text-white focus:outline-none mr-6" 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle Navigation"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M3 6H21" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                d="M3 12H21" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                d="M3 18H21" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
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
