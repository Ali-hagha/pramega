import { MenuDrawerContext } from '@/context/MenuDrawerContext';
import { Transition } from '@headlessui/react';
import React, { Fragment, useContext } from 'react';
import { RiCloseFill } from 'react-icons/ri';

const MenuSideDrawer = () => {
  const { isOpen, toggleMenu } = useContext(MenuDrawerContext);

  return (
    <>
      {/* Backdrop */}
      <Transition
        show={isOpen}
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
          onClick={toggleMenu}
        ></div>
      </Transition>

      {/* Sidebar */}
      <Transition
        show={isOpen}
        enter="transition-transform ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        as={Fragment}
      >
        <div className="fixed  inset-y-0 left-0 max-w-full w-[550px] bg-white z-[100] shadow-lg">
          <button className=" pr-0 p-2 text-3xl " onClick={toggleMenu}>
            <RiCloseFill />
          </button>
        </div>
      </Transition>
    </>
  );
};

export default MenuSideDrawer;
