import { useState } from 'react';

const initProducts = [
  {
    id: '12345abcd',
    name: 'Nadine Chair',
    category: 'chairs',
    price: 249,
    rating: 4.5,
    ratingCount: 629,
    dimensions: {
      width: 50,
      depth: 53,
      height: 80,
    },
    description:
      'The popular Joshua is a mid-century inspired collection with a curved seat and back, designed for maximal comfort.',
    imageUrlPrimary: '/categories/chair_tp.png',
    imageUrlSecondary: '/products/chairs/Joshua-2.jpg',
    productTag: 'new',
    imageGalleryUrl: [
      '/categories/chair_tp.png',
      '/categories/lamp_tp.png',
      '/categories/bed_tp.png',
    ],
  },
  {
    id: '12345abc',
    name: 'Joshua Chair',
    category: 'chairs',
    price: 499,
    rating: 4.5,
    ratingCount: 629,
    dimensions: {
      width: 50,
      depth: 53,
      height: 80,
    },
    description:
      'The popular Joshua is a mid-century inspired collection with a curved seat and back, designed for maximal comfort.',
    imageUrlPrimary: '/categories/chair_tp.png',
    imageUrlSecondary: '/products/chairs/Joshua-2.jpg',
    productTag: 'new',
    imageGalleryUrl: [
      '/categories/chair_tp.png',
      '/categories/lamp_tp.png',
      '/categories/bed_tp.png',
    ],
  },
  {
    id: '12345ab',
    name: 'Jacob Chair',
    category: 'chairs',
    price: 299,
    rating: 4.5,
    ratingCount: 629,
    dimensions: {
      width: 50,
      depth: 53,
      height: 80,
    },
    description:
      'The popular Joshua is a mid-century inspired collection with a curved seat and back, designed for maximal comfort.',
    imageUrlPrimary: '/categories/chair_tp.png',
    imageUrlSecondary: '/products/chairs/Joshua-2.jpg',
    productTag: 'new',
    imageGalleryUrl: [
      '/categories/chair_tp.png',
      '/categories/lamp_tp.png',
      '/categories/bed_tp.png',
    ],
  },
];

export const useCart = (): CartContextValue => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>(initProducts);
  const [cartProductCount, setCartProductCount] = useState<Map<string, number>>(
    new Map([
      ['12345abcd', 1],
      ['12345ab', 3],
      ['12345abc', 2],
    ])
  );

  const addToCart = (product: Product, count: number) => {
    // don't add a product to the products array if it already exists
    if (!cartProducts.some(p => p.id === product.id)) {
      const updatedProducts = [...cartProducts, product];
      setCartProducts(updatedProducts);
    }

    const updatedCounts = new Map(cartProductCount);
    if (updatedCounts.has(product.id)) {
      updatedCounts.set(product.id, updatedCounts.get(product.id)! + count);
    } else {
      updatedCounts.set(product.id, count);
    }

    setCartProductCount(updatedCounts);
  };

  const removeFromCart = (product: Product) => {
    setCartProducts(prevState => prevState.filter(p => p.id !== product.id));

    const updatedCounts = new Map(cartProductCount);
    if (updatedCounts.has(product.id)) {
      updatedCounts.delete(product.id);
    }

    setCartProductCount(updatedCounts);
  };

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  return {
    toggleCart,
    isCartOpen,
    cartProducts,
    cartProductCount,
    addToCart,
    removeFromCart,
  };
};
