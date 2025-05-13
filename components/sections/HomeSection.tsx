import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HomeSectionProps {
  id: string;
  onScrollDown: () => void;
}

export default function HomeSection({ id, onScrollDown }: HomeSectionProps) {
  return (
    <section id={id} className="h-screen flex items-center relative bg-background px-8 lg:px-16">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-syne font-bold text-white leading-tight">
            Hello, I'm <span className="text-accent">Alex Gilbert.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mt-4 mb-8">
            Senior UI/UX Designer & Frontend Developer based in New York
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-accent text-black font-medium rounded-sm"
              onClick={(e) => {
                e.preventDefault();
                // Would need to navigate to the contact section
              }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-sm hover:border-white/50 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // Would need to navigate to the portfolio section
              }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="ken-burn-bg">
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 z-0"></div>
        
        {/* Background image would go here */}
        <div className="absolute inset-0 z-[-1] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        onClick={onScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}