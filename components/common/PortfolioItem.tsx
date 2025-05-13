import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
    <motion.div 
      className="group relative overflow-hidden rounded-sm"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-accent text-sm block mb-2">{project.category}</span>
          <h3 className="text-white font-syne font-semibold text-xl mb-4">
            {project.title}
          </h3>
          <Link href={project.link} passHref>
            <a 
              className="inline-flex items-center text-white hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <ExternalLink size={16} className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}