import { CircularProgress, Rating } from '@mui/material';
import React, { useContext } from 'react';
import ProductDimensions from './ProductDimensions';
import ProductCounter from './ProductCounter';
import { CartContext } from '@/context/CartContext';

type Props = {
  product: Product;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ProductInfo = ({ product, count, setCount }: Props) => {
  const { addToCart, loading, isCartOpen } = useContext(
    CartContext
  ) as CartContextValue;

  const handleAddToCart = (product: Product, count: number) => {
    addToCart(product, count);
  };
  return (
    <div className="lg:max-w-[500px] max-w-full px-0 lg:px-8 xl:px-16 flex flex-col ">
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
        // disable the button only if the cart is not open
        disabled={loading && !isCartOpen}
        className="flex items-center justify-center rounded-lg bg-neutral-dark px-6 py-4  w-full font-bold md:font-semibold text-base md:text-lg uppercase shadow-[0_0_20px_#ebfc4b] hover:shadow-[0_0_40px_#ebfc4b] hover:bg-black transition-all shadow-primary text-primary disabled:bg-neutral-500 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {/* show spinner only if the cart is not open */}
        {loading && !isCartOpen && (
          <CircularProgress sx={{ color: 'rgb(235,252,75)' }} size={28} />
        )}
        <span className="px-6">
          add to cart - ${product.attributes.price * count}
        </span>
      </button>
    </div>
  );
};

export default ProductInfo;
