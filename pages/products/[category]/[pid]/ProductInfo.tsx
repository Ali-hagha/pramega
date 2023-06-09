import { Rating } from '@mui/material';
import React, { useContext } from 'react';
import ProductDimensions from './ProductDimensions';
import ProductCounter from './ProductCounter';
import CartContext from '@/context/CartContext';

type Props = {
  product: Product;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ProductInfo = ({ product, count, setCount }: Props) => {
  const { addToCart } = useContext(CartContext) as CartContextValue;

  const handleAddToCart = (product: Product, count: number) => {
    addToCart(product, count);
  };
  return (
    <div className="max-w-[500px] lg:max-w-full px-0 sm:px-8 lg:px-16 xl:px-24 flex flex-col">
      <h2 className="text-3xl font-bold capitalize mb-4">
        {product.attributes.name}
      </h2>

      <div className="flex items-center mb-12">
        <Rating
          name="read-only"
          value={product.attributes.rating}
          precision={0.5}
          readOnly
        />
        <p className="ml-4 text-sm md:text-base text-neutral-dark/70 font-light">
          {product.attributes.ratingCount} Reviews
        </p>
      </div>

      <p className="font-medium text-base md:text-lg text-neutral-dark/80 mb-6">
        {product.attributes.description}
      </p>

      <p className="text-2xl md:text-3xl font-bold md:font-semibold mb-12">
        ${product.attributes.price}{' '}
        <span className="text-xs text-neutral-dark/40 font-semibold">
          per item
        </span>
      </p>

      <ProductDimensions product={product.attributes} />

      <ProductCounter count={count} setCount={setCount} />

      <button
        onClick={() => handleAddToCart(product, count)}
        className="rounded-lg bg-neutral-dark px-6 py-4  w-full font-bold md:font-semibold text-base md:text-lg uppercase shadow-[0_0_20px_#ebfc4b]    hover:bg-neutral-dark/90 transition-colors shadow-primary text-primary"
      >
        add to cart - ${product.attributes.price * count}
      </button>
    </div>
  );
};

export default ProductInfo;
