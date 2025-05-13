import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaComments } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: '10 UI Design Principles You Should Know',
    excerpt: 'Essential design principles that every UI/UX designer needs to master to create exceptional user experiences.',
    date: 'March 15, 2023',
    comments: 24,
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450',
    link: '#'
  },
  {
    id: 2,
    title: 'The Best Design Tools of 2023',
    excerpt: 'A comprehensive review of the latest design tools that are transforming the way professionals work.',
    date: 'February 28, 2023',
    comments: 18,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450',
    link: '#'
  },
  {
    id: 3,
    title: 'Building a Design Portfolio That Stands Out',
    excerpt: 'Tips and strategies for creating a portfolio that showcases your skills and attracts potential clients.',
    date: 'January 10, 2023',
    comments: 32,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450',
    link: '#'
  }
];

const BlogSection = () => {
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
        <div className="absolute inset-0 bg-[#1E1E1E]"></div>
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
            <h6 className="text-primary uppercase tracking-wider font-medium mb-4">Latest News</h6>
            <h2 className="text-4xl md:text-5xl font-montserrat font-semibold">From The Blog</h2>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map((post) => (
              <motion.div 
                key={post.id}
                className="bg-background rounded-lg overflow-hidden shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-white/40 text-sm mb-3">
                    <span className="mr-4 flex items-center">
                      <FaCalendarAlt className="mr-1" /> {post.date}
                    </span>
                    <span className="flex items-center">
                      <FaComments className="mr-1" /> {post.comments} Comments
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{post.title}</h4>
                  <p className="text-white/60 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <a 
                    href={post.link} 
                    className="text-primary text-sm flex items-center group"
                  >
                    Read More
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
