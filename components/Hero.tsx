import React from 'react';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
          <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-secondary-500 mr-2"></span>
                Over 5000+ New Courses Available
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Grow Your Skills,</span>{' '}
                <span className="block text-primary-600 xl:inline">Define Your Future</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                FiStudy provides world-class education for everyone. Master new skills in design, coding, marketing, and more with our expert-led courses.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <a
                    href="#courses"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Explore Courses
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-200 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors group"
                  >
                    <PlayCircle className="mr-2 w-5 h-5 text-secondary-500 group-hover:scale-110 transition-transform" />
                    Watch Video
                  </a>
                </div>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={`https://picsum.photos/100/100?random=${i + 10}`} alt="Student" />
                   ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <span className="text-gray-900 font-bold ml-1">4.9</span>
                  </div>
                  <span>(12k+ Reviews)</span>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-primary-50">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
          src="https://picsum.photos/800/800?random=1"
          alt="Student learning"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 lg:to-white"></div>
      </div>
    </div>
  );
};