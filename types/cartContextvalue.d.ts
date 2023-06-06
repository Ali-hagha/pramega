type CartContextValue = {
  toggleCart: () => void;
  isCartOpen: boolean;
  cartProducts: Product[];
  cartProductCount: Map<number, number>;
  addToCart: (product: Product, count: number) => void;
  removeFromCart: (product: Product) => void;
  getGrandTotal: () => number;
};
