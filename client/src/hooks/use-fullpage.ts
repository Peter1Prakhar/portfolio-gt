import { useState, useEffect, useCallback } from 'react';

type UseFullpageProps = {
  sectionIds: string[];
  onSectionChange?: (index: number) => void;
};

export function useFullpage({ sectionIds, onSectionChange }: UseFullpageProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const totalSections = sectionIds.length;

  const scrollToSection = useCallback((index: number) => {
    if (index >= 0 && index < totalSections && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(index);
      
      const targetSection = document.getElementById(sectionIds[index]);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
      
      if (onSectionChange) {
        onSectionChange(index);
      }
      
      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    }
  }, [isScrolling, totalSections, sectionIds, onSectionChange]);

  const nextSection = useCallback(() => {
    scrollToSection(currentSection + 1);
  }, [currentSection, scrollToSection]);

  const prevSection = useCallback(() => {
    scrollToSection(currentSection - 1);
  }, [currentSection, scrollToSection]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (!isScrolling) {
      if (e.deltaY > 0) {
        nextSection();
      } else {
        prevSection();
      }
    }
  }, [isScrolling, nextSection, prevSection]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      nextSection();
    } else if (e.key === 'ArrowUp') {
      prevSection();
    }
  }, [nextSection, prevSection]);

  const setActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY;
    
    sectionIds.forEach((id, index) => {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (
          scrollPosition >= sectionTop - sectionHeight * 0.3 &&
          scrollPosition < sectionTop + sectionHeight * 0.7
        ) {
          if (currentSection !== index) {
            setCurrentSection(index);
            if (onSectionChange) {
              onSectionChange(index);
            }
          }
        }
      }
    });
  }, [sectionIds, currentSection, onSectionChange]);

  useEffect(() => {
    // Only add wheel event listener on desktop
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (!isMobile) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', setActiveSection);
    
    // Initial check
    setActiveSection();
    
    return () => {
      if (!isMobile) {
        window.removeEventListener('wheel', handleWheel);
      }
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', setActiveSection);
    };
  }, [handleWheel, handleKeyDown, setActiveSection]);

  return {
    currentSection,
    scrollToSection,
    nextSection,
    prevSection,
    totalSections,
  };
}
