import { ReactNode, useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import { AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

export default function Layout({ children, isSearchOpen, setIsSearchOpen }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when search modal is open
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        isScrolled={isScrolled} 
        setIsSearchOpen={setIsSearchOpen} 
      />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
      
      <AnimatePresence>
        {isSearchOpen && (
          <SearchModal 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
