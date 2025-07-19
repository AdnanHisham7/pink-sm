import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import ShopPage from './components/ShopPage';
import ProductDetailPage from './components/ProductDetailPage';

type Page = 'home' | 'shop' | 'product' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>();

  const handleNavigation = (page: string, param?: string) => {
    if (page === 'shop') {
      setCurrentPage('shop');
      setSelectedCategory(param);
    } else if (page === 'product') {
      setCurrentPage('product');
      setSelectedProduct(param);
    } else {
      setCurrentPage(page as Page);
      setSelectedCategory(undefined);
      setSelectedProduct(undefined);
    }

    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update page title based on current page
  useEffect(() => {
    const titles = {
      home: 'Enencia - Retro Ceramics Reimagined for the Bold',
      shop: 'Shop - Enencia Ceramic Collections',
      product: 'Product Details - Enencia',
      about: 'About - Enencia Ceramic Studio',
      contact: 'Contact - Enencia'
    };
    
    document.title = titles[currentPage] || 'Enencia';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <ShopPage onNavigate={handleNavigation} initialCategory={selectedCategory} />;
      case 'product':
        return selectedProduct ? (
          <ProductDetailPage productSlug={selectedProduct} onNavigate={handleNavigation} />
        ) : (
          <ShopPage onNavigate={handleNavigation} />
        );
      case 'about':
        return (
          <div className="pt-16">
            <AboutSection />
            <CraftsmanshipSection />
            <TestimonialsSection />
          </div>
        );
      case 'contact':
        return (
          <div className="min-h-screen bg-black pt-20 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
              <p className="text-xl text-gray-400 mb-8">Ready to transform your space?</p>
              <div className="space-y-4">
                <p className="text-gray-300">Email: hello@enencia.com</p>
                <p className="text-gray-300">Phone: +1 (555) 123-VIBE</p>
                <p className="text-gray-300">Showroom: Downtown Design District</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <HeroSection onNavigate={handleNavigation} />
            <AboutSection />
            <CategoryGrid onNavigate={handleNavigation} />
            <FeaturedProducts onNavigate={handleNavigation} />
            <CraftsmanshipSection />
            <TestimonialsSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      {renderPage()}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;