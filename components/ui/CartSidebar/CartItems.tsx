import CartContext from '@/context/CartContext';
import { currencyFormatter } from '@/helpers';
import { CircularProgress } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { RiAddFill, RiDeleteBinLine, RiSubtractFill } from 'react-icons/ri';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

const CartItems = () => {
  const {
    toggleCart,
    cartProducts,
    cartProductCount,
    addToCart,
    removeFromCart,
    loading,
    productToAddToCartId,
  } = useContext(CartContext) as CartContextValue;

  const handleIncrementCartItem = (product: Product, count: 1) => {
    addToCart(product, count);
  };

  const handleDecrementCartItem = (product: Product, count: -1) => {
    addToCart(product, count);
  };

  const handleRemoveFromCart = (product: Product) => {
    removeFromCart(product);
  };

  return (
    <div className="px-6">
      {/* show some text when the cart is empty */}
      {cartProducts.length < 1 && (
        <div className="flex flex-1 items-center justify-center">
          <h2 className="text-xl font-semibold text-gray-500">
            Your cart is empty
          </h2>
        </div>
      )}
      {cartProducts.map((product, i, arr) => {
        return (
          <div key={product.id}>
            <div className="flex py-4">
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
              <div className="flex flex-col w-full justify-between">
                <div className="flex justify-between">
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
                      <p className="font-bold text-lg mb-4">
                        {product.attributes.name}
                      </p>
                    </Link>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(product)}
                    disabled={loading}
                    className="text-gray-400 text-2xl p-1 hover:text-gray-700 transition-colors self-start "
                  >
                    <RiDeleteBinLine />
                  </button>
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between ">
                  <div className="flex sm:items-center sm:justify-center mt-6 sm:mt-0 rounded-lg">
                    <button
                      onClick={() => handleDecrementCartItem(product, -1)}
                      disabled={loading}
                      className="p-2 text-lg bg-gray-100 rounded-md hover:bg-gray-200 transition-colors disabled:bg-transparent disabled:opacity-30"
                    >
                      <RiSubtractFill />
                    </button>
                    <div className="w-10 text-center text-lg font-medium flex items-center justify-center">
                      {/* show spinner only on the product that is changing */}
                      {loading && productToAddToCartId === product.id && (
                        <CircularProgress
                          className="text-neutral-dark/70"
                          size={24}
                        />
                      )}
                      {/* hide text only on the product that is changing */}
                      {!(loading && productToAddToCartId === product.id) &&
                        cartProductCount.get(product.id)}
                    </div>
                    <button
                      onClick={() => handleIncrementCartItem(product, 1)}
                      disabled={loading}
                      className="p-2 text-lg  bg-gray-100 rounded-md hover:bg-gray-200 transition-colors disabled:bg-transparent disabled:opacity-30"
                    >
                      <RiAddFill />
                    </button>
                  </div>
                  <p className="text-2xl font-bold">
                    {currencyFormatter.format(
                      product.attributes.price *
                        cartProductCount.get(product.id)!
                    )}
                  </p>
                </div>
              </div>
            </div>
            {i !== arr.length - 1 && (
              <div className="w-full border-b-primary/80 border-b-2"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
