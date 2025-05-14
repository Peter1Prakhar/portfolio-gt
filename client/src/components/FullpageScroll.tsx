import { useState, useEffect, ReactNode, Children, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../lib/data";

interface FullpageScrollProps {
  children: ReactNode[];
}

// Create a context to share the current section index
export const CurrentSectionContext = createContext<{
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}>({
  currentIndex: 0,
  setCurrentIndex: () => {}
});

export const useCurrentSection = () => useContext(CurrentSectionContext);

export default function FullpageScroll({ children }: FullpageScrollProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for down, -1 for up
  const [isAnimating, setIsAnimating] = useState(false);
  const numSections = Children.count(children);
  
  // Get all children as an array
  const childrenArray = Children.toArray(children);
  
  // Handle wheel event for scrolling
  const handleWheel = (e: WheelEvent) => {
    // Prevent default scrolling
    e.preventDefault();
    
    if (isAnimating) return;
    
    if (e.deltaY > 0 && currentIndex < numSections - 1) {
      // Scrolling down
      setDirection(1);
      setIsAnimating(true);
      setCurrentIndex(prev => prev + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      // Scrolling up
      setDirection(-1);
      setIsAnimating(true);
      setCurrentIndex(prev => prev - 1);
    }
  };
  
  // Handle keyboard events
  const handleKeyDown = (e: KeyboardEvent) => {
    if (isAnimating) return;
    
    if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentIndex < numSections - 1) {
      setDirection(1);
      setIsAnimating(true);
      setCurrentIndex(prev => prev + 1);
    } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentIndex > 0) {
      setDirection(-1);
      setIsAnimating(true);
      setCurrentIndex(prev => prev - 1);
    }
  };
  
  // Set up event listeners
  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isAnimating]);
  
  // Handle animation complete
  const handleAnimationComplete = () => {
    setIsAnimating(false);
    setDirection(0);
  };
  
  // Update URL hash when section changes
  useEffect(() => {
    if (currentIndex === 0) {
      window.history.pushState(null, "", "#");
    } else {
      const sectionHash = navItems[currentIndex].path;
      window.history.pushState(null, "", sectionHash);
    }
  }, [currentIndex]);
  
  // Listen for hash changes in the URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#";
      const matchingNavItem = navItems.find(item => item.path === hash);
      
      if (matchingNavItem && matchingNavItem.sectionIndex !== currentIndex) {
        setDirection(matchingNavItem.sectionIndex > currentIndex ? 1 : -1);
        setCurrentIndex(matchingNavItem.sectionIndex);
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    
    // Check hash on initial load
    handleHashChange();
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  
  return (
    <CurrentSectionContext.Provider value={{ currentIndex, setCurrentIndex }}>
      <div className="h-screen overflow-hidden fixed inset-0 w-full">
        {/* Current section (always visible as the base) */}
        <div className="absolute inset-0 w-full h-screen">
          {childrenArray[currentIndex]}
        </div>
        
        {/* Scroll Down - Page Y slides up to reveal page Z underneath */}
        {direction === 1 && currentIndex > 0 && (
          <motion.div
            key={`scroll-down-from-${currentIndex-1}-to-${currentIndex}`}
            className="absolute inset-0 w-full h-screen bg-background z-10"
            style={{ boxShadow: '0 -8px 30px rgba(255, 0, 0, 0.1)' }}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            onAnimationComplete={handleAnimationComplete}
          >
            {childrenArray[currentIndex - 1]} {/* Show page Y sliding up */}
          </motion.div>
        )}
        
        {/* Scroll Up - The upper page (X) slides down to cover current page (Y) */}
        {direction === -1 && currentIndex > 0 && (
          <motion.div
            key={`scroll-up-from-${currentIndex+1}-to-${currentIndex}`}
            className="absolute inset-0 w-full h-screen bg-background z-10"
            style={{ boxShadow: '0 8px 30px rgba(255, 0, 0, 0.1)' }}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            onAnimationComplete={handleAnimationComplete}
          >
            {childrenArray[currentIndex - 1]} {/* Show page X sliding down */}
          </motion.div>
        )}
        
        {/* Vertical line navigation indicator */}
        <div className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50">
          {/* Large background white line - taller, thinner and more white */}
          <div className="w-[2px] h-[500px] bg-white/70 relative rounded-full">
            {/* Red progress overlay */}
            <div 
              className="absolute top-0 left-0 w-full rounded-full bg-accent transition-all duration-700 ease-in-out"
              style={{ 
                height: `${(currentIndex / (numSections - 1)) * 100}%`,
                boxShadow: '0 0 12px rgba(255, 0, 0, 0.6)'
              }}
            />
            
            {/* Clickable areas for each section */}
            <div className="absolute top-0 left-0 w-full h-full">
              {Array.from({ length: numSections }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== currentIndex) {
                      // Set direction based on target index
                      setDirection(index > currentIndex ? 1 : -1);
                      setIsAnimating(true);
                      setCurrentIndex(index);
                    }
                  }}
                  className="absolute w-10 h-10 -left-4 transform -translate-y-1/2 cursor-pointer"
                  style={{ top: `${(index / (numSections - 1)) * 100}%` }}
                  aria-label={`Go to section ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CurrentSectionContext.Provider>
  );
}