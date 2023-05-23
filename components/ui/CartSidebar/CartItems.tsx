import CartContext from '@/context/CartContext';
import { currencyFormatter } from '@/helpers';
import Image from 'next/image';
import { useContext } from 'react';
import { RiAddFill, RiDeleteBinLine, RiSubtractFill } from 'react-icons/ri';

const CartItems = () => {
  const { cartProducts, cartProductCount, addToCart, removeFromCart } =
    useContext(CartContext) as CartContextValue;

  const handleIncrementCartItem = (product: Product, count: 1) => {
    if (cartProductCount.get(product.id)! < 6) {
      addToCart(product, count);
    }
  };

  const handleDecrementCartItem = (product: Product, count: -1) => {
    if (cartProductCount.get(product.id)! > 1) {
      addToCart(product, count);
    }
  };

  return (
    <>
      {cartProducts.map(product => {
        return (
          <div key={product.id} className="flex">
            <div className="shrink-0 aspect-square bg-neutral-light flex items-center justify-center p-3 rounded-2xl mr-6">
              <Image
                src={product.imageUrlPrimary}
                alt={product.name}
                width={90}
                height={90}
              />
            </div>
            <div className="flex flex-col w-full justify-between">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500  font-medium mb-1">
                    {product.category}
                  </p>
                  <p className="font-bold text-lg mb-4">{product.name}</p>
                </div>
                <button
                  onClick={() => removeFromCart(product)}
                  className="text-gray-400 text-2xl p-1 hover:text-gray-700 transition-colors self-start"
                >
                  <RiDeleteBinLine />
                </button>
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex items-center justify-center  rounded-lg">
                  <button
                    onClick={() => handleDecrementCartItem(product, -1)}
                    className="p-2 text-lg bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <RiSubtractFill />
                  </button>
                  <div className="w-10 text-center text-lg font-medium">
                    {cartProductCount.get(product.id)}
                  </div>
                  <button
                    onClick={() => handleIncrementCartItem(product, 1)}
                    className="p-2 text-lg  bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <RiAddFill />
                  </button>
                </div>
                <p className="text-3xl font-semibold">
                  {currencyFormatter.format(
                    product.price * cartProductCount.get(product.id)!
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItems;
