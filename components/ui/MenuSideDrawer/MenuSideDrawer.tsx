import { MenuDrawerContext } from '@/context/MenuDrawerContext';
import React, { useContext } from 'react';
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
import { Fade, Slide } from '@mui/material';
import useHideOverflowOnBody from '@/hooks/useHideOverflowOnBody';
import SideDrawerBackdrop from '@/components/SideDrawerBackdrop/SideDrawerBackdrop';

const MenuSideDrawer = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuDrawerContext);
  // hide overflow on body when sidedrawer is open to stop scrolling
  useHideOverflowOnBody(isMenuOpen);

  return (
    <>
      {/* Backdrop */}
      <SideDrawerBackdrop isOpen={isMenuOpen} onClick={toggleMenu} />

      {/* Sidebar */}
      <Slide in={isMenuOpen} direction="right" timeout={200}>
        <div
          className={`fixed flex flex-col inset-y-0 max-w-full w-[550px] bg-white z-[100] shadow-lg p-6 transition-transform ease-in-out duration-300`}
        >
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
          <div className="pt-8 md:pt-12 px-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Products:
            </h3>
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

          <div className="flex items-center justify-center mt-auto space-x-10 ">
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
      </Slide>
    </>
  );
};

export default MenuSideDrawer;
