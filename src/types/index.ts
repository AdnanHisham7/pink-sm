export interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  images: string[];
  sketchImages: string[];
  specifications: string[];
  category: Category;
  price: number;
  slug: string;
  featured: boolean;
  createdAt: Date;
}

export interface FilterState {
  category: string;
  search: string;
}