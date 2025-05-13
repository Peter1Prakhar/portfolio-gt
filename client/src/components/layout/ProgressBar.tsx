import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentSection: number;
  totalSections: number;
}

export default function ProgressBar({ currentSection, totalSections }: ProgressBarProps) {
  const progress = (currentSection / (totalSections - 1)) * 100;
  
  return (
    <div className="progress-bar">
      <motion.span
        initial={{ height: 0 }}
        animate={{ height: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
