import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Close modal with escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-muted rounded-lg w-full max-w-2xl p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-syne font-semibold text-white">Search</h2>
              <button onClick={onClose} className="text-white hover:text-accent">
                <X size={24} />
              </button>
            </div>
            
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search..."
                className="w-full bg-background border border-white/10 rounded-lg py-3 px-4 pl-12 text-white focus:outline-none focus:ring-1 focus:ring-accent"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" size={18} />
            </div>
            
            <div className="mt-6">
              {/* Search results would go here */}
              <p className="text-text-secondary text-center py-4">
                {searchQuery ? 'No results found. Try a different search term.' : 'Enter a search term above'}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}