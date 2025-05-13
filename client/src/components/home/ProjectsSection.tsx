import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { projects } from '@/lib/utils';
import PortfolioItem from '@/components/common/PortfolioItem';

interface ProjectsSectionProps {
  id: string;
}

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  return (
    <section 
      className="section" 
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-8 md:px-16 pt-28 h-full">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-inter font-medium mb-3 block">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white leading-tight">
            Recent work
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  delay: 0.1 * (index % 3), 
                  duration: 0.5 
                } 
              } : { opacity: 0, y: 30 }}
            >
              <PortfolioItem project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
