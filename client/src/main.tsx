import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set the title for the document
document.title = "Gilber - Personal Portfolio";

// Add meta description for SEO
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Gilber is a professional UI/UX designer and developer portfolio showcasing projects, skills, and expertise in design and development.';
document.head.appendChild(metaDescription);

// Add Open Graph tags for better social media sharing
const ogTitle = document.createElement('meta');
ogTitle.property = 'og:title';
ogTitle.content = 'Gilber - Professional UI/UX Designer Portfolio';
document.head.appendChild(ogTitle);

const ogDescription = document.createElement('meta');
ogDescription.property = 'og:description';
ogDescription.content = 'Portfolio of Gilber - UI/UX designer and developer with expertise in creating beautiful, functional interfaces that deliver exceptional user experiences.';
document.head.appendChild(ogDescription);

createRoot(document.getElementById("root")!).render(<App />);
