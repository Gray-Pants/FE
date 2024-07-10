import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
//   position: absolute;
  width: 392px;
  height: 34px;
  left: calc(50% - 392px/2 - 3px);
//   top: 167px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
//   line-height: 61px;
  text-align: center;
  color: #000000;
`;

const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background: #D9D9D9;
`;

const SubmitButton = styled.button`
  margin-top: 20px
  border: 2px solid #000000;
  border-radius: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  cursor: pointer;
`;

const ProductRegist = () => {
  return (
    <>
        <Title>상품 등록</Title>
        <InputField top={305} placeholder="상품 이름" />
        <InputField top={412} placeholder="상품 카테고리" />
        <InputField top={519} placeholder="상품 이미지" />
        <InputField top={626} placeholder="상품 가격" />
        <InputField top={733} placeholder="상품 재고" />
        <InputField top={841} placeholder="상품 상세 페이지 이미지" />
        <SubmitButton>상품 등록</SubmitButton>
    </>
  );
};

export default ProductRegist;