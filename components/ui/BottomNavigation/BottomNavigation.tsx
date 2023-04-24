import {
  RiHomeLine,
  RiHomeFill,
  RiShoppingCartFill,
  RiShoppingCartLine,
  RiHeart3Fill,
  RiHeart3Line,
  RiUserLine,
  RiUserFill,
} from 'react-icons/ri';
import Link from 'next/link';
import BottomNavItem from './BottomNavItem';
import { IconBaseProps } from 'react-icons/lib';

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full backdrop-blur-lg  bg-white/80 text-white text-center flex justify-around items-center p-4 z-50 md:hidden">
      <BottomNavItem
        title={'home'}
        location={'/'}
        DefaultIcon={RiHomeLine}
        ActiveIcon={RiHomeFill}
      />
      <BottomNavItem
        title={'wishlist'}
        location={'/wishlist'}
        DefaultIcon={RiHeart3Line}
        ActiveIcon={RiHeart3Fill}
      />
      <BottomNavItem
        title={'cart'}
        location={'/cart'}
        DefaultIcon={RiShoppingCartLine}
        ActiveIcon={RiHomeFill}
      />
      <BottomNavItem
        title={'profile'}
        location={'/profile'}
        DefaultIcon={RiUserLine}
        ActiveIcon={RiHeart3Fill}
      />
    </nav>
  );
};

export default BottomNavigation;
