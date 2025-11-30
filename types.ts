import React from 'react';

export interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  oldPrice?: number;
  image: string;
  lessons: number;
}

export interface Category {
  id: number;
  name: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}