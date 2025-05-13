import { 
  type User, 
  type InsertUser,
  type Project,
  type InsertProject,
  type BlogPost,
  type InsertBlogPost,
  type Testimonial,
  type InsertTestimonial,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Blog posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Contact messages
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private blogPosts: Map<number, BlogPost>;
  private testimonials: Map<number, Testimonial>;
  private contactMessages: Map<number, ContactMessage>;
  
  private userIdCounter: number;
  private projectIdCounter: number;
  private blogPostIdCounter: number;
  private testimonialIdCounter: number;
  private contactMessageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.blogPosts = new Map();
    this.testimonials = new Map();
    this.contactMessages = new Map();
    
    this.userIdCounter = 1;
    this.projectIdCounter = 1;
    this.blogPostIdCounter = 1;
    this.testimonialIdCounter = 1;
    this.contactMessageIdCounter = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Projects
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }
  
  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.projectIdCounter++;
    const now = new Date();
    const project: Project = { 
      ...insertProject, 
      id, 
      createdAt: now 
    };
    this.projects.set(id, project);
    return project;
  }
  
  // Blog posts
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }
  
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostIdCounter++;
    const now = new Date();
    const blogPost: BlogPost = { 
      ...insertBlogPost, 
      id,
      publishDate: insertBlogPost.publishDate || now
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
  
  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialIdCounter++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id 
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  // Contact messages
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }
  
  async createContactMessage(insertContactMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageIdCounter++;
    const now = new Date();
    const contactMessage: ContactMessage = { 
      ...insertContactMessage, 
      id,
      createdAt: now,
      isRead: false
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
  
  // Helper to initialize sample data
  private initializeSampleData() {
    // Sample projects
    const projects: InsertProject[] = [
      {
        title: 'Finance Dashboard',
        category: 'UI/UX Design',
        description: 'A comprehensive financial dashboard with analytics and reporting features.',
        imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        link: '#'
      },
      {
        title: 'Fitness Mobile App',
        category: 'App Design',
        description: 'A mobile application for tracking workouts and nutrition plans.',
        imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        link: '#'
      },
      {
        title: 'E-commerce Platform',
        category: 'Web Design',
        description: 'A full-featured e-commerce platform with shopping cart and payment integration.',
        imageUrl: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        link: '#'
      }
    ];
    
    // Sample blog posts
    const blogPosts: InsertBlogPost[] = [
      {
        title: '10 UI Design Principles You Should Know',
        excerpt: 'Essential design principles that every UI/UX designer needs to master to create exceptional user experiences.',
        content: 'This is a full blog post content about UI design principles...',
        imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450',
        commentCount: 24,
        publishDate: new Date('2023-03-15')
      },
      {
        title: 'The Best Design Tools of 2023',
        excerpt: 'A comprehensive review of the latest design tools that are transforming the way professionals work.',
        content: 'This is a full blog post content about design tools...',
        imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450',
        commentCount: 18,
        publishDate: new Date('2023-02-28')
      },
      {
        title: 'Building a Design Portfolio That Stands Out',
        excerpt: 'Tips and strategies for creating a portfolio that showcases your skills and attracts potential clients.',
        content: 'This is a full blog post content about portfolio building...',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450',
        commentCount: 32,
        publishDate: new Date('2023-01-10')
      }
    ];
    
    // Sample testimonials
    const testimonials: InsertTestimonial[] = [
      {
        name: 'Sarah Johnson',
        position: 'CEO, TechStart Inc.',
        content: 'Working with Gilber was an amazing experience. His design skills and attention to detail transformed our product and helped us achieve our business goals.',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
      },
      {
        name: 'David Chen',
        position: 'Product Director, InnovateLab',
        content: 'Gilber\'s approach to design thinking and problem-solving is remarkable. He delivered a user interface that exceeded our expectations and delighted our customers.',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
      },
      {
        name: 'Emily Rodriguez',
        position: 'CMO, GlobalBrand',
        content: 'We hired Gilber to redesign our entire platform, and the results were outstanding. His strategic vision and technical expertise made all the difference.',
        avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
      }
    ];
    
    // Add sample data to storage
    projects.forEach(project => this.createProject(project));
    blogPosts.forEach(blogPost => this.createBlogPost(blogPost));
    testimonials.forEach(testimonial => this.createTestimonial(testimonial));
  }
}

export const storage = new MemStorage();
