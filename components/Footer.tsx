import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                F
              </div>
              <span className="text-xl font-bold text-white">Rakiful_Tech</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering learners worldwide with accessible, high-quality education. Join our community and start your journey today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Become an Instructor</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-6">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Graphic Design</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Business Strategy</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Data Science</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 flex-shrink-0 mt-0.5" />
                <span>123 Education Street, Learning Hub, NY 10012, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <span>support@Rakiful_Tech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 Rakiful_Tech. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
             <span className="text-slate-500">Designed with ❤️ by Engineering Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};