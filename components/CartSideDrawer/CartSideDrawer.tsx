import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import CartSideDrawerGroup from './CartSideDrawerGroup';
import { RiCloseFill } from 'react-icons/ri';
import { currencyFormatter } from '@/helpers';
import { Fade, Slide } from '@mui/material';
import ActionBtn from '../ui/ActionBtn/ActionBtn';
import useHideOverflowOnBody from '@/hooks/useHideOverflowOnBody';
import SideDrawerBackdrop from '@/components/ui/SideDrawerBackdrop/SideDrawerBackdrop';

const CartSideDrawer = () => {
  const { isCartOpen, toggleCart, loading } = useContext(
    CartContext
  ) as CartContextValue;
  // hide overflow on body when sidedrawer is open to stop scrolling
  useHideOverflowOnBody(isCartOpen);

  return (
    <>
      {/* Backdrop */}
      <SideDrawerBackdrop isOpen={isCartOpen} onClick={toggleCart} />

      {/* Sidebar */}
      <Slide in={isCartOpen} direction="left" timeout={200}>
        <div className="fixed  inset-y-0 right-0 max-w-full w-[550px] bg-white z-[100] shadow-lg">
          <div className=" flex flex-col h-full">
            <CartHeader />
            <CartSideDrawerGroup />
            <div className="mt-auto px-6 py-4 bg-white border-t-2 border-t-gray-100">
              <GrandTotal />
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

const CartHeader = () => {
  const { cartProducts } = useContext(CartContext) as CartContextValue;

  return (
    <div className="py-4 px-6  flex items-center justify-between">
      <h2 className="text-xl font-bold">My Cart({cartProducts.length})</h2>
      <CloseCartBtn />
    </div>
  );
};

const CloseCartBtn = () => {
  const { toggleCart } = useContext(CartContext) as CartContextValue;
  return (
    <button className="pr-0 p-2 text-3xl" onClick={toggleCart}>
      <RiCloseFill />
    </button>
  );
};

const GrandTotal = () => {
  const { getGrandTotal } = useContext(CartContext) as CartContextValue;

  return (
    <div className="flex justify-between mb-6 items-center">
      <p className="text-xl font-semibold">Grand Total:</p>
      <p className="text-3xl font-semibold">
        {currencyFormatter.format(getGrandTotal())}
      </p>
    </div>
  );
};

export default CartSideDrawer;
