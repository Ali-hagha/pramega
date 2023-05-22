import { createContext } from 'react';

const CartContext = createContext<CartContextValue | undefined>(undefined);

export default CartContext;
