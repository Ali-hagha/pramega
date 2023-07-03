import { useContext } from 'react';
import Link from 'next/link';
import { RiShoppingCartLine, RiUserLine } from 'react-icons/ri';
import NavGroup from './NavGroup';
import MenuBtn from './DrawerMenuBtn';
import useNavbarVisibility from '@/hooks/useNavBarVIsibility';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CartContext } from '@/context/CartContext';
import { Badge } from '@mui/material';

const items = [
  {
    title: 'home',
    location: '/',
  },
  {
    title: 'products',
    location: '/products',
  },
];

const Navbar = () => {
  const [visible, isScrolled] = useNavbarVisibility();

  const { toggleCart, cartProducts } = useContext(
    CartContext
  ) as CartContextValue;

  return (
    <Transition
      show={visible}
      enter="transition-all "
      enterFrom="-translate-y-full"
      enterTo="translate-y-0 md:translate-y-6"
      leave="transition-all "
      leaveTo="-translate-y-full"
      leaveFrom="translate-y-0 md:translate-y-6"
      unmount={false}
      as={Fragment}
    >
      <header
        className={`px-6  md:mx-12 xl:mx-20  fixed  left-0 right-0 backdrop-blur-lg md:rounded-3xl   shadow-xl transition-all z-50
        ${
          isScrolled
            ? 'shadow-neutral-dark/5 bg-gray-100/70'
            : 'shadow-transparent bg-white'
        }
        `}
      >
        <div className="flex items-center justify-between  md:py-3">
          <MenuBtn />
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bebas_neue align-bottom">
            <Link href={'/'}>Pramega</Link>
          </h3>
          <nav className="flex h-16">
            <NavGroup items={items} />

            <div className="h-full border-l-2 border-neutral-dark/20 mx-8 hidden lg:block"></div>

            <div className="flex items-center justify-center space-x-4">
              <Link
                href={'/'}
                className={
                  'p-2 rounded hover:text-primary hover:bg-neutral-dark/90 active:text-primary active:bg-neutral-dark/90 transition-colors'
                }
              >
                <RiUserLine className="text-2xl" />
              </Link>
              <Badge
                badgeContent={cartProducts.length}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#d9f104',
                    fontWeight: '600',
                    marginTop: '5px',
                  },
                }}
              >
                <button
                  className={
                    'p-2 rounded hover:text-primary hover:bg-neutral-dark/90 active:text-primary active:bg-neutral-dark/90 transition-colors'
                  }
                  onClick={toggleCart}
                >
                  <RiShoppingCartLine className="text-2xl" />
                </button>
              </Badge>
            </div>
          </nav>
        </div>
      </header>
    </Transition>
  );
};

export default Navbar;
