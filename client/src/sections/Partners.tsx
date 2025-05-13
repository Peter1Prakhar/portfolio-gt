import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { partners } from "@/lib/data";

export default function Partners() {
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
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-poppins font-bold mb-4"
          >
            Trusted Partners
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-muted max-w-2xl mx-auto"
          >
            Companies I've collaborated with on successful design projects.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.id}
              variants={itemVariants}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
