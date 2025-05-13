import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="relative bg-background h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background bg-opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-5"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-8 h-screen flex items-center">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <h6 className="text-primary uppercase tracking-wider font-medium mb-4">About Me</h6>
            <h2 className="text-4xl md:text-5xl font-montserrat font-semibold mb-6">Great Experience</h2>
            <p className="text-white/60 mb-4">
              I'm a product designer based in New York with over 10 years of professional experience. I specialize in interface design, solving user problems, and delivering seamless experiences.
            </p>
            <p className="text-white/60 mb-8">
              My approach combines strategic thinking with creative execution, resulting in products that not only look beautiful but also work intuitively.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white text-4xl font-semibold mb-2">10+</h4>
                <p className="text-white/60">Years of experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white text-4xl font-semibold mb-2">85+</h4>
                <p className="text-white/60">Projects completed</p>
              </motion.div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <motion.img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Professional portrait" 
              className="rounded-md w-full h-auto object-cover shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-[#1E1E1E] p-6 rounded-md shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Experience</p>
                  <p className="text-white/60 text-sm">10+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
