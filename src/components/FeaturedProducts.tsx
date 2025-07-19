import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '../data/mockData';

interface FeaturedProductsProps {
  onNavigate: (page: string, productId?: string) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onNavigate }) => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full mb-6">
              <Star className="w-4 h-4 text-pink-400 mr-2" />
              <span className="text-pink-400 text-sm font-medium">FEATURED COLLECTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Signature </span>
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Vibes
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Handpicked pieces that define the Enencia aesthetic
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <div 
                key={product._id}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => onNavigate('product', product.slug)}
              >
                {/* Image Container */}
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-pink-400 font-semibold rounded-full text-sm">
                    ${product.price}
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-sm text-white font-medium rounded-full text-xs">
                    FEATURED
                  </div>

                  {/* Hover Overlay with CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <span className="flex items-center">
                        View Vibe
                        <ArrowRight className="ml-2" size={16} />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-pink-400 font-medium uppercase tracking-wider">
                      {product.category.name}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className="text-pink-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Specs Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specifications.slice(0, 2).map((spec, specIndex) => (
                      <span 
                        key={specIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-md"
                      >
                        {spec.split(' ').slice(0, 2).join(' ')}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <div className="flex items-center text-pink-400 font-medium group-hover:text-purple-400 transition-colors duration-300">
                    <span className="mr-2">Explore Details</span>
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Grain Texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center">
            <button
              onClick={() => onNavigate('shop')}
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center">
                Explore All Vibes
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;