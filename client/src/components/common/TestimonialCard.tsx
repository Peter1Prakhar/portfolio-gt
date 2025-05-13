import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-muted p-8 md:p-12 rounded-sm h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-8">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="text-white font-syne font-semibold">{testimonial.name}</h3>
          <p className="text-text-secondary text-sm">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-text-secondary">{testimonial.text}</p>
    </motion.div>
  );
}
