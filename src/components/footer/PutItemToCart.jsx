import React, { useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 400px;
  background: #fff;
  transition: height 0.3s ease-in-out;
  height: ${(props) => (props.expanded ? "200px" : "60px")};
  border-top: 1px solid #ddd;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const OrderButton = styled.button`
  background-color: #f4975c;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
    color: #fff;
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const QuantityButton = styled.button`
  background-color: #f4975c;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
`;

const QuantityDisplay = styled.span`
  font-size: 16px;
  margin: 0 10px;
`;

const PutItemToCart = ({ onAddToCart }) => {
  const [expanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    setExpanded(false);
  };

  return (
    <FooterContainer expanded={expanded}>
      <FooterContent>
        <OrderButton onClick={toggleExpanded}>
          {expanded ? "수량 선택 완료" : "주문하기"}
        </OrderButton>
      </FooterContent>
      {expanded && (
        <QuantitySelector>
          <QuantityButton onClick={() => handleQuantityChange(-1)}>
            -
          </QuantityButton>
          <QuantityDisplay>{quantity}</QuantityDisplay>
          <QuantityButton onClick={() => handleQuantityChange(1)}>
            +
          </QuantityButton>
          <OrderButton onClick={handleAddToCart}>장바구니에 담기</OrderButton>
        </QuantitySelector>
      )}
    </FooterContainer>
  );
};

export default PutItemToCart;
