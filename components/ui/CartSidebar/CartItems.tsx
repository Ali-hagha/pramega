import CartContext from '@/context/CartContext';
import Image from 'next/image';
import { useContext } from 'react';

const CartItems = () => {
  const { cartProducts, cartProductCount, addToCart } = useContext(
    CartContext
  ) as CartContextValue;

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
            <div className="aspect-square bg-neutral-light flex items-center justify-center p-3 rounded-2xl mr-6">
              <Image
                src={product.imageUrlPrimary}
                alt={product.name}
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500  font-medium">{product.category}</p>
              <p className="font-bold text-lg">{product.name}</p>
              <div className="flex">
                <div>
                  <button onClick={() => handleDecrementCartItem(product, -1)}>
                    -
                  </button>
                  <div>{cartProductCount.get(product.id)}</div>
                  <button onClick={() => handleIncrementCartItem(product, 1)}>
                    +
                  </button>
                </div>
                <p>${product.price * cartProductCount.get(product.id)!}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItems;
