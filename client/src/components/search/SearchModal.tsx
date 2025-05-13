import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { useLocation } from 'wouter';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setLocation] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real application, we would navigate to a search results page
      setLocation(`/search?q=${encodeURIComponent(searchQuery)}`);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-background/95 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            className="absolute top-8 right-8 text-white"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={24} />
          </button>
          
          <motion.div
            className="w-full max-w-3xl px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <form className="w-full relative" onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-transparent border-b-2 border-white/20 text-white text-2xl py-4 px-2 focus:outline-none focus:border-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                aria-label="Submit search"
              >
                <Search size={24} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
