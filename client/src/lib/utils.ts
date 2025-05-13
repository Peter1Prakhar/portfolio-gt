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
    title: "Finance App",
    category: "UI/UX DESIGN",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  },
  {
    id: 2,
    title: "CreativeHub Agency",
    category: "WEB DESIGN",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  },
  {
    id: 3,
    title: "Eco Products",
    category: "BRANDING",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  },
  {
    id: 4,
    title: "Smart Home Device",
    category: "PRODUCT DESIGN",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    category: "UX DESIGN",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  },
  {
    id: 6,
    title: "Travel Explorer",
    category: "WEB DESIGN",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    link: "#"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "Working with Gilber was an incredible experience. His attention to detail and understanding of our brand requirements exceeded our expectations. The designs he created for our app were not only beautiful but also highly functional, resulting in a significant increase in user engagement."
  },
  {
    id: 2,
    name: "Mark Williams",
    position: "Product Manager, Innovate Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "Gilber brought a level of creativity and strategic thinking to our product redesign that was truly transformative. His ability to balance aesthetic appeal with user-centered design principles resulted in a product that not only looks amazing but also delivers an exceptional user experience."
  },
  {
    id: 3,
    name: "Emily Chen",
    position: "Marketing Director, GrowFast",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "We hired Gilber to redesign our brand identity and website, and the results were outstanding. His collaborative approach and willingness to understand our business goals made the process smooth and enjoyable. The new design has significantly improved our brand perception and customer engagement."
  }
];

export const partnerLogos = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50",
  "https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50",
  "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50"
];

export const blogPosts = [
  {
    id: 1,
    title: "The Future of UI Design in 2023",
    excerpt: "Exploring the latest trends in user interface design and how they're shaping digital experiences. From neumorphism to glassmorphism, we examine what's next.",
    category: "DESIGN TRENDS",
    date: "June 12, 2023",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 2,
    title: "Effective User Research Techniques",
    excerpt: "A comprehensive guide to conducting user research that provides valuable insights for your design process. Learn how to ask the right questions and analyze the results.",
    category: "UX PROCESS",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 3,
    title: "Best Design Tools for Productivity",
    excerpt: "Discover the top design tools that can streamline your workflow and boost your productivity. From prototyping to collaboration, we've got you covered.",
    category: "TOOLS & RESOURCES",
    date: "May 14, 2023",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  }
];

export const experiences = [
  {
    id: 1,
    period: "2020 - PRESENT",
    title: "Senior Product Designer - DesignWorks Inc.",
    description: "Leading design strategy and execution for enterprise clients. Managing a team of designers and collaborating with cross-functional teams to deliver impactful digital products."
  },
  {
    id: 2,
    period: "2016 - 2020",
    title: "UI/UX Designer - TechVision Studio",
    description: "Designed user interfaces and experiences for mobile and web applications. Conducted user research and usability testing to inform design decisions."
  },
  {
    id: 3,
    period: "2013 - 2016",
    title: "Graphic Designer - CreativeMinds Agency",
    description: "Created visual identities, marketing materials, and digital assets for various clients. Collaborated with marketing teams to develop cohesive brand experiences."
  },
  {
    id: 4,
    period: "2009 - 2013",
    title: "Bachelor of Design - Design Institute",
    description: "Graduated with honors in Visual Communication Design. Specialized in digital media and interactive design."
  }
];
