import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    content: "Working with Gilber was an amazing experience. His design skills and attention to detail transformed our product and helped us achieve our business goals.",
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    content: "Gilber's approach to design thinking and problem-solving is remarkable. He delivered a user interface that exceeded our expectations and delighted our customers.",
    name: "David Chen",
    position: "Product Director, InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    content: "We hired Gilber to redesign our entire platform, and the results were outstanding. His strategic vision and technical expertise made all the difference.",
    name: "Emily Rodriguez",
    position: "CMO, GlobalBrand",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

const TestimonialsSection = () => {
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
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative bg-background h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-background"></div>
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
            <h6 className="text-primary uppercase tracking-wider font-medium mb-4">Client Feedback</h6>
            <h2 className="text-4xl md:text-5xl font-montserrat font-semibold">Testimonials</h2>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-[#1E1E1E] p-8 rounded-lg"
                variants={itemVariants}
              >
                <div className="text-primary mb-6">
                  <FaQuoteLeft className="text-3xl" />
                </div>
                <p className="text-white/80 mb-8">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.name} portrait`} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h5 className="text-white font-medium">{testimonial.name}</h5>
                    <p className="text-white/60 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
