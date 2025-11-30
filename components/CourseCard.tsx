import React from 'react';
import { Star, BookOpen, Users, Clock } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative overflow-hidden group">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 uppercase tracking-wide">
          {course.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
             <BookOpen size={14} className="text-secondary-500" />
             <span>{course.lessons} Lessons</span>
          </div>
          <div className="flex items-center space-x-1 text-yellow-400 font-bold text-sm">
             <Star size={14} fill="currentColor" />
             <span className="text-gray-700">{course.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 cursor-pointer transition-colors">
          {course.title}
        </h3>

        <div className="flex items-center gap-3 mb-4">
           <img src={`https://picsum.photos/50/50?random=${course.id + 50}`} alt={course.instructor} className="w-8 h-8 rounded-full border border-gray-200" />
           <span className="text-sm text-gray-600 font-medium">{course.instructor}</span>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary-700">${course.price}</span>
            {course.oldPrice && (
              <span className="text-xs text-gray-400 line-through">${course.oldPrice}</span>
            )}
          </div>
          <button className="text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};