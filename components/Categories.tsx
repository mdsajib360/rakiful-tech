import React from 'react';
import { Code, Palette, Briefcase, BarChart, Camera, Music, Database, PenTool } from 'lucide-react';
import { Category } from '../types';

const categories: Category[] = [
  { id: 1, name: 'Development', count: 120, icon: <Code size={24} />, color: 'bg-blue-100 text-blue-600' },
  { id: 2, name: 'Design', count: 85, icon: <Palette size={24} />, color: 'bg-purple-100 text-purple-600' },
  { id: 3, name: 'Business', count: 90, icon: <Briefcase size={24} />, color: 'bg-green-100 text-green-600' },
  { id: 4, name: 'Marketing', count: 65, icon: <BarChart size={24} />, color: 'bg-pink-100 text-pink-600' },
  { id: 5, name: 'Photography', count: 42, icon: <Camera size={24} />, color: 'bg-orange-100 text-orange-600' },
  { id: 6, name: 'Music', count: 38, icon: <Music size={24} />, color: 'bg-red-100 text-red-600' },
  { id: 7, name: 'Data Science', count: 74, icon: <Database size={24} />, color: 'bg-cyan-100 text-cyan-600' },
  { id: 8, name: 'Writing', count: 55, icon: <PenTool size={24} />, color: 'bg-yellow-100 text-yellow-600' },
];

export const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Top Categories</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Explore Popular Topics
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover a wide range of categories to help you develop the skills you need for your career.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center cursor-pointer border border-transparent hover:border-primary-100"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${category.color} group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{category.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{category.count} Courses</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};