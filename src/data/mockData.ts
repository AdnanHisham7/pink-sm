import { Category, Product } from '../types';

export const categories: Category[] = [
  {
    _id: '1',
    name: 'Retro Toilets',
    slug: 'retro-toilets',
    description: 'Bold statement pieces that transform your space',
    image: 'https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    _id: '2',
    name: 'Artistic Basins',
    slug: 'artistic-basins',
    description: 'Sculptural sinks that blur the line between art and function',
    image: 'https://images.pexels.com/photos/6585608/pexels-photo-6585608.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    _id: '3',
    name: 'Colored Series',
    slug: 'colored-series',
    description: 'Pastel dreams and bold statements in ceramic',
    image: 'https://images.pexels.com/photos/6585613/pexels-photo-6585613.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    _id: '4',
    name: 'Vintage Table Tops',
    slug: 'vintage-table-tops',
    description: 'Countertop ceramics with nostalgic charm',
    image: 'https://images.pexels.com/photos/6585615/pexels-photo-6585615.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    _id: '5',
    name: 'Sculptural Urinals',
    slug: 'sculptural-urinals',
    description: 'Commercial artistry meets modern design',
    image: 'https://images.pexels.com/photos/6585617/pexels-photo-6585617.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    _id: '6',
    name: 'Wall-Hung Neo Classics',
    slug: 'wall-hung-neo-classics',
    description: 'Space-saving elegance with retro flair',
    image: 'https://images.pexels.com/photos/6585620/pexels-photo-6585620.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const products: Product[] = [
  {
    _id: 'p1',
    name: 'DreamCurve 78',
    description: 'Blush Pink Minimalism, 1970s Muse. A sculptural basin that captures the essence of retro elegance with its flowing curves and soft pink ceramic finish.',
    images: [
      'https://images.pexels.com/photos/6585608/pexels-photo-6585608.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6585615/pexels-photo-6585615.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6585613/pexels-photo-6585613.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    sketchImages: [
      'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5591664/pexels-photo-5591664.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specifications: [
      'Hand-glazed ceramic finish',
      'Dimensions: 60cm x 40cm x 15cm',
      'Overflow protection included',
      'Compatible with standard faucets',
      'Easy-clean surface coating',
      'Made from sustainable materials'
    ],
    category: categories[1],
    price: 895,
    slug: 'dreamcurve-78',
    featured: true,
    createdAt: new Date('2024-01-15')
  },
  {
    _id: 'p2',
    name: 'Midnight Wave',
    description: 'Deep Blue Sophistication. A bold statement piece that brings oceanic tranquility to your space with its dramatic midnight blue glaze.',
    images: [
      'https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6585620/pexels-photo-6585620.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    sketchImages: [
      'https://images.pexels.com/photos/5591665/pexels-photo-5591665.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specifications: [
      'Midnight blue ceramic glaze',
      'Dual-flush technology',
      'Soft-close seat included',
      'Water-efficient design',
      'Premium hardware finish',
      'Ergonomic comfort height'
    ],
    category: categories[0],
    price: 1250,
    slug: 'midnight-wave',
    featured: true,
    createdAt: new Date('2024-01-20')
  },
  {
    _id: 'p3',
    name: 'Terracotta Bloom',
    description: 'Earthy Warmth Reimagined. Brings the organic beauty of terracotta into modern spaces with contemporary functionality.',
    images: [
      'https://images.pexels.com/photos/6585613/pexels-photo-6585613.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6585615/pexels-photo-6585615.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    sketchImages: [
      'https://images.pexels.com/photos/5591666/pexels-photo-5591666.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specifications: [
      'Natural terracotta finish',
      'Handcrafted details',
      'Heat-resistant surface',
      'Unique texture patterns',
      'Sustainable clay sourcing',
      'Custom sizing available'
    ],
    category: categories[2],
    price: 720,
    slug: 'terracotta-bloom',
    featured: true,
    createdAt: new Date('2024-01-25')
  },
  {
    _id: 'p4',
    name: 'Olive Essence',
    description: 'Sage Green Serenity. A calming presence that brings natural harmony to contemporary bathroom design.',
    images: [
      'https://images.pexels.com/photos/6585617/pexels-photo-6585617.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    sketchImages: [],
    specifications: [
      'Sage green ceramic finish',
      'Modern geometric form',
      'Scratch-resistant surface',
      'Easy maintenance design',
      'Color-matched hardware',
      'Professional installation'
    ],
    category: categories[2],
    price: 680,
    slug: 'olive-essence',
    featured: false,
    createdAt: new Date('2024-02-01')
  },
  {
    _id: 'p5',
    name: 'Cream Classic',
    description: 'Timeless Elegance. A versatile cream finish that complements any design aesthetic while maintaining retro charm.',
    images: [
      'https://images.pexels.com/photos/6585620/pexels-photo-6585620.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    sketchImages: [],
    specifications: [
      'Classic cream glaze',
      'Traditional form factor',
      'Stain-resistant coating',
      'Standard mounting',
      'Warranty included',
      'Quick installation'
    ],
    category: categories[3],
    price: 540,
    slug: 'cream-classic',
    featured: false,
    createdAt: new Date('2024-02-05')
  },
  {
    _id: 'p6',
    name: 'Neon Dreams',
    description: 'Electric Pink Statement. For those who dare to be different, this vibrant piece electrifies any space.',
    images: [
      'https://images.pexels.com/photos/6585615/pexels-photo-6585615.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    sketchImages: [],
    specifications: [
      'Electric pink finish',
      'UV-resistant coating',
      'Bold geometric design',
      'Commercial grade',
      'Custom installation',
      'Limited edition'
    ],
    category: categories[4],
    price: 1450,
    slug: 'neon-dreams',
    featured: true,
    createdAt: new Date('2024-02-10')
  }
];