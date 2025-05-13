import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { testimonials } from '@/lib/utils';
import TestimonialCard from '@/components/common/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsSectionProps {
  id: string;
}

export default function TestimonialsSection({ id }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  // Auto slide testimonials
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

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
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white leading-tight">
            What clients say
          </h2>
        </motion.div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full md:w-1/2 flex-shrink-0 px-3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-accent' : 'bg-white/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow Controls */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-muted/50 p-2 rounded-full text-white hover:bg-accent transition-colors duration-300"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-muted/50 p-2 rounded-full text-white hover:bg-accent transition-colors duration-300"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
