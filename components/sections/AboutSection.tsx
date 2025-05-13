import { motion } from 'framer-motion';

interface AboutSectionProps {
  id: string;
}

interface Skill {
  name: string;
  percentage: number;
}

export default function AboutSection({ id }: AboutSectionProps) {
  const skills: Skill[] = [
    { name: 'Gaming Industry Knowledge', percentage: 98 },
    { name: 'Product Management', percentage: 95 },
    { name: 'Business Development', percentage: 90 },
    { name: 'Data Analytics', percentage: 88 },
    { name: 'E-Sports & Community Building', percentage: 85 },
  ];

  return (
    <section id={id} className="min-h-screen flex items-center bg-background py-24 px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-6">
              About Me
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                I'm a visionary gaming entrepreneur with over 7 years of expertise in the gaming industry, focusing on product management, e-sports development, and gaming community building.
              </p>
              <p>
                I've developed innovative gaming platforms that connect players and enhance gaming experiences. With a deep understanding of player engagement mechanics and monetization strategies, I create solutions that benefit both gamers and businesses.
              </p>
              <p>
                As Founder & CEO of GAMERS TAG, I lead with innovation and strategic vision, creating solutions that make a meaningful impact in the gaming industry while fostering inclusive and vibrant gaming communities.
              </p>
            </div>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center px-6 py-3 bg-accent text-black font-medium rounded-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-syne font-bold text-white mb-6">
              My Skills
            </h3>
            
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-accent">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-muted rounded-sm">
                <h4 className="text-3xl font-syne font-bold text-accent mb-2">7+</h4>
                <p className="text-text-secondary">Years in Gaming Industry</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-sm">
                <h4 className="text-3xl font-syne font-bold text-accent mb-2">25+</h4>
                <p className="text-text-secondary">Gaming Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}