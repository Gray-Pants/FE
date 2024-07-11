import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'TheJamsil3Regular';
  text-align: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 0 10px;
  background: #D9D9D9;
  border: none;
  font-size: 16px;
  &::placeholder {
    color: #000000;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
`;



const ProductRegist = () => {
  return (
    <>
      <Title>상품 등록</Title>
      <InputField placeholder="상품 이름" />
      <InputField placeholder="상품 카테고리" />
      <InputField placeholder="상품 이미지" />
      <InputField placeholder="상품 가격" />
      <InputField placeholder="상품 재고" />
      <InputField placeholder="상품 상세 페이지 이미지" />
      <SubmitButton>상품 등록</SubmitButton>
    </>
  );
};

export default ProductRegist;
