import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, ArrowRight, Star } from 'lucide-react';
import { products, categories } from '../data/mockData';
import { FilterState } from '../types';

interface ShopPageProps {
  onNavigate: (page: string, productId?: string) => void;
  initialCategory?: string;
}

const ShopPage: React.FC<ShopPageProps> = ({ onNavigate, initialCategory }) => {
  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory || '',
    search: ''
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = !filters.category || product.category.slug === filters.category;
      const matchesSearch = !filters.search || 
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [filters]);

  const selectedCategory = categories.find(cat => cat.slug === filters.category);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <button 
              onClick={() => onNavigate('home')}
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 mr-2"
            >
              Home
            </button>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-pink-400">Shop</span>
            {selectedCategory && (
              <>
                <span className="text-gray-600 mx-2">/</span>
                <span className="text-purple-400">{selectedCategory.name}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {selectedCategory ? (
              <>
                <span className="text-white">{selectedCategory.name}</span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Collection
                </span>
              </>
            ) : (
              <>
                <span className="text-white">All </span>
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Vibes
                </span>
              </>
            )}
          </h1>
          
          {selectedCategory && (
            <p className="text-xl text-gray-400 max-w-2xl">
              {selectedCategory.description}
            </p>
          )}
        </div>

        {/* Filters & Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="lg:w-64">
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-pink-500/50 focus:outline-none"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category._id} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 transition-colors duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-pink-500 text-white' 
                  : 'text-gray-400 hover:text-pink-400'
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 transition-colors duration-300 ${
                viewMode === 'list' 
                  ? 'bg-pink-500 text-white' 
                  : 'text-gray-400 hover:text-pink-400'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-400">
            Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
            {filters.search && ` for "${filters.search}"`}
          </div>
          
          {filters.category && (
            <button
              onClick={() => setFilters({ ...filters, category: '' })}
              className="text-pink-400 hover:text-purple-400 transition-colors duration-300 text-sm"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          }>
            {filteredProducts.map((product) => (
              <div 
                key={product._id}
                className={`group cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-500 hover:transform hover:scale-105'
                    : 'flex bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-500'
                }`}
                onClick={() => onNavigate('product', product.slug)}
              >
                {/* Image */}
                <div className={
                  viewMode === 'grid'
                    ? 'aspect-square overflow-hidden relative'
                    : 'w-48 aspect-square overflow-hidden relative flex-shrink-0'
                }>
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-pink-400 font-semibold rounded-full text-sm">
                    ${product.price}
                  </div>

                  {product.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-sm text-white font-medium rounded-full text-xs">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={viewMode === 'grid' ? 'p-6' : 'p-6 flex-1'}>
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
                  
                  <p className={`text-gray-400 text-sm leading-relaxed mb-4 ${
                    viewMode === 'grid' ? 'line-clamp-2' : ''
                  }`}>
                    {product.description}
                  </p>

                  {/* Specs Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specifications.slice(0, viewMode === 'grid' ? 2 : 3).map((spec, specIndex) => (
                      <span 
                        key={specIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-md"
                      >
                        {spec.split(' ').slice(0, 2).join(' ')}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-pink-400 font-medium group-hover:text-purple-400 transition-colors duration-300">
                    <span className="mr-2">View Vibe</span>
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
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Vibes Found</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              We couldn't find any products matching your search. Try adjusting your filters or browse all categories.
            </p>
            <button
              onClick={() => setFilters({ category: '', search: '' })}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              Browse All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;