import { Rating } from '@mui/material';
import React from 'react';
import ProductDimensions from './ProductDimensions';
import ProductCounter from './ProductCounter';

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    rating: number;
    ratingCount: number;
    dimensions: {
      width: number;
      depth: number;
      height: number;
    };
    description: string;
  };
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ProductInfo = ({ product, count, setCount }: Props) => {
  return (
    <div className="max-w-[500px] lg:max-w-full px-0 sm:px-8 lg:px-16 xl:px-24 flex flex-col">
      <h2 className="text-3xl font-bold capitalize mb-4">{product.name}</h2>

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

      <ProductDimensions dimensions={product.dimensions} />

      <ProductCounter count={count} setCount={setCount} />

      <button className="rounded-lg bg-neutral-dark px-6 py-4  w-full font-bold md:font-semibold text-base md:text-lg uppercase shadow-[0_0_20px_#ebfc4b]    hover:bg-neutral-dark/90 transition-colors shadow-primary text-primary">
        add to cart - ${product.price * count}
      </button>
    </div>
  );
};

export default ProductInfo;
