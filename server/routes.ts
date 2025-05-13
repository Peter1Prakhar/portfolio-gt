import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the portfolio site
  
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }
      
      // Email validation with a simple regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address" 
        });
      }
      
      // Here you could add logic to store the contact message
      // or send an email notification
      
      // For now, just return a success response
      return res.status(200).json({ 
        message: "Your message has been sent successfully!" 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        message: "An error occurred while sending your message. Please try again." 
      });
    }
  });

  // Search endpoint
  app.get('/api/search', async (req, res) => {
    try {
      const { query } = req.query;
      
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ 
          message: "Search query is required" 
        });
      }
      
      // Simulated search results
      // In a real app, you would search your database
      const results = [
        // Projects, blog posts, etc. that match the query
      ];
      
      return res.status(200).json({ results });
    } catch (error) {
      console.error('Search error:', error);
      return res.status(500).json({ 
        message: "An error occurred during search. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
