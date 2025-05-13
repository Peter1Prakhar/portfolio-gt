import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { timelineData } from "@/lib/data";

export default function Education() {
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
        staggerChildren: 0.2
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

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
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
              Education & Experience
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="text-muted max-w-2xl mx-auto"
            >
              My academic background and professional journey that has shaped my expertise.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="space-y-8"
          >
            {timelineData.map((item, index) => (
              <motion.div 
                key={item.id}
                className="relative pl-8 border-l border-accent"
                variants={itemVariants}
              >
                <motion.div 
                  className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-accent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                ></motion.div>
                <div className="pb-8">
                  <p className="text-accent text-sm font-medium mb-1">{item.period}</p>
                  <h3 className="text-xl font-bold font-poppins mb-2">{item.title}</h3>
                  <p className="text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
