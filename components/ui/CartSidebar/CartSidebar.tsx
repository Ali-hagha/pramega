import React, { Fragment, useEffect } from 'react';
import { Transition } from '@headlessui/react';

type Props = {
  isCartOpen: boolean;
  toggleCart: () => void;
};

const CartSidebar = ({ isCartOpen, toggleCart }: Props) => {
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
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        as={Fragment}
      >
        <div
          className="fixed inset-0 bg-black/50 z-[90]"
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
        <div className="fixed  inset-y-0 right-0 max-w-full w-64 bg-white z-[100] shadow-lg">
          <div className="p-4">
            <button
              className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
              onClick={toggleCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            {/* Sidebar content */}
          </div>
        </div>
      </Transition>
    </>
  );
};

export default CartSidebar;
