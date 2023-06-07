import { useEffect, useState } from 'react';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

export const useCart = (): CartContextValue => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [cartProductCount, setCartProductCount] = useState<Map<number, number>>(
    new Map([])
  );

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${strapiUrl}/api/carts/${21}?populate=products.primaryImage`
        );
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        const json = await response.json();
        const products = json.data.attributes.products.data;
        const productCount = json.data.attributes.productCount;

        const tempCount = new Map();
        if (productCount) {
          productCount.forEach((p: { id: number; quantity: number }) => {
            tempCount.set(p.id, p.quantity);
          });
        }

        setCartProductCount(tempCount);
        setCartProducts(products);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    error,
    loading,
  };
};
