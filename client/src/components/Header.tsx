import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { navItems } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${
        isScrolled ? "bg-background bg-opacity-90 shadow-lg backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-poppins font-bold">
            <Link href="#">
              Gilber<span className="text-accent">.</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Phone Number - Always visible */}
            <div className="hidden md:block">
              <a 
                href="tel:+12130625-10" 
                className="text-white hover:text-accent transition-colors duration-300 text-sm font-medium"
              >
                +1 (213) 062-25-10
              </a>
            </div>
            
            {/* Search Button */}
            <button 
              className="p-2 text-white hover:text-accent transition-colors duration-300"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            {/* Hamburger Menu Toggle (Three Lines) */}
            <button 
              className="text-white p-2 focus:outline-none" 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle Navigation"
            >
              <div className="flex flex-col justify-center items-center space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
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
