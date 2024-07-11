import React from "react";
import styled from "styled-components";

const PriceSummaryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 400px;
  height: 30px;
  font-size: 14px;
  border-bottom: 10px solid orange;
  padding-top: 15px;
  padding-right: 3px;
  box-sizing: box-border;
`;

const PriceItem = styled.span`
  margin-left: 10px;
  font-size: 12px; // 글씨 크기 조절
  color: #7d7d7d; // 진회색 적용
`;

const PriceSummary = () => {
  return (
    <>
      <PriceSummaryContainer>
        <PriceItem>상품 15,000원</PriceItem>
        <PriceItem>+ 배송비 3,000원</PriceItem>
        <PriceItem>=</PriceItem>
        <PriceItem>18,000원</PriceItem>
      </PriceSummaryContainer>
    </>
  );
};

export default PriceSummary;
