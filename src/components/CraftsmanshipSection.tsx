import React from 'react';
import { Palette, Hammer, Sparkles, Award } from 'lucide-react';

const CraftsmanshipSection: React.FC = () => {
  const processes = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Conception',
      description: 'Every piece begins with a vision - sketched by hand and refined through countless iterations.',
      image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Ceramic Shaping',
      description: 'Master artisans shape each piece using traditional techniques passed down through generations.',
      image: 'https://images.pexels.com/photos/5591664/pexels-photo-5591664.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Glazing & Finishing',
      description: 'Our signature colors come to life through custom glazing formulations and hand-applied finishes.',
      image: 'https://images.pexels.com/photos/5591665/pexels-photo-5591665.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Every piece undergoes rigorous testing to ensure it meets our exacting standards for beauty and function.',
      image: 'https://images.pexels.com/photos/5591666/pexels-photo-5591666.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Design & </span>
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Craftsmanship
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where traditional ceramic artistry meets retro-futuristic innovation. 
              Each piece is a testament to our commitment to excellence and artistic expression.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {processes.map((process, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={process.image} 
                    alt={process.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Step Number */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-pink-500/80 to-purple-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-pink-400 mr-4 group-hover:text-purple-400 transition-colors duration-300">
                      {process.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                      {process.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {process.description}
                  </p>
                </div>

                {/* Grain Texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  72h
                </div>
                <div className="text-gray-400">Average Creation Time</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  15+
                </div>
                <div className="text-gray-400">Glazing Techniques</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  100%
                </div>
                <div className="text-gray-400">Hand-Finished</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  1200°C
                </div>
                <div className="text-gray-400">Firing Temperature</div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center mt-16">
            <blockquote className="text-2xl font-light text-gray-300 italic max-w-3xl mx-auto">
              "Each piece carries the <span className="text-pink-400 font-medium">soul</span> of its creator 
              and the <span className="text-purple-400 font-medium">dreams</span> of its future home."
            </blockquote>
            <div className="mt-6">
              <div className="text-pink-400 font-semibold">— Master Ceramicist Elena Rodriguez</div>
              <div className="text-gray-500 text-sm">Lead Artisan & Creative Director</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;