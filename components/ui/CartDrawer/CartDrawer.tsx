import React, { Fragment, useContext, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { CartContext } from '@/context/CartContext';
import CartItems from './CartItems';
import { RiCloseFill } from 'react-icons/ri';
import { currencyFormatter } from '@/helpers';
import { CircularProgress } from '@mui/material';

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
      <Transition
        show={isCartOpen}
        enter="transition-opacity ease-linear duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        as={Fragment}
      >
        <div
          className="fixed inset-0 bg-black/50 z-[90] "
          onClick={toggleCart}
        ></div>
      </Transition>

      {/* Sidebar */}
      <Transition
        show={isCartOpen}
        enter="transition-transform ease-in-out duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        as={Fragment}
      >
        <div className="fixed  inset-y-0 right-0 max-w-full w-[550px] bg-white z-[100] shadow-lg">
          <div className=" flex flex-col h-full">
            <div className="py-4 px-6  flex items-center justify-between">
              <h2 className="text-xl font-bold">
                My Cart({cartProducts.length})
              </h2>
              <button className=" pr-0 p-2 text-3xl " onClick={toggleCart}>
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

              <button
                // disable the button only if the cart is not open
                disabled={loading}
                className="flex items-center justify-center rounded-lg bg-neutral-dark px-6 py-4  w-full font-bold md:font-semibold text-base md:text-lg uppercase shadow-[0_0_20px_#ebfc4b] hover:shadow-[0_0_40px_#ebfc4b] hover:bg-black transition-all shadow-primary text-primary disabled:bg-neutral-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {/* show spinner only if the cart is not open */}
                {loading && (
                  <CircularProgress
                    sx={{ color: 'rgb(235,252,75)' }}
                    size={28}
                  />
                )}
                {!loading && <span>Checkout</span>}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default CartDrawer;