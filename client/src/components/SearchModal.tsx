import { useRef, useEffect, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { X, Search } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Search for:", searchTerm);
    // Implement search functionality here
    onClose();
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-background bg-opacity-95 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full max-w-2xl px-4">
        <div className="flex justify-end mb-6">
          <button 
            className="text-white hover:text-accent transition-colors duration-300"
            onClick={onClose}
            aria-label="Close Search"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <motion.form 
          className="relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          onSubmit={handleSubmit}
        >
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search..." 
            className="w-full bg-transparent text-white text-xl md:text-2xl px-4 py-3 border-b border-muted focus:border-accent focus:outline-none transition-colors duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="submit" 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors duration-300"
            aria-label="Submit Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
}
