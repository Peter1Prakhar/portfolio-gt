import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { blogPosts } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Blog() {
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
    <section id="articles" className="py-24 bg-background">
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
            Articles & News
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-muted max-w-2xl mx-auto"
          >
            My research publications, insights on data science, and business technology trends.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              variants={itemVariants}
              className="group bg-secondary rounded-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold font-poppins mb-3 group-hover:text-accent transition-colors duration-300">
                  <a href={`#blog/${post.slug}`}>{post.title}</a>
                </h3>
                <p className="text-muted mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a href={`#blog/${post.slug}`} className="inline-flex items-center text-accent font-medium hover:text-white transition-colors duration-300">
                  <span>Read More</span>
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
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
}
