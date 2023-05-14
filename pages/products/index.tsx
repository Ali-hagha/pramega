import ProductsGrid from '@/components/ui/ProductsGrid/ProductsGrid';
import ProductsSidebar from '@/components/ui/ProductsSidebar/ProductsSidebar';
import React from 'react';
import { NextPageWithLayout } from '../_app';
import ProductsLayout from '@/components/ui/ProductsLayout/ProductsLayout';

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

const Products: NextPageWithLayout = () => {
  return (
    <>
      <ProductsSidebar />
      <ProductsGrid products={products} />
    </>
  );
};

Products.getLayout = function getLayout(page: React.ReactElement) {
  return <ProductsLayout>{page}</ProductsLayout>;
};

export default Products;
