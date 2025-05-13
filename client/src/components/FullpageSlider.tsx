import { useRef, useEffect, useState, ReactNode } from 'react';
import { useFullpageSlider } from '@/lib/hooks/use-fullpage-slider';
import SectionPagination from './SectionPagination';
import ProgressBar from './ProgressBar';

interface FullpageSliderProps {
  children: ReactNode[];
  onSectionChange: (section: string) => void;
  initialSection?: string;
}

const FullpageSlider = ({ children, onSectionChange, initialSection = 'home' }: FullpageSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { 
    currentSection, 
    goToSection, 
    sectionsRefs,
    sectionIds
  } = useFullpageSlider(children.length, sliderRef, initialSection);

  useEffect(() => {
    if (sectionIds[currentSection]) {
      onSectionChange(sectionIds[currentSection]);
    }
  }, [currentSection, onSectionChange, sectionIds]);

  return (
    <div ref={sliderRef} className="relative h-screen overflow-hidden">
      {children.map((child, index) => (
        <div 
          key={index}
          ref={sectionsRefs[index]}
          id={sectionIds[index] || `section-${index}`}
          className={`fullpage-section absolute top-0 left-0 w-full h-screen ${
            currentSection === index ? 'section-active' : ''
          }`}
          style={{
            transform: `translateY(${(index - currentSection) * 100}vh)`,
            zIndex: currentSection === index ? 10 : 0
          }}
        >
          {child}
        </div>
      ))}

      <SectionPagination 
        totalSections={children.length} 
        activeSection={currentSection} 
        onSectionChange={goToSection} 
      />
      
      <ProgressBar 
        totalSections={children.length} 
        currentSection={currentSection} 
      />
    </div>
  );
};

export default FullpageSlider;
