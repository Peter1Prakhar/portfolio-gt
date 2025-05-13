import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  id: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, we would send this data to the server
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="section" 
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-8 md:px-16 h-full">
        <div className="flex flex-col md:flex-row h-full items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-inter font-medium mb-3 block">
              CONTACT
            </span>
            <h2 className="text-4xl md:text-5xl font-syne font-bold text-white leading-tight mb-8">
              Get in touch
            </h2>
            <p className="text-text-secondary mb-8">
              Have a project in mind or want to discuss a potential collaboration? 
              Feel free to reach out using the contact form or through the direct contact details below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-white font-syne font-semibold">Location</h3>
                  <p className="text-text-secondary">San Francisco, CA, USA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-white font-syne font-semibold">Phone</h3>
                  <p className="text-text-secondary">+1 (213) 05-25-10</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-white font-syne font-semibold">Email</h3>
                  <p className="text-text-secondary">hello@gilber-portfolio.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-16"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full bg-muted border ${errors.name ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-accent focus:outline-none`}
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full bg-muted border ${errors.email ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-accent focus:outline-none`}
                    placeholder="Your email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Please enter a valid email address'
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className={`w-full bg-muted border ${errors.subject ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-accent focus:outline-none`}
                  placeholder="Subject"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className={`w-full bg-muted border ${errors.message ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-accent focus:outline-none resize-none`}
                  placeholder="Your message"
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>
              
              <motion.button 
                type="submit" 
                className="bg-accent text-white py-3 px-8 font-medium hover:bg-accent/90 transition-colors duration-300 disabled:bg-accent/50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
