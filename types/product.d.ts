type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  ratingCount: number;
  dimensions: {
    width: number;
    depth: number;
    height: number;
  };
  description: string;
  imageUrlPrimary: string;
  imageUrlSecondary: string;
  productTag: string;
  imageGalleryUrl: string[];
};
