import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Projects() {
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
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 section-container">
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
            My Skills
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-muted max-w-2xl mx-auto"
          >
            These are my core professional skills developed through years of education and real-world experience.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-accent text-sm font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-bold font-poppins mb-2">{project.title}</h3>
                <a href={`#project/${project.slug}`} className="inline-flex items-center text-white font-medium hover:text-accent transition-colors duration-300">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="text-center mt-12"
        >
          <a href="#" className="inline-block px-8 py-3 border border-accent text-accent font-medium hover:bg-accent hover:text-white transition-colors duration-300 rounded-full">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
