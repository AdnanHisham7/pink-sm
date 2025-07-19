import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/mockData';

interface CategoryGridProps {
  onNavigate: (page: string, category?: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Explore </span>
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Collections
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our curated collections of retro-inspired ceramic artistry
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={category._id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 hover:border-pink-500/30 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => onNavigate('shop', category.slug)}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Floating Number */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-pink-500/80 to-purple-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex items-center text-pink-400 font-medium group-hover:text-purple-400 transition-colors duration-300">
                    <span className="mr-2">Explore Collection</span>
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Grain Texture Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay"></div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('shop')}
              className="group px-8 py-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 text-pink-400 font-semibold rounded-full hover:from-pink-500/20 hover:to-purple-500/20 hover:border-pink-500/50 transition-all duration-300"
            >
              <span className="flex items-center">
                View All Collections
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;