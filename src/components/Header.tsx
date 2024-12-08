import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">InnoHub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#solutions" className="text-gray-700 hover:text-blue-600">Solutions</a>
            <a href="#insights" className="text-gray-700 hover:text-blue-600">Insights</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Join Us
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
            <a href="#solutions" className="block text-gray-700 hover:text-blue-600">Solutions</a>
            <a href="#insights" className="block text-gray-700 hover:text-blue-600">Insights</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Join Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}