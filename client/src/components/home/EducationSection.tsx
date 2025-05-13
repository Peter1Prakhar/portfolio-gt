import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { experiences } from '@/lib/utils';

interface EducationSectionProps {
  id: string;
}

export default function EducationSection({ id }: EducationSectionProps) {
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
      <div className="container mx-auto px-8 md:px-16 h-full">
        <div className="flex flex-col md:flex-row h-full items-center">
          <motion.div 
            className="md:w-2/5 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-inter font-medium mb-3 block">
              EDUCATION & EXPERIENCE
            </span>
            <h2 className="text-4xl md:text-5xl font-syne font-bold text-white leading-tight mb-8">
              My Professional <br/>Journey
            </h2>
            <p className="text-text-secondary">
              My academic background and professional career have given me a strong foundation 
              in design thinking, user experience, and product development.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5 md:pl-16"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div 
                  key={experience.id}
                  className={`relative pl-12 ${
                    index === experiences.length - 1 ? '' : 'pb-10 border-l border-white/10'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: 0.2 + (index * 0.1), duration: 0.4 } 
                  } : { opacity: 0, y: 20 }}
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                  <div>
                    <span className="text-accent">{experience.period}</span>
                    <h3 className="text-xl text-white font-syne font-semibold mt-2 mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-text-secondary">
                      {experience.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
