import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div 
      className="bg-muted rounded-sm overflow-hidden h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <span className="text-accent text-sm">{post.category}</span>
        <h3 className="text-white font-syne font-semibold text-xl mt-2 mb-3">
          {post.title}
        </h3>
        <p className="text-text-secondary line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-text-secondary text-sm">{post.date}</span>
          <Link href={`/blog/${post.id}`}>
            <a className="text-white hover:text-accent transition-colors duration-300">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}