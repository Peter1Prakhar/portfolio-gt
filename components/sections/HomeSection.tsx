import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { useLanguage } from '../../client/src/contexts/LanguageContext';

interface HomeSectionProps {
  id: string;
  onScrollDown: () => void;
}

export default function HomeSection({ id, onScrollDown }: HomeSectionProps) {
  const { t } = useLanguage();

  return (
    <section id={id} className="h-screen flex flex-col justify-center relative bg-background">
      <div className="container mx-auto relative z-10 px-8 flex flex-col h-full">
        <div className="flex-grow flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left content - text, title, play button */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-base text-white/80 mb-2">Product Designer</p>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-syne font-bold text-white leading-tight mb-3">
                  Gilber<span className="text-accent">.</span>
                </h1>
                
                <p className="text-base text-white/80 mt-2 max-w-lg">
                  Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage.
                </p>
                
                <div className="mt-10 mb-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center group"
                  >
                    <Play className="w-6 h-6 text-white fill-white group-hover:text-accent group-hover:fill-accent transition-colors" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            {/* Right content would be empty for the image background */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mb-8 text-xs text-white/50"
        >
          © Gilber, 2020
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <div className="absolute inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-70"></div>
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40"></div>
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