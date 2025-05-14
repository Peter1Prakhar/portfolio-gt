import { Facebook, Twitter, Instagram } from "lucide-react";

export default function SocialSidebar() {
  return (
    <div className="fixed left-8 top-1/2 h-80 flex flex-col justify-between items-center z-20 -translate-y-1/2">
      <div className="h-24 w-[1px] bg-gray-700 opacity-50 mb-6"></div>
      <a href="#" className="text-white hover:text-accent transition-colors duration-300 mb-8">
        <Facebook className="w-5 h-5" />
      </a>
      <a href="#" className="text-white hover:text-accent transition-colors duration-300 mb-8">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="#" className="text-white hover:text-accent transition-colors duration-300 mb-8">
        <Instagram className="w-5 h-5" />
      </a>
      <div className="h-24 w-[1px] bg-gray-700 opacity-50"></div>
    </div>
  );
}