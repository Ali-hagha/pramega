import Crumbs from '@/components/ui/Crumbs/Crumbs';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import ProductsSidebar from '@/components/ui/ProductsSidebar/ProductsSidebar';
import React from 'react';

const products = [
  {
    productName: 'joshua chair',
    price: 239,
    baseImage: '/products/chairs/Joshua-3.png',
    secondaryImage: '/products/chairs/Joshua-2.jpg',
    productTag: 'new',
    isFavorite: false,
  },
];
const index = () => {
  return (
    <div className="mb-20 md:px-10">
      <Crumbs classes="" />
      <div className="flex mt-6 pt-6">
        <ProductsSidebar />
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 flex-1">
          <ProductCard product={products[0]} />
          <ProductCard product={products[0]} />
          <ProductCard product={products[0]} />
          <ProductCard product={products[0]} />
          <ProductCard product={products[0]} />
          <ProductCard product={products[0]} />
        </div>
      </div>
    </div>
  );
};

export default index;
