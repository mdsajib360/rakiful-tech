import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Courses } from './components/Courses';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';
import { AIChatWidget } from './components/AIChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <Courses />
        <Stats />
        
        {/* Newsletter Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-50 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to our newsletter</h2>
                <p className="text-gray-600 text-lg">
                   Get the latest updates, course discounts, and study tips delivered right to your inbox.
                </p>
              </div>
              <div className="w-full md:w-auto flex-1 max-w-md">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-6 py-4 rounded-xl border-2 border-transparent focus:border-primary-500 focus:outline-none"
                  />
                  <button type="submit" className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}

export default App;