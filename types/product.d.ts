type Product = {
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
    primaryImage: { data: { attributes: { url: string } } };
    secondaryImage: { data: { attributes: { url: string } } };
    imageGallery: { data: [{ attributes: { url: string } }] };
  };
};
