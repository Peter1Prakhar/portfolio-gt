import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8 border-t border-gray-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link href="#">
              <a className="text-xl font-poppins font-bold">
                Gilber<span className="text-accent">.</span>
              </a>
            </Link>
          </div>
          
          <div className="text-muted text-sm">
            © Gilber, {currentYear}. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted hover:text-accent transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
