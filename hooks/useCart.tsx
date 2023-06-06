import { useEffect, useState } from 'react';

export const useCart = (): CartContextValue => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [cartProductCount, setCartProductCount] = useState<Map<number, number>>(
    new Map([])
  );

  const getGrandTotal = () => {
    let grandTotal = 0;
    cartProducts.forEach(p => {
      grandTotal += p.attributes.price * cartProductCount.get(p.id)!;
    });

    return grandTotal;
  };

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

  const removeFromCart = (product: Product) => {
    setCartProducts(prevState => prevState.filter(p => p.id !== product.id));

    const updatedCounts = new Map(cartProductCount);
    if (updatedCounts.has(product.id)) {
      updatedCounts.delete(product.id);
    }

    setCartProductCount(updatedCounts);
  };

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  return {
    toggleCart,
    isCartOpen,
    cartProducts,
    cartProductCount,
    addToCart,
    removeFromCart,
    getGrandTotal,
  };
};
