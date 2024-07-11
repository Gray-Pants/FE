import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageHeader from "../../components/header/PageHeader";
import SelectAll from "../../components/SelectAll";
import ProductItem from "../../components/product/ProductItem";
import PriceSummary from "../../components/PriceSummary";
import OrderFooter from "../../components/footer/OrderFooter";

const CartContainer = styled.div`
  width: 400px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff; // 배경색 흰색 설정
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // 상품 데이터 (예시)
    { id: 1, name: "상품1", price: 10000, quantity: 2 },
    { id: 2, name: "상품2", price: 20000, quantity: 1 },
  ]);

  const handleSelect = (productId, checked) => {
    // TODO: 상품 선택 처리 로직 (선택된 상품 목록 관리)
  };

  const handleQuantityChange = (productId, quantity) => {
    // TODO: 수량 변경 처리 로직
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleDelete = (productId) => {
    // TODO: 상품 삭제 처리 로직
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // 총 상품 금액 계산
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      <PageHeader />
      <SelectAll />
      {cartItems.map((item) => (
        <ProductItem
          key={item.id}
          product={item}
          onSelect={handleSelect}
          onQuantityChange={handleQuantityChange}
          onDelete={handleDelete}
        />
      ))}
      <PriceSummary
        productPrice={totalPrice}
        shippingFee={0}
        totalPrice={totalPrice}
      />
      <OrderFooter totalPrice={totalPrice} />
    </CartContainer>
  );
};

export default Cart;
