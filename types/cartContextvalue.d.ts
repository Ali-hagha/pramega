type CartContextValue = {
  toggleCart: () => void;
  isCartOpen: boolean;
  cartProducts: Product[];
  cartProductCount: Map<string, number>;
  addToCart: (product: Product, count: number) => void;
};
