import { ReactNode } from 'react';
import { Montserrat, Bebas_Neue } from 'next/font/google';

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
    <div className={`${montserrat.variable} ${bebas_neue.variable} font-sans`}>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
