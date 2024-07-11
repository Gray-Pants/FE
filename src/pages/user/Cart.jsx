import React from "react";
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
  return (
    <CartContainer>
      <PageHeader />
      <SelectAll />
      <ProductItem />
      <PriceSummary />
      <OrderFooter />
    </CartContainer>
  );
};

export default Cart;
