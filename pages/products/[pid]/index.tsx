import Crumbs from '@/components/ui/Crumbs/Crumbs';
import ProductCounter from '@/pages/products/[pid]/ProductCounter';
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Dimensions from './Dimensions';
import ImageGallery from './ImageGallery';

const product = {
  id: '12345abcd',
  name: 'Joshua Chair',
  price: 249,
  rating: 4.5,
  ratingCount: 629,
  dimensions: {
    width: 19.7,
    depth: 20.9,
    height: 31.5,
  },
  description:
    'The popular Joshua is a mid-century inspired collection with a curved seat and back, designed for maximal comfort.',
};

const ProductDetails = () => {
  const [count, setCount] = useState(1);
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
          <div className="max-w-[500px] lg:max-w-full px-0 sm:px-8 lg:px-16 xl:px-24 flex flex-col">
            <h2 className="text-3xl font-bold capitalize mb-4">
              {product.name}
            </h2>

            <div className="flex items-center mb-12">
              <Rating
                name="read-only"
                value={product.rating}
                precision={0.5}
                readOnly
              />
              <p className="ml-4 text-sm md:text-base text-neutral-dark/70 font-light">
                {product.ratingCount} Reviews
              </p>
            </div>

            <p className="font-medium text-base md:text-lg text-neutral-dark/80 mb-6">
              {product.description}
            </p>

            <p className="text-2xl md:text-3xl font-bold md:font-semibold mb-12">
              ${product.price}{' '}
              <span className="text-xs text-neutral-dark/40 font-semibold">
                per item
              </span>
            </p>

            <Dimensions dimensions={product.dimensions} />

            <ProductCounter count={count} setCount={setCount} />

            <button className="rounded-lg bg-neutral-dark px-6 py-4  w-full font-bold md:font-semibold text-base md:text-lg uppercase shadow-[0_0_20px_#ebfc4b]    hover:bg-neutral-dark/90 transition-colors shadow-primary text-primary">
              add to cart - ${product.price * count}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
