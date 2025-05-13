import { motion } from 'framer-motion';
import { experiences } from '../../client/src/lib/utils';

interface EducationSectionProps {
  id: string;
}

export default function EducationSection({ id }: EducationSectionProps) {
  return (
    <section id={id} className="min-h-screen bg-muted py-24 px-8 lg:px-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-4">
            Education & Experience
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            My academic background and professional journey that shaped my skills and expertise in design and development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-2xl font-syne font-bold text-white mb-6 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-accent">
                Education
              </h3>
            </motion.div>
            
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-white/10"
              >
                <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-accent transform -translate-x-[3px]"></span>
                <div className="bg-background p-6 rounded-sm">
                  <span className="text-accent text-sm">2018 - 2022</span>
                  <h4 className="text-white font-syne font-semibold text-xl mt-1 mb-2">
                    B.Sc in Business Administration
                  </h4>
                  <p className="text-text-secondary">
                    University of Cambridge, UK
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-white/10"
              >
                <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-accent transform -translate-x-[3px]"></span>
                <div className="bg-background p-6 rounded-sm">
                  <span className="text-accent text-sm">2008 - 2010</span>
                  <h4 className="text-white font-syne font-semibold text-xl mt-1 mb-2">
                    Associate in Arts
                  </h4>
                  <p className="text-text-secondary">
                    Manhattan Community College
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-white/10"
              >
                <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-accent transform -translate-x-[3px]"></span>
                <div className="bg-background p-6 rounded-sm">
                  <span className="text-accent text-sm">2015</span>
                  <h4 className="text-white font-syne font-semibold text-xl mt-1 mb-2">
                    UX Design Certification
                  </h4>
                  <p className="text-text-secondary">
                    Google UX Design Professional Certificate
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-2xl font-syne font-bold text-white mb-6 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-accent">
                Experience
              </h3>
            </motion.div>
            
            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-white/10"
                >
                  <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-accent transform -translate-x-[3px]"></span>
                  <div className="bg-background p-6 rounded-sm">
                    <span className="text-accent text-sm">{experience.period}</span>
                    <h4 className="text-white font-syne font-semibold text-xl mt-1 mb-2">
                      {experience.title}
                    </h4>
                    <p className="text-text-secondary mb-3">
                      {experience.company}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {experience.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}