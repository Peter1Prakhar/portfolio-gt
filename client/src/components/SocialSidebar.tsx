import { Facebook, Twitter, Instagram } from "lucide-react";

export default function SocialSidebar() {
  return (
    <div className="fixed left-12 top-1/2 h-[600px] flex flex-col justify-between items-center z-20 -translate-y-1/2">
      <div className="h-48 w-[1px] bg-white/70 opacity-80 mb-8"></div>
      <a href="#" className="text-white hover:text-accent transition-colors duration-300 mb-10">
        <Facebook className="w-7 h-7" />
      </a>
      <a href="#" className="text-white hover:text-accent transition-colors duration-300 mb-10">
        <Twitter className="w-7 h-7" />
      </a>
      <a href="#" className="text-white hover:text-accent transition-colors duration-300 mb-10">
        <Instagram className="w-7 h-7" />
      </a>
      <div className="h-48 w-[1px] bg-white/70 opacity-80"></div>
    </div>
  );
}