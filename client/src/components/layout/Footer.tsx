import { Link } from 'wouter';

export default function Footer() {
  return (
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
  );
}
