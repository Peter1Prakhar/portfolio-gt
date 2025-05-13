import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export default function Testimonials() {
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

  return (
    <section className="py-24 bg-background">
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
            Client Testimonials
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-muted max-w-2xl mx-auto"
          >
            What clients say about working with me on their design projects.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={itemVariants}
              className="bg-secondary p-8 rounded-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 inline-block" fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-muted mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-muted text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
