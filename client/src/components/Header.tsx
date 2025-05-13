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
          <Link href="#">
            <a className="text-xl font-poppins font-bold">
              Gilber<span className="text-accent">.</span>
            </a>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.path} 
                    className={`text-${item.isActive ? 'accent' : 'white'} hover:text-accent transition-colors duration-300 text-sm uppercase font-medium`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Phone Number */}
          <div className="hidden md:block">
            <a 
              href="tel:+12130625-10" 
              className="text-white hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              +1 (213) 062-25-10
            </a>
          </div>
          
          {/* Search Button (Desktop) */}
          <button 
            className="hidden md:flex p-2 text-white hover:text-accent transition-colors duration-300"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle Navigation"
          >
            <Menu className="w-6 h-6" />
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
