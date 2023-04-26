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
import BottomNavItem from './BottomNavItem';

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full backdrop-blur-lg  bg-white/80 text-white text-center flex justify-around items-center p-2 z-50 md:hidden ">
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
        ActiveIcon={RiShoppingCartFill}
      />
      <BottomNavItem
        title={'profile'}
        location={'/profile'}
        DefaultIcon={RiUserLine}
        ActiveIcon={RiUserFill}
      />
    </nav>
  );
};

export default BottomNavigation;
