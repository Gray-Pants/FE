import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: (product, quantity) => {},
  setCartItems: () => {},
});

export default CartContext;
