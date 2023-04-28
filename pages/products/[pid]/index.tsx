import Crumbs from '@/components/ui/Crumbs/Crumbs';
import ProductCounter from '@/pages/products/[pid]/ProductCounter';
import { Breadcrumbs, Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Dimensions from './Dimensions';

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
    <div className="px-20">
      <Crumbs
        title={product.name}
        href={`/products/${pid}`}
        classes="mb-6 text-sm text-neutral-dark/50"
      />
      <div className="flex">
        <div className="flex-1 w-1/2 flex items-center justify-center">
          <Image
            src={'/categories/chair_tp.png'}
            alt={''}
            width={600}
            height={600}
          />
        </div>
        <div className="flex-1 w-1/2">
          <div className="px-32 flex flex-col">
            <h2 className="text-3xl font-bold capitalize mb-4">
              {product.name}
            </h2>

            <div className="flex">
              <Rating
                name="read-only"
                value={product.rating}
                precision={0.5}
                readOnly
                className="mb-8"
              />
              <p className="ml-4  text-neutral-dark/70 font-light">
                {product.ratingCount} Reviews
              </p>
            </div>

            <p className="font-medium text-lg text-neutral-dark/80 mb-4">
              {product.description}
            </p>

            <p className="text-3xl font-semibold mb-10">
              ${product.price}{' '}
              <span className="text-xs text-neutral-dark/40 font-semibold">
                per item
              </span>
            </p>

            <Dimensions dimensions={product.dimensions} />

            <ProductCounter count={count} setCount={setCount} />

            <button className="rounded-lg bg-neutral-dark px-6 py-4 text-neutral-light w-full font-semibold text-lg uppercase shadow-lg hover:bg-neutral-dark/90 transition-colors ">
              add to cart - ${product.price * count}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
