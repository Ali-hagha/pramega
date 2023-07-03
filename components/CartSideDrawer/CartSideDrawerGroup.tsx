import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';
import CartSideDrawerItem from './CartSideDrawerItem';

const CartSideDrawerGroup = () => {
  const { cartProducts } = useContext(CartContext) as CartContextValue;

  return (
    <div className="px-6 overflow-auto">
      {/* show some text when the cart is empty */}
      {cartProducts.length < 1 && (
        <div className="flex flex-1 items-center justify-center">
          <h2 className="text-xl font-semibold text-gray-500">
            Your cart is empty
          </h2>
        </div>
      )}
      {cartProducts.map((product, i, productsArr) => {
        return (
          <CartSideDrawerItem
            key={i}
            product={product}
            productsArr={productsArr}
            productIndex={i}
          />
        );
      })}
    </div>
  );
};

export default CartSideDrawerGroup;
