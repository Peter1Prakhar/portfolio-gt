import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { blogPosts } from '@/lib/utils';
import BlogCard from '@/components/common/BlogCard';
import { Link } from 'wouter';

interface BlogSectionProps {
  id: string;
}

export default function BlogSection({ id }: BlogSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  return (
    <section 
      className="section" 
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-8 md:px-16 pt-28 h-full">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-inter font-medium mb-3 block">
            BLOG
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white leading-tight flex items-center justify-between">
            <span>Latest articles</span>
            <div 
              className="text-base font-normal text-accent hover:underline hidden md:block cursor-pointer"
              onClick={() => window.location.href = '/blog'}
            >
              View all posts
            </div>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { 
                opacity: 1, 
                y: 0, 
                transition: { delay: 0.1 * index, duration: 0.5 } 
              } : { opacity: 0, y: 30 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/blog">
            <a className="text-accent hover:underline">
              View all posts
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
