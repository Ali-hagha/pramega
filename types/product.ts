import { StrapiImage } from './types';
export interface Product {
  id: number;
  attributes: {
    productId: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    ratingCount: number;
    width: number;
    depth: number;
    height: number;
    description: string;
    productTag: string;
    primaryImage: { data: StrapiImage };
    secondaryImage: { data: StrapiImage };
    imageGallery: { data: StrapiImage[] };
  };
}
