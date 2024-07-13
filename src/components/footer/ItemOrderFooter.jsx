import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  height: 40px;
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
  transition: all 0.3s ease; /* 모든 속성에 대한 부드러운 전환 효과 */

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
    color: #fff;
  }
`;

const ButtonText = styled.span`
  display: inline-block; // 텍스트를 블록 요소처럼 취급하여 width, height 설정 가능
  width: auto;
  height: auto;
  transition: all 0.3s ease; // 텍스트 변화에 대한 부드러운 전환 효과
`;

function ItemOrderFooter({ totalPrice }) {
  const navigate = useNavigate(); // useNavigate 훅 추가
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOrderClick = () => {
    navigate("/itemOrder"); // 주문하기 버튼 클릭 시 /itemOrder 페이지로 이동
  };

  return (
    <OrderButtonContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OrderButton onClick={handleOrderClick}>
        <ButtonText>
          {/* {isHovered
            ? `총 상품금액 ${(totalPrice || 0).toLocaleString()}원 결제하기` // totalPrice가 undefined면 0으로 처리
            : "주문하기"} */}
          주문하기
        </ButtonText>
      </OrderButton>
    </OrderButtonContainer>
  );
}

export default ItemOrderFooter;
