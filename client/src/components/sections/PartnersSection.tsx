import { motion } from 'framer-motion';
import { 
  FaApple, 
  FaGoogle, 
  FaMicrosoft, 
  FaAmazon, 
  FaSpotify, 
  FaSlack, 
  FaDropbox, 
  FaTwitch 
} from 'react-icons/fa';

const partners = [
  { id: 1, icon: FaApple, name: 'Apple' },
  { id: 2, icon: FaGoogle, name: 'Google' },
  { id: 3, icon: FaMicrosoft, name: 'Microsoft' },
  { id: 4, icon: FaAmazon, name: 'Amazon' },
  { id: 5, icon: FaSpotify, name: 'Spotify' },
  { id: 6, icon: FaSlack, name: 'Slack' },
  { id: 7, icon: FaDropbox, name: 'Dropbox' },
  { id: 8, icon: FaTwitch, name: 'Twitch' }
];

const PartnersSection = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="relative bg-background h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background"></div>
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
            <h6 className="text-primary uppercase tracking-wider font-medium mb-4">Trusted By</h6>
            <h2 className="text-4xl md:text-5xl font-montserrat font-semibold">Partners & Clients</h2>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner) => {
              const Icon = partner.icon;
              return (
                <motion.div 
                  key={partner.id}
                  className="flex items-center justify-center p-6 bg-[#1E1E1E] rounded-lg"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-24 h-12 flex items-center justify-center text-white/40 hover:text-white transition-colors">
                    <Icon className="text-3xl" aria-label={partner.name} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              I'm proud to have collaborated with these industry-leading companies on projects that have delivered exceptional results and created measurable business impact.
            </p>
            <motion.a 
              href="#contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-sm font-medium hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Work With Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
