import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  text-align: right;
  padding: 20px 0;
`;

const PriceInfo = styled.div`
  margin-bottom: 10px;
`;

const TotalPrice = styled.span`
  font-weight: bold;
`;

const ShippingFee = styled.span`
  font-weight: bold;
`;

const FinalPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

function PriceSummary({ cartItems, onPriceChange }) {
  const [shippingFee, setShippingFee] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const { totalPrice, totalQuantity } = useMemo(() => {
    let newTotalPrice = 0;
    let newTotalQuantity = 0;
    for (const item of cartItems) {
      if (item.checked) {
        newTotalPrice += item.item.itemPrice * item.cartItemQuantity;
        newTotalQuantity += item.cartItemQuantity;
      }
    }
    return { totalPrice: newTotalPrice, totalQuantity: newTotalQuantity };
  }, [cartItems]);

  useEffect(() => {
    // 배송비 계산 (예시: 50000원 이상 무료 배송, 미만 3000원)
    const newShippingFee = totalPrice === 0 || totalPrice >= 50000 ? 0 : 3000;
    setShippingFee(newShippingFee);

    // 최종 가격 계산
    const newFinalPrice = totalPrice + newShippingFee;
    setFinalPrice(newFinalPrice);
  }, [totalPrice]);

  return (
    <FooterContainer>
      <PriceInfo>
        총 상품 금액: <TotalPrice>{totalPrice}원</TotalPrice>
        <br />총 상품 개수: <TotalPrice>{totalQuantity}개</TotalPrice>
      </PriceInfo>
      <PriceInfo>
        배송비: <ShippingFee>{shippingFee}원</ShippingFee>
      </PriceInfo>
      <PriceInfo>
        결제 예정 금액: <FinalPrice>{finalPrice}원</FinalPrice>
      </PriceInfo>

      {/* 주문하기 버튼 */}
    </FooterContainer>
  );
}

export default PriceSummary;
