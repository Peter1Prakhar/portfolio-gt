import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentSection: number;
  totalSections: number;
}

export default function ProgressBar({ currentSection, totalSections }: ProgressBarProps) {
  const progressRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (progressRef.current) {
      const percentage = (currentSection / (totalSections - 1)) * 100;
      progressRef.current.style.height = `${percentage}%`;
    }
  }, [currentSection, totalSections]);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="progress-bar hidden lg:block"
    >
      <span ref={progressRef} className="progress-indicator"></span>
    </motion.div>
  );
}