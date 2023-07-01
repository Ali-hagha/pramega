import React, { useContext, useEffect } from 'react';
import { CartContext } from '@/context/CartContext';
import CartItems from './CartItems';
import { RiCloseFill } from 'react-icons/ri';
import { currencyFormatter } from '@/helpers';
import { CircularProgress, Fade, Slide } from '@mui/material';
import ActionBtn from '../ActionBtn/ActionBtn';

const CartDrawer = () => {
  const { isCartOpen, toggleCart, cartProducts, getGrandTotal, loading } =
    useContext(CartContext) as CartContextValue;

  // hide overflow on body when sidedrawer is open to stop scrolling
  useEffect(() => {
    if (isCartOpen) document.body.classList.add('overflow-hidden');
    if (!isCartOpen) document.body.classList.remove('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <Fade in={isCartOpen}>
        <div
          className="fixed inset-0 bg-black/50 z-[90] "
          onClick={toggleCart}
        ></div>
      </Fade>

      {/* Sidebar */}
      <Slide in={isCartOpen} direction="left" timeout={200}>
        <div className="fixed  inset-y-0 right-0 max-w-full w-[550px] bg-white z-[100] shadow-lg">
          <div className=" flex flex-col h-full">
            <div className="py-4 px-6  flex items-center justify-between">
              <h2 className="text-xl font-bold">
                My Cart({cartProducts.length})
              </h2>
              <button className="pr-0 p-2 text-3xl" onClick={toggleCart}>
                <RiCloseFill />
              </button>
            </div>
            <div className="overflow-auto">
              <CartItems />
            </div>
            <div className="mt-auto px-6 py-4 bg-white border-t-2 border-t-gray-100">
              <div className="flex justify-between mb-6 items-center">
                <p className="text-xl font-semibold">Grand Total:</p>
                <p className="text-3xl font-semibold">
                  {currencyFormatter.format(getGrandTotal())}
                </p>
              </div>
              <ActionBtn
                disabled={loading}
                onClick={() => console.log('checkout')}
              >
                {/* when loading is true show spinner and hide text */}
                {!loading && <span>Checkout</span>}
              </ActionBtn>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default CartDrawer;
