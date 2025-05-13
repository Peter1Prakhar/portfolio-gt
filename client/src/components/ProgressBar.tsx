import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface ProgressBarProps {
  totalSections: number;
  currentSection: number;
}

const ProgressBar = ({ totalSections, currentSection }: ProgressBarProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const progress = ((currentSection + 1) / totalSections) * 100;
    controls.start({ width: `${progress}%` });
  }, [currentSection, totalSections, controls]);

  return (
    <div className="fixed bottom-8 left-8 right-8 h-px bg-white/20 z-40">
      <motion.div
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={controls}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ProgressBar;
