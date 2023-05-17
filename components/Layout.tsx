import { ReactNode, useState } from 'react';
import { Montserrat, Bebas_Neue } from 'next/font/google';
import Navbar from './ui/Navbar/Navbar';
import Footer from './ui/Footer/Footer';
import BottomNavigation from './ui/BottomNavigation/BottomNavigation';
import CartSidebar from './ui/CartSidebar/CartSidebar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserat',
  weight: ['200', '300', '400', '500', '600', '700'],
  style: 'normal',
});

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: ['400'],
  style: 'normal',
});

const Layout = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  return (
    <div
      className={`${montserrat.variable} ${bebas_neue.variable} font-sans  text-neutral-dark relative`}
    >
      <div className="px-6 md:px-8 xl:px-16">
        <Navbar toggleCart={toggleCart} />
        <main className="pt-20 md:pt-24">{children}</main>
        <Footer />
        <BottomNavigation />
      </div>
      <CartSidebar isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
};

export default Layout;
