import React, { useState } from "react";
import styled from "styled-components";

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 5px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const QuantityInput = styled.span`
  margin: 0 10px;
  font-size: 10px;
`;

function QuantitySelector({ quantity = 1, onChange }) {
  // 기본값 quantity = 1 설정
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);

  const handleIncrease = () => {
    const newQuantity = selectedQuantity + 1;
    setSelectedQuantity(newQuantity);
    onChange(newQuantity);
  };

  const handleDecrease = () => {
    if (selectedQuantity > 1) {
      const newQuantity = selectedQuantity - 1;
      setSelectedQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  return (
    <QuantityContainer>
      <Button onClick={handleDecrease}>-</Button>
      <QuantityInput>{selectedQuantity}</QuantityInput>
      <Button onClick={handleIncrease}>+</Button>
    </QuantityContainer>
  );
}

export default QuantitySelector;
