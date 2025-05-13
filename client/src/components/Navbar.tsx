import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useMobileNavigation } from '@/lib/hooks/useSectionNavigation';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navbar = ({ activeSection, onSectionChange }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { toggleMobileMenu, isMobileMenuOpen } = useMobileNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    onSectionChange(sectionId);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm' : ''}`}>
      <nav className="flex justify-between items-center">
        <a href="#" className="text-xl font-montserrat font-semibold text-white z-50">
          Gilber<span className="text-primary">.</span>
        </a>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick('home', e)}
            className={`nav-link text-sm tracking-wider font-medium transition-colors ${activeSection === 'home' ? 'text-white active' : 'text-white/60 hover:text-white'}`}
          >
            HOME
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick('about', e)}
            className={`nav-link text-sm tracking-wider font-medium transition-colors ${activeSection === 'about' ? 'text-white active' : 'text-white/60 hover:text-white'}`}
          >
            ABOUT
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick('projects', e)}
            className={`nav-link text-sm tracking-wider font-medium transition-colors ${activeSection === 'projects' ? 'text-white active' : 'text-white/60 hover:text-white'}`}
          >
            PROJECTS
          </a>
          <a 
            href="#education" 
            onClick={(e) => handleNavClick('education', e)}
            className={`nav-link text-sm tracking-wider font-medium transition-colors ${activeSection === 'education' ? 'text-white active' : 'text-white/60 hover:text-white'}`}
          >
            EDUCATION
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleNavClick('testimonials', e)}
            className={`nav-link text-sm tracking-wider font-medium transition-colors ${activeSection === 'testimonials' ? 'text-white active' : 'text-white/60 hover:text-white'}`}
          >
            TESTIMONIALS
          </a>
          <a 
            href="#partners" 
            onClick={(e) => handleNavClick('partners', e)}
            className={`nav-link text-sm tracking-wider font-medium transition-colors ${activeSection === 'partners' ? 'text-white active' : 'text-white/60 hover:text-white'}`}
          >
            PARTNERS
          </a>
          <a 
            href="#blog" 
            onClick={(e) => handleNavClick('blog', e)}
            className={`nav-link text-sm tracking-wider font-medium transition-colors ${activeSection === 'blog' ? 'text-white active' : 'text-white/60 hover:text-white'}`}
          >
            BLOG
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick('contact', e)}
            className={`nav-link text-sm tracking-wider font-medium transition-colors ${activeSection === 'contact' ? 'text-white active' : 'text-white/60 hover:text-white'}`}
          >
            CONTACT
          </a>
        </div>
        
        {/* Phone number */}
        <div className="hidden md:block">
          <a href="tel:+12130625-10" className="text-white text-sm font-medium">+1 (213) 062-25-10</a>
        </div>
        
        {/* Mobile hamburger */}
        <button 
          className={`md:hidden hamburger flex flex-col justify-center items-center z-50 ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="w-6 h-0.5 bg-white mb-1.5"></span>
          <span className="w-6 h-0.5 bg-white mb-1.5"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
