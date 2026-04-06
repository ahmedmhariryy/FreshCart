export type Root = Root2[];
export interface Root2 {
  sold?: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  reviews: Review[];
  id: string;
  availableColors?: string[];
  priceAfterDiscount?: number;
}
export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}
export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AllCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
export interface QuantityProps {
  maxQty: number;
  price: number;
}
export interface User {
  _id: string;
  name: string;
}

export interface Review {
  _id: string;
  rating: number;
  review: string;
  product: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
