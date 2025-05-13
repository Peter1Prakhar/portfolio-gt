import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

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
      onClose();
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-background/95 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            className="absolute top-8 right-8 text-white"
            onClick={onClose}
            aria-label="Close contact form"
          >
            <X size={24} />
          </button>
          
          <motion.div
            className="w-full max-w-3xl bg-muted p-8 md:p-12 mx-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h2 className="text-3xl font-syne font-bold text-white mb-6">
              Get in Touch
            </h2>
            
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input 
                    type="text" 
                    className={`w-full bg-background border ${errors.name ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-accent focus:outline-none`}
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <input 
                    type="email" 
                    className={`w-full bg-background border ${errors.email ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-accent focus:outline-none`}
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
                <textarea 
                  rows={5} 
                  className={`w-full bg-background border ${errors.message ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-accent focus:outline-none resize-none`}
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
                {isSubmitting ? 'Sending...' : 'Post a Comment'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
