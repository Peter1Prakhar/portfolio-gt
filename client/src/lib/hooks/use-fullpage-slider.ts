import { useState, useEffect, useRef, useCallback, MutableRefObject } from 'react';

export function useFullpageSlider(
  totalSections: number,
  containerRef: MutableRefObject<HTMLDivElement | null>,
  initialSectionId: string = 'home'
) {
  // Create refs for all sections
  const sectionsRefs = Array.from({ length: totalSections }).map(() => useRef<HTMLDivElement>(null));
  
  // Map section indices to their IDs
  const [sectionIds, setSectionIds] = useState<string[]>([]);
  
  // Track the currently active section index
  const [currentSection, setCurrentSection] = useState(0);
  
  // Flag to prevent rapid scrolling
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Map section IDs to their indices
  useEffect(() => {
    const ids = sectionsRefs.map(ref => ref.current?.id || '');
    setSectionIds(ids);
    
    // Set initial section based on ID
    const initialIndex = ids.findIndex(id => id === initialSectionId);
    if (initialIndex >= 0) {
      setCurrentSection(initialIndex);
    }
  }, [initialSectionId, sectionsRefs]);
  
  // Function to change the active section
  const goToSection = useCallback((index: number) => {
    if (isAnimating || index === currentSection || index < 0 || index >= totalSections) return;
    
    setIsAnimating(true);
    setCurrentSection(index);
    
    // Prevent rapid scrolling by setting a timeout
    setTimeout(() => {
      setIsAnimating(false);
    }, 800); // Match the transition duration from CSS
  }, [currentSection, isAnimating, totalSections]);
  
  // Handle mouse wheel events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;
      
      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        // Scroll down
        goToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        goToSection(currentSection - 1);
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSection, goToSection, isAnimating, containerRef, totalSections]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;
      
      if (e.key === 'ArrowDown' && currentSection < totalSections - 1) {
        goToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        goToSection(currentSection - 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, goToSection, isAnimating, totalSections]);
  
  // Handle touch events for mobile swipe navigation
  useEffect(() => {
    let touchStartY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (isAnimating) return;
      
      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      // Check if the swipe is significant enough (at least 50px)
      if (Math.abs(diff) < 50) return;
      
      if (diff > 0 && currentSection < totalSections - 1) {
        // Swipe up - go to next section
        goToSection(currentSection + 1);
      } else if (diff < 0 && currentSection > 0) {
        // Swipe down - go to previous section
        goToSection(currentSection - 1);
      }
      
      // Reset touch start position
      touchStartY = touchEndY;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [currentSection, goToSection, isAnimating, containerRef, totalSections]);
  
  return {
    currentSection,
    goToSection,
    sectionsRefs,
    sectionIds,
    isAnimating
  };
}
