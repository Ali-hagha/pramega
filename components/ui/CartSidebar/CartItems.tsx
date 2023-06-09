import CartContext from '@/context/CartContext';
import { currencyFormatter } from '@/helpers';
import { CircularProgress } from '@mui/material';
import Image from 'next/image';
import { useContext, useRef } from 'react';
import { RiAddFill, RiDeleteBinLine, RiSubtractFill } from 'react-icons/ri';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

const CartItems = () => {
  const { cartProducts, cartProductCount, addToCart, removeFromCart, loading } =
    useContext(CartContext) as CartContextValue;

  const productIdEdit = useRef(-1);

  const handleIncrementCartItem = (product: Product, count: 1) => {
    productIdEdit.current = product.id;
    if (cartProductCount.get(product.id)! < 6) {
      addToCart(product, count);
    }
    setTimeout(() => {
      productIdEdit.current = -1;
    }, 1000);
  };

  const handleDecrementCartItem = (product: Product, count: -1) => {
    productIdEdit.current = product.id;
    if (cartProductCount.get(product.id)! > 1) {
      addToCart(product, count);
    }
    setTimeout(() => {
      productIdEdit.current = -1;
    }, 1000);
  };

  const handleRemoveFromCart = (product: Product) => {
    removeFromCart(product);
  };

  return (
    <div className="p-6">
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
              <div className="shrink-0 grow-0 p-1 aspect-square bg-neutral-light flex items-center justify-center overflow-hidden rounded-2xl mr-6">
                <Image
                  src={`${strapiUrl}${product.attributes.primaryImage.data.attributes.url}`}
                  alt={product.attributes.name}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col w-full justify-between">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500  font-medium mb-1">
                      {product.attributes.category}
                    </p>
                    <p className="font-bold text-lg mb-4">
                      {product.attributes.name}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(product)}
                    disabled={loading}
                    className="text-gray-400 text-2xl p-1 hover:text-gray-700 transition-colors self-start "
                  >
                    <RiDeleteBinLine />
                  </button>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center  rounded-lg">
                    <button
                      onClick={() => handleDecrementCartItem(product, -1)}
                      disabled={loading}
                      className="p-2 text-lg bg-gray-100 rounded-md hover:bg-gray-200 transition-colors disabled:bg-transparent disabled:opacity-30"
                    >
                      <RiSubtractFill />
                    </button>
                    <div className="w-10 text-center text-lg font-medium flex items-center justify-center">
                      {/* show spinner only on the product that is changing */}
                      {loading && productIdEdit.current === product.id && (
                        <CircularProgress
                          className="text-neutral-dark/70"
                          size={24}
                        />
                      )}
                      {/* hide text only on the product that is changing */}
                      {!(loading && productIdEdit.current === product.id) &&
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
