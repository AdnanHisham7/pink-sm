import React, { useState } from 'react';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-pink-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-300 hover:to-purple-300 transition-all duration-300"
          >
            Enencia
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  currentPage === item.page
                    ? 'text-pink-400'
                    : 'text-gray-300 hover:text-pink-400'
                } group`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  currentPage === item.page ? 'scale-x-100' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* Action Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-pink-500/20">
            <div className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 text-sm font-medium transition-colors duration-300 ${
                    currentPage === item.page
                      ? 'text-pink-400'
                      : 'text-gray-300 hover:text-pink-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                <button className="p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300">
                  <Search size={20} />
                </button>
                <button className="p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300">
                  <User size={20} />
                </button>
                <button className="p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;