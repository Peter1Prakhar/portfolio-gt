import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model for admin access to the portfolio site
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Projects showcase
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  featured: boolean("featured").default(false),
});

// Blog posts
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  category: text("category").notNull(),
  image: text("image").notNull(),
  publishedAt: timestamp("published_at").notNull(),
});

// Testimonials from clients
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  image: text("image"),
  rating: integer("rating").default(5),
});

// Contact form submissions
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  read: boolean("read").default(false),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users);
export const insertProjectSchema = createInsertSchema(projects);
export const insertBlogPostSchema = createInsertSchema(blogPosts);
export const insertTestimonialSchema = createInsertSchema(testimonials);
export const insertContactMessageSchema = createInsertSchema(contactMessages);

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
