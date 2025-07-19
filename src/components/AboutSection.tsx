import React from 'react';
import { Palette, Sparkles, Heart, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Artistic Expression',
      description: 'Every piece tells a story of creative rebellion and timeless beauty.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Innovative Design',
      description: 'Pushing boundaries between retro nostalgia and futuristic vision.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Crafted with Love',
      description: 'Hand-finished details that make each piece uniquely yours.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Bold Impact',
      description: 'Transforming ordinary spaces into extraordinary experiences.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Born from Rebellion,
              </span>
              <br />
              <span className="text-white">Crafted for the Bold</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enencia emerged from a simple belief: why should bathrooms be boring? 
              We fuse the nostalgic charm of retro design with cutting-edge ceramic artistry, 
              creating pieces that dare to be different.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Our Creative Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                Founded by ceramic artists who refused to accept the status quo, Enencia 
                represents a new generation of design thinking. We believe that every element 
                in a space should inspire, provoke, and delight.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our retro-futuristic approach combines the warmth of vintage aesthetics 
                with modern functionality, creating ceramic pieces that are as much art 
                as they are utility.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full">
                <span className="text-pink-400 font-medium">Since 2023 • Handcrafted Excellence</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-1">
                <img 
                  src="https://images.pexels.com/photos/6585608/pexels-photo-6585608.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Ceramic craftsmanship"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl hover:border-pink-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-pink-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="text-center mt-20">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic max-w-4xl mx-auto">
              "We don't just make ceramics. We craft <span className="text-pink-400 font-medium">experiences</span> 
              that transform the mundane into the <span className="text-purple-400 font-medium">magical</span>."
            </blockquote>
            <div className="mt-8">
              <div className="text-pink-400 font-semibold">— The Enencia Design Team</div>
              <div className="text-gray-500 text-sm">Ceramic Artists & Rebels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;