import Crumbs from '@/components/ui/Crumbs/Crumbs';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ImageGallery from '../../../../components/ui/ImageGallery/ImageGallery';
import ProductInfo from './ProductInfo';

const product: Product = {
  id: '12345abcd',
  name: 'Joshua Chair',
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
  imageUrlPrimary: '/products/chairs/Joshua-3.png',
  imageUrlSecondary: '/products/chairs/Joshua-2.jpg',
  productTag: 'new',
  imageGalleryUrl: [
    '/categories/chair_tp.png',
    '/categories/lamp_tp.png',
    '/categories/bed_tp.png',
  ],
};

const ProductDetails = () => {
  const [productCount, setProductCount] = useState(1);

  return (
    <div className="md:px-10 mb-20 pt-6">
      <Crumbs crumb={{ title: product.name, href: product.id }} />
      <div className="flex flex-col lg:flex-row items-start justify-center pt-6">
        <div className="flex-1 w-full lg:w-1/2  ">
          <ImageGallery images={product.imageGalleryUrl} />
        </div>
        <div className="flex-1  lg:w-1/2">
          <ProductInfo
            count={productCount}
            setCount={setProductCount}
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
