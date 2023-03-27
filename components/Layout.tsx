import { ReactNode } from 'react';
import { Montserrat, Bebas_Neue } from 'next/font/google';
import Navbar from './ui/Navbar/Navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
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
  return (
    <div
      className={`${montserrat.variable} ${bebas_neue.variable} font-sans max-w-screen-2xl  mx-auto px-6 sm:px-10 md:px-16 lg:px-32 text-nuetral-dark`}
    >
      <header>
        <Navbar />
      </header>
      <main className="">{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
