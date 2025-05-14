import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="journey" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80" 
                alt="Joshua Kanatt professional portrait" 
                className="w-full h-auto rounded-lg" 
              />
              <div className="absolute -bottom-6 -right-6 p-6 bg-accent rounded-lg">
                <div className="text-center">
                  <span className="block text-4xl font-bold font-poppins">10+</span>
                  <span className="text-sm uppercase tracking-wider">Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div>
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-poppins font-bold mb-6"
            >
              My Journey
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="text-muted mb-8"
            >
              I am a business professional, data scientist, and educator with over 10 years of experience across multiple industries. With expertise in analyzing complex business problems, implementing data-driven solutions, and teaching advanced concepts to the next generation of professionals, I've contributed to numerous successful projects in fintech, healthcare, and retail sectors. My approach combines analytical rigor with practical business acumen to deliver impactful results that drive strategic growth.
            </motion.p>
            
            <motion.div 
              variants={containerVariants} 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            >
              {services.map((service) => (
                <motion.div key={service.id} variants={itemVariants}>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.a 
              variants={itemVariants}
              href="#contact" 
              className="inline-flex items-center text-accent font-medium hover:text-white transition-colors duration-300"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
