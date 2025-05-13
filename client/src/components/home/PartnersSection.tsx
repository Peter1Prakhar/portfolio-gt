import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { partnerLogos } from '@/lib/utils';

interface PartnersSectionProps {
  id: string;
}

export default function PartnersSection({ id }: PartnersSectionProps) {
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
      <div className="container mx-auto px-8 md:px-16 h-full flex flex-col justify-center">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-inter font-medium mb-3 block">
            PARTNERS
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white leading-tight">
            Trusted by top companies
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-16">
          {partnerLogos.map((logo, index) => (
            <motion.div 
              key={index}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { 
                opacity: 0.7, 
                y: 0, 
                transition: { delay: 0.1 * index, duration: 0.5 } 
              } : { opacity: 0, y: 20 }}
              whileHover={{ opacity: 1 }}
            >
              <img 
                src={logo} 
                alt={`Partner logo ${index + 1}`} 
                className="w-32 h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
