import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              F
            </div>
            <span className="text-2xl font-bold text-gray-900">Rakiful_Tech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition">Home</a>
            <a href="#courses" className="text-gray-700 hover:text-primary-600 font-medium transition">Courses</a>
            <a href="#categories" className="text-gray-700 hover:text-primary-600 font-medium transition">Categories</a>
            <a href="#instructors" className="text-gray-700 hover:text-primary-600 font-medium transition">Instructors</a>
            <a href="#blog" className="text-gray-700 hover:text-primary-600 font-medium transition">Blog</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button className="p-2 text-gray-500 hover:text-primary-600 transition">
                <Search size={20} />
              </button>
            </div>
            <button className="p-2 text-gray-500 hover:text-primary-600 transition relative">
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-0 bg-secondary-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full font-medium hover:bg-primary-100 transition">
              <User size={18} />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Home</a>
            <a href="#courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Courses</a>
            <a href="#categories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Categories</a>
            <a href="#blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Blog</a>
            <div className="pt-4 flex gap-4">
               <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium">Login</button>
               <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};