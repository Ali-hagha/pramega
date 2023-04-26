import Crumbs from '@/components/ui/Crumbs/Crumbs';
import { Breadcrumbs, Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const product = {
  id: '12345abcd',
  name: 'Joshua Chair',
  rating: 4.5,
  ratingCount: 629,
  description:
    'The popular Joshua is a mid-century inspired collection with a curved seat and back, designed for maximal comfort.',
};

const ProductDetails = () => {
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
        <div className="flex-1 w-1/2">
          <Image
            src={'/categories/chair_tp.png'}
            alt={''}
            width={600}
            height={600}
          />
        </div>
        <div className="flex-1 w-1/2">
          <div className="px-24">
            <h2 className="text-3xl font-bold capitalize mb-6">
              {product.name}
            </h2>
            <div className="flex">
              <Rating
                name="read-only"
                value={product.rating}
                precision={0.5}
                readOnly
                className="mb-6"
              />
              <p className="ml-4  text-neutral-dark/70 font-light">
                {product.ratingCount} Reviews
              </p>
            </div>
            <p className="font-medium text-lg text-neutral-dark/80">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
