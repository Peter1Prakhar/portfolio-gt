import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../client/src/lib/utils';
import PortfolioItem from '../common/PortfolioItem';

interface ProjectsSectionProps {
  id: string;
}

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', ...new Set(projects.map(project => project.category.toLowerCase()))];
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === activeCategory);

  return (
    <section id={id} className="min-h-screen bg-background py-24 px-8 lg:px-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore my portfolio of design and development projects. Each project represents my dedication to creating exceptional digital experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-sm border ${
                activeCategory === category
                  ? 'border-accent text-accent'
                  : 'border-white/10 text-text-secondary hover:text-white hover:border-white/30'
              } transition-colors capitalize`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <PortfolioItem project={project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-6">
            Interested in working together? Let's build something amazing.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-accent text-black font-medium rounded-sm"
            onClick={(e) => {
              e.preventDefault();
              // Navigate to contact section
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}