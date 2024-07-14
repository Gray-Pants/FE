import React, { useState } from "react";
import CreateOrder from "../../components/item/CreateOrder";
import PageHeader from "../../components/header/PageHeader";
import { useLocation } from "react-router-dom";

const ItemOrder = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || []; // 장바구니에서 선택된 아이템 정보 가져오기
  const [paymentMethod, setPaymentMethod] = useState("");
  return (
    <>
      <PageHeader />
      <CreateOrder />
    </>
  );
};

export default ItemOrder;
