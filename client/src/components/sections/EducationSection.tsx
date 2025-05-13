import { motion } from 'framer-motion';

const education = [
  {
    id: 1,
    degree: 'Master in UI/UX Design',
    period: '2014 - 2016',
    institution: 'California Design Institute'
  },
  {
    id: 2,
    degree: 'Bachelor in Graphic Design',
    period: '2010 - 2014',
    institution: 'New York University of Arts'
  },
  {
    id: 3,
    degree: 'Certified Web Developer',
    period: '2009 - 2010',
    institution: 'Tech Academy of San Francisco'
  }
];

const skills = [
  { id: 1, name: 'UI/UX Design', percentage: 95 },
  { id: 2, name: 'Web Development', percentage: 80 },
  { id: 3, name: 'Graphic Design', percentage: 90 },
  { id: 4, name: 'Motion Design', percentage: 75 }
];

const EducationSection = () => {
  return (
    <section className="relative bg-background h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1E1E1E]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-5"></div>
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
            <h6 className="text-primary uppercase tracking-wider font-medium mb-4">Education & Skills</h6>
            <h2 className="text-4xl md:text-5xl font-montserrat font-semibold">My Background</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    className="relative pl-8 border-l border-[rgba(255,255,255,0.05)]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary transform -translate-x-1.5"></div>
                    <h4 className="text-xl font-medium mb-1">{item.degree}</h4>
                    <p className="text-primary mb-2">{item.period}</p>
                    <p className="text-white/60">{item.institution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-primary">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-1 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
