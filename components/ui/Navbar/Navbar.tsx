import Link from 'next/link';
import { RiShoppingCartLine, RiUserLine } from 'react-icons/ri';
import NavGroup from './NavGroup';
import MenuBtn from './MenuBtn';
import useNavbarVisibility from '@/hooks/useNavBarVIsibility';

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
    <header className="mx-auto px-0 lg:px-10">
      <div className="flex items-center justify-between py-4">
        <MenuBtn />
        <h3 className="text-5xl font-bebas_neue align-bottom">Pramega</h3>
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
  );
};

export default Navbar;
