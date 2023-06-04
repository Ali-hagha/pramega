type Product = {
  id: number;
  attributes: {
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
    productTag: string;
    primaryImage: { data: { attributes: { url: string } } };
    secondaryImage: { data: { attributes: { url: string } } };
    imageGalleryUrl: { data: [{ attributes: { url: string } }] };
  };
};
