import React from "react";
import styled from "styled-components";

const OrderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding: 15px;
  background-color: #fff;
  width: 400px;
  height: 60px;
`;

const OrderButton = styled.button`
  background-color: #f4975c;
  color: white;
  padding: 10px 30px;
  font-size: 16px;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  width: 300px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
    color: #fff;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const ButtonText = styled.span`
  display: inline-block;
  width: auto;
  height: auto;
  transition: all 0.3s ease;
`;

function ItemOrderFooter({ totalPrice, totalQuantity, onClick, disabled }) {
  return (
    <OrderButtonContainer>
      <OrderButton onClick={onClick} disabled={disabled}>
        <ButtonText>
          {disabled
            ? "주문하기"
            : `총 상품금액 ${(totalPrice || 0).toLocaleString()}원 결제하기`}
        </ButtonText>
      </OrderButton>
    </OrderButtonContainer>
  );
}

export default ItemOrderFooter;
