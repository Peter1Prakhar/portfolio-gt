import { useState, useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  freezeOnceVisible = false
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<Element | null>(null);
  
  const frozen = useRef(false);

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
    setIsVisible(entry.isIntersecting);
    
    if (freezeOnceVisible && entry.isIntersecting) {
      frozen.current = true;
    }
  };

  useEffect(() => {
    const node = elementRef.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen.current || !node) return;

    const observer = new IntersectionObserver(updateEntry, {
      root,
      rootMargin,
      threshold
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, freezeOnceVisible]);

  return { ref: elementRef, entry, isVisible };
}
