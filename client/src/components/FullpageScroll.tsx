import { useState, useEffect, ReactNode, Children, cloneElement, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FullpageScrollProps {
  children: ReactNode[];
}

export default function FullpageScroll({ children }: FullpageScrollProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const numSections = Children.count(children);
  
  // Handle wheel event for scrolling
  const handleWheel = (e: WheelEvent) => {
    // Prevent default scrolling
    e.preventDefault();
    
    if (isAnimating) return;
    
    if (e.deltaY > 0 && currentIndex < numSections - 1) {
      // Scrolling down
      setIsAnimating(true);
      setCurrentIndex(prev => prev + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      // Scrolling up
      setIsAnimating(true);
      setCurrentIndex(prev => prev - 1);
    }
  };
  
  // Handle keyboard events
  const handleKeyDown = (e: KeyboardEvent) => {
    if (isAnimating) return;
    
    if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentIndex < numSections - 1) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev + 1);
    } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentIndex > 0) {
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
  
  // Animation variants for the shutter effect
  const pageVariants = {
    // Next page coming from below
    enter: {
      y: "100%",
      transition: { 
        duration: 0.9,
        ease: [0.25, 1, 0.5, 1] // Custom easing for a more dramatic effect
      }
    },
    // Current page in view
    center: {
      y: 0,
      transition: { 
        duration: 0.9,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    // Current page sliding up to reveal next page
    exit: {
      y: "-100%",
      transition: { 
        duration: 0.9,
        ease: [0.25, 1, 0.5, 1]
      }
    },
  };
  
  // Handle animation complete
  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };
  
  return (
    <div className="h-screen overflow-hidden fixed inset-0 w-full">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-screen bg-background"
          style={{
            boxShadow: '0 -8px 30px rgba(255, 0, 0, 0.1)'
          }}
          onAnimationComplete={handleAnimationComplete}
        >
          {/* Render only the current section without additional props */}
          {Children.map(children, (child, index) => {
            if (index === currentIndex) {
              return child;
            }
            return null;
          })}
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
        {Array.from({ length: numSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setIsAnimating(true);
                setCurrentIndex(index);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent w-4 h-4 shadow-[0_0_10px_rgba(255,0,0,0.7)]' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}