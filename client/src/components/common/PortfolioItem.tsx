import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

interface PortfolioItemProps {
  project: Project;
}

export default function PortfolioItem({ project }: PortfolioItemProps) {
  return (
    <div className="portfolio-item">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover aspect-square"
        loading="lazy"
      />
      <div className="portfolio-item-overlay">
        <div className="text-center p-6">
          <span className="text-accent text-sm font-medium">
            {project.category}
          </span>
          <h3 className="text-xl font-syne font-bold text-white mt-2">
            {project.title}
          </h3>
          <motion.a 
            href={project.link} 
            className="inline-block mt-4 text-white underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.a>
        </div>
      </div>
    </div>
  );
}
