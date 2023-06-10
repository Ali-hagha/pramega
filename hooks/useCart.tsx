import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

const localStorageKeys = {
  cardId: 'cartId',
  cartUniqueId: 'cartUniqueId',
};

export const useCart = (): CartContextValue => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [cartProductCount, setCartProductCount] = useState<Map<number, number>>(
    new Map([])
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [localCartId, setLocalCartId] = useState<string | null>(null);
  const [localCartUniqueId, setlocalCartUniqueId] = useState<string | null>(
    null
  );

  // set cart id state from local storage when the app is loaded
  useEffect(() => {
    if (typeof window !== undefined) {
      setLocalCartId(localStorage.getItem(localStorageKeys.cardId));
      setlocalCartUniqueId(localStorage.getItem(localStorageKeys.cartUniqueId));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (localCartId !== null) {
        const url = `${strapiUrl}/api/carts/${localCartId}?populate=products.primaryImage`;

        try {
          setLoading(true);
          const response = await fetch(url);
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
      }
    };

    fetchData();
  }, [localCartId]);

  const addToCart = async (product: Product, count: number) => {
    // if there's no local data about the cart create a new cart on the server and set the local ids
    if (localCartId === null) {
      const uuid = uuidv4();
      const url = `${strapiUrl}/api/carts`;
      const data = {
        data: {
          products: product.id,
          productCount: [
            {
              id: product.id,
              quantity: count,
            },
          ],
          cartUniqueId: uuid,
        },
      };

      try {
        setLoading(true);

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        const json = await response.json();

        localStorage.setItem(localStorageKeys.cartUniqueId, uuid);
        localStorage.setItem(localStorageKeys.cardId, json.data.id);

        setLocalCartId(localStorage.getItem(localStorageKeys.cardId));
        setlocalCartUniqueId(
          localStorage.getItem(localStorageKeys.cartUniqueId)
        );
      } catch (error: any) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
        if (!isCartOpen) {
          setIsCartOpen(true);
        }
      }
    } else {
      const url = `${strapiUrl}/api/carts/${localCartId}?populate=products.primaryImage`;
      const quantities = Array.from(cartProductCount, p => {
        return { id: p[0], quantity: p[1] };
      });

      const i = quantities.findIndex(_el => _el.id === product.id);
      if (i > -1)
        quantities[i] = {
          id: product.id,
          quantity: count + quantities[i].quantity,
        };
      else quantities.push({ id: product.id, quantity: count });

      const data = {
        data: {
          products: [...cartProducts.map(p => p.id), product.id],
          productCount: quantities,
        },
      };

      try {
        setLoading(true);

        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });
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

        setTimeout(() => {
          setCartProductCount(tempCount);
          setCartProducts(products);
        }, 1000);
      } catch (error: any) {
        setError(error);
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
          if (!isCartOpen) {
            setIsCartOpen(true);
          }
        }, 1000);
      }
    }
  };

  const removeFromCart = async (product: Product) => {
    const url = `${strapiUrl}/api/carts/${localCartId}?populate=products.primaryImage`;
    const quantities = Array.from(cartProductCount, p => {
      return { id: p[0], quantity: p[1] };
    }).filter(p => p.id !== product.id);

    const data = {
      data: {
        products: [
          ...cartProducts
            .map(p => {
              return p.id;
            })
            .filter(id => id !== product.id),
        ],
        productCount: quantities,
      },
    };

    try {
      setLoading(true);

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
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

      setTimeout(() => {
        setCartProductCount(tempCount);
        setCartProducts(products);
      }, 1000);
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const getGrandTotal = () => {
    let grandTotal = 0;
    cartProducts.forEach(p => {
      grandTotal += p.attributes.price * cartProductCount.get(p.id)!;
    });

    return grandTotal;
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
    localCartId,
    localCartUniqueId,
  };
};
