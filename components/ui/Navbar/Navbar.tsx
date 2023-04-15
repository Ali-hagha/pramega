import Link from 'next/link';
import { RiShoppingCartLine, RiUserLine } from 'react-icons/ri';
import NavGroup from './NavGroup';
import MenuBtn from './MenuBtn';
import useNavbarVisibility from '@/hooks/useNavBarVIsibility';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

const items = [
  {
    title: 'home',
    location: '#',
  },
  {
    title: 'products',
    location: '#',
  },
  {
    title: 'contact',
    location: '#',
  },
];

const Navbar = () => {
  const [visible, isScrolled] = useNavbarVisibility();
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
        className={`px-6 md:px-8  fixed z-10  left-0 right-0 backdrop-blur-lg md:rounded-3xl bg-white/80 mx-0 md:mx-16 shadow-xl transition-all
        ${isScrolled ? 'shadow-neutral-dark/5' : 'shadow-transparent'}
        `}
      >
        <div className="flex items-center justify-between py-2 md:py-3">
          <MenuBtn />
          <h3 className="hidden sm:block text-4xl md:text-5xl font-bebas_neue align-bottom">
            Pramega
          </h3>
          <div className="flex h-16">
            <NavGroup items={items} />

            <div className="h-full border-l-2 border-neutral-dark/20 mx-8 hidden lg:block"></div>

            <div className="flex items-center justify-center space-x-4">
              <Link
                href={'#'}
                className={
                  'p-2 rounded hover:text-primary hover:bg-neutral-dark/90 transition-colors'
                }
              >
                <RiUserLine className="text-2xl" />
              </Link>
              <Link
                href={'#'}
                className={
                  'p-2 rounded hover:text-primary hover:bg-neutral-dark/90 transition-colors'
                }
              >
                <RiShoppingCartLine className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Transition>
  );
};

export default Navbar;
