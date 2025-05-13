import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <section className="relative bg-background h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-5"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-8 h-screen flex items-center">
        <div className="w-full">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="text-primary uppercase tracking-wider font-medium mb-4">Get In Touch</h6>
            <h2 className="text-4xl md:text-5xl font-montserrat font-semibold">Contact Me</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-white/60 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#1E1E1E] flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Address</h5>
                    <p className="text-white/60">1234 Design Street, San Francisco, CA</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#1E1E1E] flex items-center justify-center mr-4">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Email</h5>
                    <p className="text-white/60">hello@gilber.design</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#1E1E1E] flex items-center justify-center mr-4">
                    <FaPhone className="text-primary" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Phone</h5>
                    <p className="text-white/60">+1 (213) 062-25-10</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      {...register("name", { required: "Name is required" })}
                      className={`w-full px-4 py-3 rounded-sm bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>}
                  </div>
                  <div className="w-full">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-sm bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    {...register("subject", { required: "Subject is required" })}
                    className={`w-full px-4 py-3 rounded-sm bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && <p className="mt-1 text-red-500 text-xs">{errors.subject.message}</p>}
                </div>
                <div>
                  <textarea 
                    rows={5} 
                    placeholder="Message" 
                    {...register("message", { required: "Message is required" })}
                    className={`w-full px-4 py-3 rounded-sm bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${errors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
                </div>
                <div>
                  <motion.button 
                    type="submit"
                    className="px-8 py-3 bg-primary text-white rounded-sm font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                  {submitSuccess && (
                    <p className="mt-3 text-green-500">Thank you! Your message has been sent successfully.</p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
