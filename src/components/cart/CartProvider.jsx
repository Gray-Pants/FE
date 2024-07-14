import React, { createContext, useState, useEffect } from "react";
import { apiClient } from "../../api/ApiClient";

const CartContext = createContext({
  cartItems: [],
  addToCart: (product, quantity) => {},
  setCartItems: () => {},
});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await apiClient.get("/carts/myitems");
        setCartItems(response.data.response);
      } catch (error) {
        console.error("장바구니 아이템을 가져오는 중 오류 발생:", error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (product, quantity) => {
    // 기존 장바구니 아이템 확인
    const existingItem = cartItems.find(
      (item) => item.itemId === product.itemId
    );

    if (existingItem) {
      try {
        // 이미 장바구니에 있는 상품인 경우 수량 업데이트
        const response = await apiClient.patch(
          `/carts/myitems/${existingItem.cartItemId}`,
          { cartItemQuantity: existingItem.cartItemQuantity + quantity }
        );
        // 변경된 아이템만 업데이트
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.cartItemId === existingItem.cartItemId
              ? response.data.response
              : item
          )
        );
      } catch (error) {
        console.error("장바구니 아이템 수량 업데이트 중 오류 발생:", error);
      }
    } else {
      // 새로운 상품인 경우 장바구니에 추가
      try {
        const response = await apiClient.post("/carts/items", {
          itemId: product.itemId,
          quantity,
        });
        setCartItems((prevItems) => [...prevItems, response.data.response]);
      } catch (error) {
        console.error("장바구니 아이템 추가 중 오류 발생:", error);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
