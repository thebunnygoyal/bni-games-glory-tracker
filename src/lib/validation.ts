
import { z } from 'zod';

// Sanitization utility to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and > characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
    .trim();
};

// Weekly data submission schema
export const weeklyDataSchema = z.object({
  chapterName: z.string()
    .min(1, 'Chapter name is required')
    .max(50, 'Chapter name must be less than 50 characters')
    .transform(sanitizeInput),
  week: z.number()
    .min(1, 'Week must be between 1 and 52')
    .max(52, 'Week must be between 1 and 52'),
  referrals: z.number()
    .min(0, 'Referrals cannot be negative')
    .max(1000, 'Referrals cannot exceed 1000'),
  visitors: z.number()
    .min(0, 'Visitors cannot be negative')
    .max(500, 'Visitors cannot exceed 500'),
  attendance: z.number()
    .min(0, 'Attendance cannot be negative')
    .max(100, 'Attendance cannot exceed 100%'),
  testimonials: z.number()
    .min(0, 'Testimonials cannot be negative')
    .max(10, 'Testimonials cannot exceed 10'),
  trainings: z.number()
    .min(0, 'Trainings cannot be negative')
    .max(10, 'Trainings cannot exceed 10')
});

// Contact form schema
export const contactSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters')
    .transform(sanitizeInput),
  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  message: z.string()
    .min(1, 'Message is required')
    .max(1000, 'Message must be less than 1000 characters')
    .transform(sanitizeInput)
});

// User registration schema
export const userRegistrationSchema = z.object({
  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password must be less than 128 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one lowercase letter, one uppercase letter, and one number'),
  chapter: z.string()
    .min(1, 'Chapter is required')
    .max(50, 'Chapter name must be less than 50 characters')
    .transform(sanitizeInput),
  role: z.enum(['captain', 'member'], {
    errorMap: () => ({ message: 'Role must be either captain or member' })
  })
});

export type WeeklyDataInput = z.infer<typeof weeklyDataSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type UserRegistrationInput = z.infer<typeof userRegistrationSchema>;
