type CartContextValue = {
  toggleCart: () => void;
  isCartOpen: boolean;
  cartProducts: Product[];
  cartProductCount: Map<number, number>;
  addToCart: (product: Product, count: number) => void;
  removeFromCart: (product: Product) => void;
  getGrandTotal: () => number;
  error: Error | null;
  loading: boolean;
  localCartId: String | null;
  localCartUniqueId: string | null;
  productToAddToCartId: number | null;
};
