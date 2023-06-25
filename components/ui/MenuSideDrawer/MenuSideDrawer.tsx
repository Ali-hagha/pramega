import { MenuDrawerContext } from '@/context/MenuDrawerContext';
import { Transition } from '@headlessui/react';
import React, { Fragment, useContext } from 'react';
import {
  RiCloseFill,
  RiFacebookBoxFill,
  RiFacebookBoxLine,
  RiInstagramFill,
  RiInstagramLine,
  RiPinterestFill,
  RiPinterestLine,
} from 'react-icons/ri';
import MenuSideDrawerItem from './MenuSideDrawerItem';
import Link from 'next/link';
import SocialLink from '../Footer/SocialLink';

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
        <div className="fixed flex flex-col inset-y-0 max-w-full w-[550px] bg-white z-[100] shadow-lg p-6">
          <div className="flex  items-center justify-center relative">
            <button
              className="p-2 text-3xl absolute -top-1 left-0"
              onClick={toggleMenu}
            >
              <RiCloseFill />
            </button>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bebas_neue ">
              <Link onClick={toggleMenu} href={'/'}>
                Pramega
              </Link>
            </h3>
          </div>
          <div className="pt-12 px-4">
            <h3 className="text-2xl font-semibold mb-2">Products:</h3>
            <ul className="ml-2 pl-2 border-l-gray-200 border-l-2">
              <MenuSideDrawerItem category={'all'} href={'/products'} />
              <MenuSideDrawerItem
                category={'chairs'}
                href={'/products/chairs'}
              />
              <MenuSideDrawerItem
                category={'storage'}
                href={'/products/storage'}
              />
              <MenuSideDrawerItem category={'beds'} href={'/products/beds'} />
              <MenuSideDrawerItem category={'sofas'} href={'/products/sofas'} />
              <MenuSideDrawerItem
                category={'tables'}
                href={'/products/tables'}
              />
            </ul>
          </div>

          <div className="flex items-center justify-center mt-auto mb-10 space-x-10 ">
            <SocialLink
              DefaultIcon={RiFacebookBoxLine}
              HoverIcon={RiFacebookBoxFill}
              classes="text-4xl"
              onClick={toggleMenu}
            />
            <SocialLink
              DefaultIcon={RiInstagramLine}
              HoverIcon={RiInstagramFill}
              classes="text-4xl"
              onClick={toggleMenu}
            />
            <SocialLink
              DefaultIcon={RiPinterestLine}
              HoverIcon={RiPinterestFill}
              classes="text-4xl"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </Transition>
    </>
  );
};

export default MenuSideDrawer;
