import Crumbs from '@/components/ui/Crumbs/Crumbs';
import ProductCounter from '@/pages/products/[pid]/ProductCounter';
import { Rating } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ProductDimensions from './ProductDimensions';
import ImageGallery from '../../../components/ui/ImageGallery/ImageGallery';
import ProductInfo from './ProductInfo';

const product = {
  id: '12345abcd',
  name: 'Joshua Chair',
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
};

const ProductDetails = () => {
  const [productCount, setProductCount] = useState(1);
  const {
    query: { pid },
  } = useRouter();

  return (
    <div className="px-0 md:px-16 mb-20">
      <Crumbs
        title={product.name}
        href={`${pid}`}
        classes="mb-6 text-sm text-neutral-dark/50"
      />
      <div className="flex flex-col lg:flex-row items-start justify-center">
        <div className="flex-1 w-full lg:w-1/2  ">
          <ImageGallery />
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
