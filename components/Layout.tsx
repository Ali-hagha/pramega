import { ReactNode, useState } from 'react';
import { Montserrat, Bebas_Neue } from 'next/font/google';
import Navbar from './ui/Navbar/Navbar';
import Footer from './ui/Footer/Footer';
import BottomNavigation from './ui/BottomNavigation/BottomNavigation';
import CartSidebar from './ui/CartSidebar/CartSidebar';
import CartContext from '../context/CartContext';

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

const initProducts = [
  {
    id: '12345abcd',
    name: 'Joshua Chair',
    category: 'chairs',
    price: 249,
    rating: 4.5,
    ratingCount: 629,
    dimensions: {
      width: 50,
      depth: 53,
      height: 80,
    },
    description:
      'The popular Joshua is a mid-century inspired collection with a curved seat and back, designed for maximal comfort.',
    imageUrlPrimary: '/categories/chair_tp.png',
    imageUrlSecondary: '/products/chairs/Joshua-2.jpg',
    productTag: 'new',
    imageGalleryUrl: [
      '/categories/chair_tp.png',
      '/categories/lamp_tp.png',
      '/categories/bed_tp.png',
    ],
  },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>(initProducts);
  const [cartProductCount, setCartProductCount] = useState<Map<string, number>>(
    new Map([['12345abcd', 1]])
  );

  const addToCart = (product: Product, count: number) => {
    // don't add a product to the products array if it already exists
    if (!cartProducts.some(p => p.id === product.id)) {
      const updatedProducts = [...cartProducts, product];
      setCartProducts(updatedProducts);
    }

    const updatedCounts = new Map(cartProductCount);
    if (updatedCounts.has(product.id)) {
      updatedCounts.set(product.id, updatedCounts.get(product.id)! + count);
    } else {
      updatedCounts.set(product.id, count);
    }

    setCartProductCount(updatedCounts);
  };

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  const cartContextValue: CartContextValue = {
    toggleCart,
    isCartOpen,
    cartProducts,
    cartProductCount,
    addToCart,
  };

  return (
    <div
      className={`${montserrat.variable} ${bebas_neue.variable} font-sans  text-neutral-dark relative`}
    >
      <CartContext.Provider value={cartContextValue}>
        <div className="px-6 md:px-8 xl:px-16">
          <Navbar />
          <main className="pt-20 md:pt-24">{children}</main>
          <Footer />
          <BottomNavigation />
        </div>
        <CartSidebar />
      </CartContext.Provider>
    </div>
  );
};

export default Layout;
