import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const HomeSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="ken-burn-bg absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-8 h-screen flex items-center">
        <div className="max-w-xl">
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h5 className="text-white/60 mb-2">Product Designer</h5>
            <h1 className="text-7xl md:text-8xl font-montserrat font-bold mb-4">
              Gilber<span className="text-primary">.</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p className="text-white/60 text-lg max-w-md mb-8">
              Working with client and community, we deliver projects that create vibrant new spaces and support, attract people, and encourage investment through...
            </p>
            <motion.button 
              className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:border-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Play introduction video"
            >
              <FaPlay className="text-white" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
