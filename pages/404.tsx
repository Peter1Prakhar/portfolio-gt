import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Gilber</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Head>
      
      <div className="min-h-screen bg-background flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <h1 className="text-6xl md:text-8xl font-syne font-bold text-white mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-syne font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link href="/">
            <a className="inline-block bg-accent text-white py-3 px-8 font-medium hover:bg-accent/90 transition-colors duration-300">
              Back to Homepage
            </a>
          </Link>
        </motion.div>
      </div>
    </>
  );
}