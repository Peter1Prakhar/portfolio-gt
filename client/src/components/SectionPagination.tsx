import { motion } from 'framer-motion';

interface SectionPaginationProps {
  totalSections: number;
  activeSection: number;
  onSectionChange: (index: number) => void;
}

const SectionPagination = ({ 
  totalSections, 
  activeSection, 
  onSectionChange 
}: SectionPaginationProps) => {
  return (
    <div className="pagination fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-4">
        {Array.from({ length: totalSections }).map((_, index) => (
          <motion.div
            key={index}
            className={`pagination-item ${activeSection === index ? 'active' : ''}`}
            onClick={() => onSectionChange(index)}
            initial={{ scale: 1 }}
            animate={{
              scale: activeSection === index ? 1.2 : 1,
              backgroundColor: activeSection === index ? 'hsl(var(--primary))' : 'rgba(255, 255, 255, 0.2)'
            }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionPagination;
