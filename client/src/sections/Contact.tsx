import { useEffect, useState, FormEvent } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean; message: string} | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would normally send the form data to your backend
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitResult({
        success: true,
        message: "Your message has been sent successfully. I'll get back to you soon!"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "There was an error sending your message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear result message after 5 seconds
      setTimeout(() => {
        setSubmitResult(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={containerVariants}>
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-poppins font-bold mb-6"
            >
              LETS GET IN TOUCH!
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="text-muted mb-8"
            >
              I WOULD LOVE TO HEAR FROM YOU. Whether you have a business proposition, collaboration idea, or just want to connect, feel free to reach out.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="text-accent mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins mb-1">Location</h3>
                  <p className="text-muted">Los Angeles, California, USA</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="text-accent mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins mb-1">Email</h3>
                  <p className="text-muted">hello@gilber.design</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="text-accent mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins mb-1">Phone</h3>
                  <p className="text-muted">+1 (213) 062-25-10</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-10">
              <h3 className="text-xl font-bold font-poppins mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors duration-300">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors duration-300">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={containerVariants}>
            <motion.form 
              variants={itemVariants} 
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {submitResult && (
                <div className={`p-4 rounded-lg ${submitResult.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                  {submitResult.message}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name*" 
                    required
                    className="w-full bg-background text-white px-4 py-3 border-b border-muted focus:border-accent focus:outline-none transition-colors duration-300 bg-opacity-50"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email*" 
                    required
                    className="w-full bg-background text-white px-4 py-3 border-b border-muted focus:border-accent focus:outline-none transition-colors duration-300 bg-opacity-50"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Mobile Number" 
                  required
                  className="w-full bg-background text-white px-4 py-3 border-b border-muted focus:border-accent focus:outline-none transition-colors duration-300 bg-opacity-50"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <textarea 
                  rows={4} 
                  name="message"
                  placeholder="Message" 
                  required
                  className="w-full bg-background text-white px-4 py-3 border-b border-muted focus:border-accent focus:outline-none transition-colors duration-300 bg-opacity-50"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="inline-block px-8 py-3 bg-accent text-white font-medium hover:bg-opacity-90 transition-colors duration-300 rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
