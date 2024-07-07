import React from "react";
import styled from "styled-components";

const WishList = () => {
  const ProductContainer = styled.div`
    width: 250px;
    height: 500px;
    display: flex;
    align-items: center;
  `;

  const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
  `;

  const ProductInfo = styled.div`
    width: 100%;
    display: flex;

    gap: 20px;
  `;

  const ProductTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
  `;

  const ProductPrice = styled.div`
    color: #999;
  `;

  const OptionSelect = styled.button`
    width: 100px;
    height: 30px;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  `;

  const QuantitySelect = styled.button`
    width: 100px;
    height: 30px;
    padding: 10px;
    border: 1px solid #ccc;
  `;

  const OptionFlex = styled.div`
    display: flex;
  `;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          width: "600px",
          height: "150px",
          border: "3px solid orange",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "5px", marginRight: "5rem" }}>
          <input type="checkbox" />
          <div style={{ fontSize: "20px" }}>동대문 판매왕</div>
        </div>

        <ProductInfo>
          <ProductImage src="../../public/상세이미지.svg" alt="ㅎㅇ" />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>동대문 판매왕</div>
            <ProductTitle>진짜 쌈 회새바지단 </ProductTitle>
            <ProductPrice>15200원</ProductPrice>
            <OptionFlex>
              <OptionSelect>옵션변경</OptionSelect>
              <QuantitySelect>수량:1</QuantitySelect>
            </OptionFlex>
            <div
              style={{
                width: "200px",
                height: "20px",
                textAlign: "center",
                padding: "5px",
                backgroundColor: "#7D7D7D",
                borderRadius: "5px",
              }}
            >
              주문하기
            </div>
          </div>
        </ProductInfo>
      </div>
    </>
  );
};

export default WishList;
