import Link from 'next/link';
import { RiShoppingCartLine, RiUserLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20">
      <h3 className="text-5xl font-bebas_neue align-bottom">Pramega</h3>
      <div className="flex">
        <nav className="flex items-center">
          <ul className="flex my-auto space-x-10 font-medium text-lg">
            <li>
              <Link
                href={'#'}
                className={
                  'p-2 hover:text-primary hover:bg-nuetral-dark/90 rounded transition-colors'
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className={
                  'p-2 hover:text-primary hover:bg-nuetral-dark/90 rounded transition-colors'
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className={
                  'p-2 hover:text-primary hover:bg-nuetral-dark/90 rounded transition-colors'
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="h-16 border-l-2 border-nuetral-dark/20 mx-8"></div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            href={'#'}
            className={
              'p-2 rounded hover:text-primary hover:bg-nuetral-dark/90 transition-colors'
            }
          >
            <RiUserLine className="text-2xl" />
          </Link>
          <Link
            href={'#'}
            className={
              'p-2 rounded hover:text-primary hover:bg-nuetral-dark/90 transition-colors'
            }
          >
            <RiShoppingCartLine className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
