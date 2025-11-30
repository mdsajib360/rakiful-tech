import React from 'react';
import { CourseCard } from './CourseCard';
import { Course } from '../types';

const courses: Course[] = [
  {
    id: 1,
    title: 'Complete Web Design: from Figma to Webflow to Freelancing',
    category: 'Design',
    instructor: 'Vako Shvili',
    rating: 4.8,
    students: 12500,
    price: 49.99,
    oldPrice: 89.99,
    image: 'https://picsum.photos/600/400?random=11',
    lessons: 24,
  },
  {
    id: 2,
    title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    category: 'Development',
    instructor: 'Jonas Schmedtmann',
    rating: 4.9,
    students: 35000,
    price: 69.99,
    oldPrice: 120.00,
    image: 'https://picsum.photos/600/400?random=12',
    lessons: 48,
  },
  {
    id: 3,
    title: 'Digital Marketing Masterclass - 23 Courses in 1',
    category: 'Marketing',
    instructor: 'Phil Ebiner',
    rating: 4.6,
    students: 8900,
    price: 39.99,
    image: 'https://picsum.photos/600/400?random=13',
    lessons: 32,
  },
  {
    id: 4,
    title: 'Python for Data Science and Machine Learning Bootcamp',
    category: 'Data Science',
    instructor: 'Jose Portilla',
    rating: 4.7,
    students: 15400,
    price: 54.99,
    oldPrice: 94.99,
    image: 'https://picsum.photos/600/400?random=14',
    lessons: 55,
  },
  {
    id: 5,
    title: 'Graphic Design Masterclass - Learn GREAT Design',
    category: 'Design',
    instructor: 'Lindsay Marsh',
    rating: 4.8,
    students: 6200,
    price: 29.99,
    image: 'https://picsum.photos/600/400?random=15',
    lessons: 18,
  },
  {
    id: 6,
    title: 'The Business Intelligence Analyst Course 2024',
    category: 'Business',
    instructor: '365 Careers',
    rating: 4.5,
    students: 4500,
    price: 44.99,
    oldPrice: 79.99,
    image: 'https://picsum.photos/600/400?random=16',
    lessons: 40,
  }
];

export const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-left">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Popular Courses</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Pick A Course To Get Started
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
             Browse All Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};