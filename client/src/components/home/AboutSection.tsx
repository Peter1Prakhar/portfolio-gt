import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AboutSectionProps {
  id: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.2 * custom, 
        duration: 0.5 
      } 
    })
  };

  const stats = [
    { number: '10+', text: 'Years of Experience' },
    { number: '250+', text: 'Projects Completed' },
    { number: '180+', text: 'Happy Clients' },
    { number: '42+', text: 'Awards Winning' },
  ];

  return (
    <section 
      className="section" 
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-8 md:px-16 h-full">
        <div className="flex flex-col md:flex-row items-center h-full">
          <motion.div 
            className="md:w-1/2 md:pr-16"
            custom={0}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            <span className="text-accent font-inter font-medium mb-3 block">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl font-syne font-bold text-white leading-tight mb-8">
              My professional <br/>path and experience
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                I'm a Product Designer based in San Francisco with over 10 years of experience in the industry. 
                I specialize in creating user-centered digital experiences that solve real-world problems.
              </p>
              <p>
                My approach combines analytical thinking with creative problem-solving to deliver intuitive 
                and beautiful designs that exceed client expectations.
              </p>
            </div>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a 
                href="#contact" 
                className="inline-block bg-accent text-white py-3 px-8 font-medium hover:bg-accent/90 transition-colors duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            custom={1}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-muted p-8 rounded-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: 0.3 + (index * 0.1), duration: 0.5 } 
                  } : { opacity: 0, y: 20 }}
                >
                  <h3 className="text-5xl font-syne font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-text-secondary">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
