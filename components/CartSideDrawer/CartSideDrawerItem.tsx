import { CartContext } from '@/context/CartContext';
import { currencyFormatter } from '@/helpers';
import { CartContextValue } from '@/types/cartContextvalue';
import { Product } from '@/types/product';
import { CircularProgress } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { RiAddFill, RiDeleteBinLine, RiSubtractFill } from 'react-icons/ri';

type Props = {
  product: Product;
  productsArr: Product[];
  productIndex: number;
};

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

const CartSideDrawerItem = ({ product, productsArr, productIndex }: Props) => {
  return (
    <div>
      <div className="flex py-4">
        <Thumbnail product={product} />
        <div className="flex flex-col w-full justify-between">
          <div className="flex justify-between">
            <ProductInfo product={product} />
            <RemoveFromCartBtn product={product} />
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between ">
            <ProductCountUpdater product={product} />
            <ProductPrice product={product} />
          </div>
        </div>
      </div>
      <Divider productIndex={productIndex} productsArr={productsArr} />
    </div>
  );
};

const Thumbnail = ({ product }: { product: Product }) => {
  const { toggleCart } = useContext(CartContext) as CartContextValue;

  return (
    <div className="shrink-0 grow-0  aspect-square bg-neutral-light flex items-center justify-center overflow-hidden rounded-2xl mr-6">
      <Link
        href={`/products/${product.attributes.category}/${product.attributes.productId}`}
        onClick={toggleCart}
      >
        <Image
          src={`${strapiUrl}${product.attributes.primaryImage.data.attributes.url}`}
          alt={product.attributes.name}
          width={125}
          height={125}
        />
      </Link>
    </div>
  );
};

const ProductInfo = ({ product }: { product: Product }) => {
  const { toggleCart } = useContext(CartContext) as CartContextValue;

  return (
    <div>
      <Link
        href={`/products/${product.attributes.category}`}
        onClick={toggleCart}
      >
        <p className="text-gray-500  font-medium mb-1">
          {product.attributes.category}
        </p>
      </Link>
      <Link
        href={`/products/${product.attributes.category}/${product.attributes.productId}`}
        onClick={toggleCart}
      >
        <p className="font-bold text-lg mb-4">{product.attributes.name}</p>
      </Link>
    </div>
  );
};

const RemoveFromCartBtn = ({ product }: { product: Product }) => {
  const { removeFromCart, loading } = useContext(
    CartContext
  ) as CartContextValue;

  const handleRemoveFromCart = (product: Product) => {
    removeFromCart(product);
  };

  return (
    <button
      onClick={() => handleRemoveFromCart(product)}
      disabled={loading}
      className="text-gray-400 text-2xl p-1 hover:text-gray-700 transition-colors self-start "
    >
      <RiDeleteBinLine />
    </button>
  );
};

const ProductCountUpdater = ({ product }: { product: Product }) => {
  return (
    <div className="flex sm:items-center sm:justify-center mt-6 sm:mt-0 rounded-lg">
      <DecrementCartItemBtn product={product} />

      <ItemCountInCart product={product} />

      <IncrementCartItemBtn product={product} />
    </div>
  );
};

const ItemCountInCart = ({ product }: { product: Product }) => {
  const { loading, productToAddToCartId, cartProductCount } = useContext(
    CartContext
  ) as CartContextValue;
  return (
    <div className="w-10 text-center text-lg font-medium flex items-center justify-center">
      {/* show spinner only on the product that is changing */}
      {loading && productToAddToCartId === product.id && (
        <CircularProgress className="text-neutral-dark/70" size={24} />
      )}
      {/* hide text only on the product that is changing */}
      {!(loading && productToAddToCartId === product.id) &&
        cartProductCount.get(product.id)}
    </div>
  );
};

const IncrementCartItemBtn = ({ product }: { product: Product }) => {
  const { loading, addToCart } = useContext(CartContext) as CartContextValue;

  const handleIncrementCartItem = (product: Product, count: 1) => {
    addToCart(product, count);
  };

  return (
    <button
      onClick={() => handleIncrementCartItem(product, 1)}
      disabled={loading}
      className="p-2 text-lg  bg-gray-100 rounded-md hover:bg-gray-200 transition-colors disabled:bg-transparent disabled:opacity-30"
    >
      <RiAddFill />
    </button>
  );
};

const DecrementCartItemBtn = ({ product }: { product: Product }) => {
  const { loading, addToCart } = useContext(CartContext) as CartContextValue;

  const handleDecrementCartItem = (product: Product, count: -1) => {
    addToCart(product, count);
  };

  return (
    <button
      onClick={() => handleDecrementCartItem(product, -1)}
      disabled={loading}
      className="p-2 text-lg bg-gray-100 rounded-md hover:bg-gray-200 transition-colors disabled:bg-transparent disabled:opacity-30"
    >
      <RiSubtractFill />
    </button>
  );
};

const ProductPrice = ({ product }: { product: Product }) => {
  const { cartProductCount } = useContext(CartContext) as CartContextValue;

  return (
    <p className="text-2xl font-bold">
      {currencyFormatter.format(
        product.attributes.price * cartProductCount.get(product.id)!
      )}
    </p>
  );
};

const Divider = ({
  productIndex,
  productsArr,
}: {
  productIndex: number;
  productsArr: Product[];
}) => {
  if (productIndex !== productsArr.length - 1) {
    return <div className="w-full border-b-primary/80 border-b-2"></div>;
  }
  return <></>;
};

export default CartSideDrawerItem;
