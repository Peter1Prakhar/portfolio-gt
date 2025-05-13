import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  { name: 'HOME', path: '#home' },
  { name: 'ABOUT', path: '#about' },
  { name: 'PROJECTS', path: '#projects' },
  { name: 'EDUCATION', path: '#education' },
  { name: 'TESTIMONIALS', path: '#testimonials' },
  { name: 'PARTNERS', path: '#partners' },
  { name: 'BLOG', path: '#blog' },
  { name: 'CONTACT', path: '#contact' },
];

export const projects = [
  {
    id: 1,
    title: "GAMERS TAG Platform",
    category: "PRODUCT MANAGEMENT",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  },
  {
    id: 2,
    title: "E-Sports Analytics Dashboard",
    category: "DATA ANALYTICS",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  },
  {
    id: 3,
    title: "Gaming Marketplace",
    category: "BUSINESS DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  },
  {
    id: 4,
    title: "Player Matchmaking System",
    category: "PRODUCT DESIGN",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  },
  {
    id: 5,
    title: "Gaming Community App",
    category: "MARKETING",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  },
  {
    id: 6,
    title: "Game Developer Platform",
    category: "BUSINESS STRATEGY",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Alex Rodriguez",
    position: "CEO, NexTech Games",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "Joshua's vision for GAMERS TAG has revolutionized how we approach player engagement. His strategic insights helped us increase user retention by 40% and significantly improve monetization. His deep understanding of the gaming industry combined with business acumen makes him an invaluable partner."
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Product Director, GamersHub",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "Working with Joshua transformed our product roadmap and business strategy. His data-driven approach and player-centric design philosophy helped us prioritize features that truly resonated with our audience. The analytics dashboard he developed has become essential to our decision-making process."
  },
  {
    id: 3,
    name: "Marcus Chen",
    position: "Founder, E-Sports Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "Joshua's expertise in the gaming industry is unmatched. As we were launching our e-sports platform, his guidance on player acquisition and community building was instrumental to our success. His innovative approach to matchmaking and tournament structures has set us apart from competitors."
  }
];

export const partnerLogos = [
  "https://images.unsplash.com/photo-1624061061899-acd3a151bbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50",
  "https://images.unsplash.com/photo-1640879776821-25f44457c894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50",
  "https://images.unsplash.com/photo-1628654210900-196c3004497e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50",
  "https://images.unsplash.com/photo-1616161560702-61a3af134095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50"
];

export const blogPosts = [
  {
    id: 1,
    title: "Revolutionizing Player Engagement in 2025",
    excerpt: "How gaming companies can leverage data analytics and personalization to create meaningful player experiences that drive retention and monetization in today's competitive market.",
    category: "GAMING BUSINESS",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 2,
    title: "The Future of E-Sports Economy",
    excerpt: "Analyzing the growth trajectory of the e-sports industry and identifying key opportunities for businesses to participate in this rapidly expanding ecosystem.",
    category: "E-SPORTS TRENDS",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 3,
    title: "Building Gaming Communities That Last",
    excerpt: "Strategies for developing vibrant, engaged gaming communities that foster player loyalty and create sustainable ecosystems for game developers and publishers.",
    category: "COMMUNITY MANAGEMENT",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  }
];

export const experiences = [
  {
    id: 1,
    period: "2021 - PRESENT",
    title: "Founder & CEO",
    company: "GAMERS TAG",
    description: "Founded and lead GAMERS TAG, a gaming industry startup creating innovative solutions for gamers. Oversee product strategy, business development, and company growth."
  },
  {
    id: 2,
    period: "2019 - 2021",
    title: "Senior Product Manager",
    company: "Tech Innovations Ltd.",
    description: "Led product development lifecycle for enterprise SaaS solutions. Managed multiple product teams and increased product adoption by 45% through strategic improvements."
  },
  {
    id: 3,
    period: "2017 - 2019",
    title: "Business Development Consultant",
    company: "Global Ventures Partners",
    description: "Advised technology startups on business strategy, market positioning, and growth tactics. Specialized in product-market fit analysis and go-to-market strategies."
  },
  {
    id: 4,
    period: "2015 - 2017",
    title: "Marketing Analyst",
    company: "DataDriven Marketing",
    description: "Developed data-driven marketing strategies for clients in the technology sector. Specialized in analytics, customer segmentation, and performance measurement."
  }
];
