import React from 'react';
import styled from 'styled-components';

const SellerProductDetails = () => {
  return (
    <>
      <Title>상품 상세 페이지</Title>
      <FormContainer>
        <InputGroup>
          <Label>상품1 이름</Label>
          <Input defaultValue="멜란지 바지" />
        </InputGroup>
        <InputGroup>
          <Label>상품1 설명</Label>
          <Input defaultValue="멜란지 바지" />
        </InputGroup>
        <InputGroup>
          <Label>상품1 카테고리</Label>
          <Input defaultValue="하의" />
        </InputGroup>
        <InputGroup>
          <Label>상품1 이미지</Label>
          <ImageInputGroup>
            <ImageInput defaultValue=".png" />
            <ImageInput defaultValue=".png" />
            <ImageInput defaultValue=".png" />
          </ImageInputGroup>
        </InputGroup>
        <InputGroup>
          <Label>상품1 가격</Label>
          <Input defaultValue="16000" />
        </InputGroup>
        <InputGroup>
          <Label>상품1 재고</Label>
          <Input defaultValue="1000" />
        </InputGroup>
        <InputGroup>
          <Label>상품1 상세페이지</Label>
          <Input defaultValue=".png" />
        </InputGroup>
      </FormContainer>
      <ButtonGroup>
        <EditButton>수정하기</EditButton>
        <DeleteButton>삭제하기</DeleteButton>
      </ButtonGroup>
    </>
  );
};

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 61px;
  text-align: center;
  color: #000000;
  margin-bottom: 40px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 95%;
  height: 35px;
  background: #D9D9D9;
  border: none;
  padding: 0 10px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #7D7D7D;
`;

const ImageInputGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ImageInput = styled(Input)`
  width: calc(33.33% - 7px);
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

const Button = styled.button`
  width: 284.65px;
  height: 60px;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
`;

const EditButton = styled(Button)`
  background: #000000;
  border: 2px solid #000000;
  color: #FFFFFF;
`;

const DeleteButton = styled(Button)`
  background: #FFFFFF;
  border: 2px solid #000000;
  color: #000000;
`;

export default SellerProductDetails;