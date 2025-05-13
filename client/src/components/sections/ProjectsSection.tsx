import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Finance Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    link: '#'
  },
  {
    id: 2,
    title: 'Fitness Mobile App',
    category: 'App Design',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    link: '#'
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    link: '#'
  }
];

const ProjectsSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative bg-background h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-8 h-screen flex items-center">
        <div className="w-full">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="text-primary uppercase tracking-wider font-medium mb-4">Latest Works</h6>
            <h2 className="text-4xl md:text-5xl font-montserrat font-semibold">Featured Projects</h2>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="project-card bg-[#1E1E1E] rounded-lg overflow-hidden"
                variants={itemVariants}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="overlay absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center">
                    <a 
                      href={project.link}
                      className="px-4 py-2 border border-white text-white text-sm hover:bg-white hover:text-primary transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-white/60 text-sm mb-4">{project.category}</p>
                  <a 
                    href={project.link}
                    className="text-primary text-sm flex items-center group"
                  >
                    View Details
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
