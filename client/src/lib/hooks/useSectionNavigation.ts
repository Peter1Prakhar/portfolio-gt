import { useState, useCallback, createContext, useContext } from 'react';

interface MobileNavigationContextType {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const MobileNavigationContext = createContext<MobileNavigationContextType>({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => {},
  openMobileMenu: () => {},
  closeMobileMenu: () => {},
});

export const useMobileNavigation = (): MobileNavigationContextType => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    
    // Prevent scrolling when the menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    openMobileMenu,
    closeMobileMenu,
  };
};

export const MobileNavigationProvider = MobileNavigationContext.Provider;
export const useMobileNavigationContext = () => useContext(MobileNavigationContext);
