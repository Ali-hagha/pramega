import { ReactNode, useContext, useState } from 'react';
import { Montserrat, Bebas_Neue } from 'next/font/google';
import Navbar from './ui/Navbar/Navbar';
import Footer from './ui/Footer/Footer';
import CartSidebar from './ui/CartSidebar/CartSidebar';
import { CartContext, CartContextProvider } from '../context/CartContext';
import { Alert, Snackbar } from '@mui/material';
import ErrorSnackBar from './ui/ErrorSnackBar/ErrorSnackBar';

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
  return (
    <div
      className={`${montserrat.variable} ${bebas_neue.variable} font-sans  text-neutral-dark relative`}
    >
      <CartContextProvider>
        <div className="px-6 md:px-8 xl:px-16">
          <Navbar />
          <main className="pt-20 md:pt-24">{children}</main>
          <Footer />C
        </div>
        <CartSidebar />
        <ErrorSnackBar />
      </CartContextProvider>
    </div>
  );
};

export default Layout;
