import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface HomeSectionProps {
  id: string;
}

export default function HomeSection({ id }: HomeSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  return (
    <section 
      className="section flex items-center" 
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {/* Background image with ken burns effect */}
      <div className="ken-burn-bg">
        <img 
          src="https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920&h=1080" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-8 md:px-16 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="md:pr-10">
              <span className="text-white font-inter font-light mb-2 block">
                Founder & CEO
              </span>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-syne font-bold text-white leading-tight mb-8">
                Joshua<span className="text-accent">.</span>
              </h1>
              <p className="text-text-secondary text-lg md:max-w-xl mb-10">
                Visionary entrepreneur with expertise in Product management, Business development, 
                and Marketing. Creating world-class products at GAMERS TAG.
              </p>
              <div className="flex">
                <motion.a 
                  href="#"
                  className="flex items-center justify-center w-16 h-16 rounded-full border border-white/20 text-white hover:bg-accent hover:border-accent transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Play intro video"
                >
                  <Play size={20} fill="currentColor" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
