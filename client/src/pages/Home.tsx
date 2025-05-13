import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import FullpageSlider from '@/components/home/FullpageSlider';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Gilber - Personal Portfolio</title>
        <meta name="description" content="Gilber is a professional portfolio website for a product designer showcasing work, experience and services." />
        <meta property="og:title" content="Gilber - Personal Portfolio" />
        <meta property="og:description" content="Gilber is a professional portfolio website for a product designer showcasing work, experience and services." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FullpageSlider />
      </motion.div>
    </>
  );
}
