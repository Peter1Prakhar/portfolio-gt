import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { blogPosts } from '../../client/src/lib/utils';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = searchQuery
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;

  return (
    <>
      <Head>
        <title>Blog - Gilber</title>
        <meta name="description" content="Read the latest articles about design, UX, and product development." />
        <meta property="og:title" content="Blog - Gilber" />
        <meta property="og:description" content="Read the latest articles about design, UX, and product development." />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-background">
        <header className="pt-8 pb-4 px-8 lg:px-16">
          <div className="container mx-auto">
            <Link href="/">
              <a className="text-white font-syne font-bold text-2xl">
                Gilber<span className="text-accent">.</span>
              </a>
            </Link>
          </div>
        </header>
        
        <main className="px-8 lg:px-16 py-16">
          <div className="container mx-auto">
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <Link href="/">
                  <a className="flex items-center text-text-secondary hover:text-white transition-colors duration-300 mr-4">
                    <ChevronLeft size={20} />
                    <span>Back to Home</span>
                  </a>
                </Link>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-syne font-bold text-white leading-tight mb-6">
                  Blog
                </h1>
                <p className="text-text-secondary text-lg max-w-2xl">
                  Explore our latest thoughts on design, user experience, and product development.
                </p>
              </motion.div>
              
              <div className="mt-8">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="w-full md:w-96 bg-muted border border-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-text-secondary text-lg">
                    No posts found matching your search.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
        
        <footer className="py-6 px-8 lg:px-16 bg-background text-text-secondary text-sm border-t border-white/10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© Gilber, {new Date().getFullYear()}. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/privacy-policy">
                  <a className="text-text-secondary hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </Link>
                <Link href="/terms-of-service">
                  <a className="text-text-secondary hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}