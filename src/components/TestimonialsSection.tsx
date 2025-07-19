import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Interior Designer',
      company: 'Luxe Spaces Studio',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'My entire studio\'s aesthetic changed with Enencia. Their retro-pink basin became the centerpiece that clients always remember.',
      rating: 5,
      project: 'Modern Loft Renovation'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Boutique Architect',
      company: 'Rebel Design Co.',
      avatar: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Enencia doesn\'t just make ceramics; they craft conversation pieces. Every project feels more alive with their bold designs.',
      rating: 5,
      project: 'Creative Agency HQ'
    },
    {
      name: 'Luna Petrov',
      role: 'Creative Director',
      company: 'Avant-Garde Homes',
      avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'The quality and artistic vision is unmatched. Their vintage-inspired pieces add that rebellious charm our luxury clients crave.',
      rating: 5,
      project: 'Penthouse Collection'
    }
  ];

  const clientLogos = [
    'Luxe Spaces Studio',
    'Rebel Design Co.',
    'Avant-Garde Homes',
    'Neo Interiors',
    'Bold Architecture',
    'Creative Sanctuaries'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Loved by </span>
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Creatives
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how leading designers and architects transform spaces with Enencia
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-pink-400/30 group-hover:text-pink-400/50 transition-colors duration-300">
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="text-pink-400 fill-current mr-1"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-pink-500/30"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-pink-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-xs">{testimonial.company}</div>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-400 text-xs font-medium rounded-full">
                    {testimonial.project}
                  </span>
                </div>

                {/* Grain Texture */}
                <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-400 mb-8">Trusted by Creative Professionals</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {clientLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 text-gray-500 font-medium hover:text-pink-400 transition-colors duration-300 cursor-default"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-block p-8 bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Next Project?
              </h3>
              <p className="text-gray-400 mb-6">
                Join hundreds of designers who trust Enencia for bold, artistic ceramic solutions.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 transition-all duration-300">
                Get Trade Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;