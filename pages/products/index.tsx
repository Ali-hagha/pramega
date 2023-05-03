import Crumbs from '@/components/ui/Crumbs/Crumbs';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import React from 'react';

const products = [
  {
    productName: 'joshua chair',
    price: 239,
    baseImage: '',
    secondaryImage: '',
    productTag: 'new',
  },
];
const index = () => {
  return (
    <div className="px-0 md:px-16 mb-20">
      <Crumbs />
      <div className="grid grid-cols-4 gap-5">
        <ProductCard product={products[0]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[0]} />
      </div>
    </div>
  );
};

export default index;
