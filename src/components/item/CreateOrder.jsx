import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FooterNav from "../footer/FooterNav";
import { apiClient } from "../../api/ApiClient";

const CreateOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === '카드 결제') {
      navigate('/card-payment');
    } else if (paymentMethod === '카카오 페이 결제') {
      try {
        const response = apiClient.post('/payments/kakaoPay/ready',
        { 
          // Replace with your actual JSON payload
          itemName: '치킨',
          quantity: 2,
          totalAmount: 20000,
          // Add other fields as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },}
          );
        // Assuming the API response contains a URL to redirect to Kakao Pay
        window.location.href = response.data.redirectUrl;
      } catch (error) {
        console.error('카카오 페이 결제 오류:', error);
        // Handle the error, show an error message to the user, etc.
      }
  }
};

  return (
    <>
      <HeaderSpacer />
      <form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>배송지</SectionTitle>
          <AddressTypeGroup>
            <AddressType active>집</AddressType>
            <AddressType>친구집</AddressType>
          </AddressTypeGroup>
          <Input placeholder="이름 " />
          <Input placeholder="배송지명" />
          <PhoneInput>
            <Input placeholder="010" />
            <Input placeholder="1234" />
            <Input placeholder="5678" />
          </PhoneInput>
          <Input placeholder="주소" />
          <Input placeholder="상세주소" />
        </Section>
        <Section>
          <SectionTitle>상품정보</SectionTitle>
          <ProductInfo>
            <ProductImage
              src="../public/images/스와퍼(상품이미지).svg"
              alt="상품 이미지"
            />
            <ProductDetails>
              <Seller>동대문 판매왕</Seller>
              <ProductName>
                [진짜 쌈] 회색바지단 시그니처 코튼 버뮤다 팬츠
              </ProductName>
              <ProductOption>멜란지 L</ProductOption>
              <ProductQuantity>수량 1개</ProductQuantity>
            </ProductDetails>
            <ProductPrice>15,200원</ProductPrice>
          </ProductInfo>
        </Section>
        <Section>
          <SectionTitle>할인혜택</SectionTitle>
          <DiscountItem>
            <DiscountName>상품할인</DiscountName>
            <DiscountAmount>13,000원</DiscountAmount>
          </DiscountItem>
          <DiscountItem>
            <DiscountName>등급할인</DiscountName>
            <DiscountAmount>2,000원</DiscountAmount>
          </DiscountItem>
          <TotalDiscount>
            <DiscountName>총 할인금액</DiscountName>
            <DiscountAmount>-15,000원</DiscountAmount>
          </TotalDiscount>
        </Section>
        <Section>
          <SectionTitle>결제수단</SectionTitle>
          <PaymentMethod>
            <RadioButton
              type="radio"
              name="paymentMethod"
              value="카드 결제"
              checked={paymentMethod === '카드 결제'}
              onChange={() => handlePaymentMethodChange('카드 결제')}
            />
            <PaymentName>카드 결제</PaymentName>
          </PaymentMethod>
          <PaymentMethod>
            <RadioButton
              type="radio"
              name="paymentMethod"
              value="카카오 페이 결제"
              checked={paymentMethod === '카카오 페이 결제'}
              onChange={() => handlePaymentMethodChange('카카오 페이 결제')}
            />
            <PaymentName>카카오 페이 결제</PaymentName>
          </PaymentMethod>
        </Section>
        <Section>
          <SectionTitle>최종 결제금액</SectionTitle>
          <PriceItem>
            <PriceName>상품금액</PriceName>
            <PriceAmount>30,200원</PriceAmount>
          </PriceItem>
          <PriceItem>
            <PriceName>할인금액</PriceName>
            <PriceAmount>15,000원</PriceAmount>
          </PriceItem>
          <TotalPrice>
            <PriceName>결제금액</PriceName>
            <PriceAmount>15,200원</PriceAmount>
          </TotalPrice>
        </Section>
        <PayButton type="submit">결제하기</PayButton>
      </form>
    </>
  );
};

// Styled components

const HeaderSpacer = styled.div`
  height: 80px; // 헤더와 섹션 사이의 간격
`;

const Section = styled.section`
  width: 100%;
  max-width: 518px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const AddressTypeGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const AddressType = styled.button`
  width: 70px;
  height: 29.62px;
  background-color: ${(props) => (props.$active ? "#F4975C" : "#D2DAE8")};
  color: ${(props) => (props.$active ? "#FFFFFF" : "#6D697A")};
  border: none;
  border-radius: 30px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 300;
`;

const Input = styled.input`
  width: 100%;
  height: 24px;
  border: 1px solid #6d697a;
  border-radius: 30px;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const PhoneInput = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 32%;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`;

const ProductDetails = styled.div`
  margin-left: 10px;
`;

const Seller = styled.p`
  font-size: 10px;
  color: #7d7d7d;
`;

const ProductName = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const ProductOption = styled.p`
  font-size: 10px;
  color: #7d7d7d;
`;

const ProductQuantity = styled.p`
  font-size: 10px;
  color: #7d7d7d;
`;

const ProductPrice = styled.p`
  font-size: 8px;
  font-weight: 700;
  margin-left: auto;
`;

const DiscountItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const DiscountName = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const DiscountAmount = styled.p`
  font-size: 10px;
  color: #7d7d7d;
`;

const TotalDiscount = styled(DiscountItem)`
  border-top: 1px solid #6d697a;
  padding-top: 5px;
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const RadioButton = styled.input`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-right: 10px;
`;

const PaymentName = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const PriceItem = styled(DiscountItem)``;

const PriceName = styled(DiscountName)``;

const PriceAmount = styled(DiscountAmount)``;

const TotalPrice = styled(TotalDiscount)``;

const PayButton = styled.button`
  width: 100%;
  height: 59px;
  background-color: #f4975c;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 70px;
`;

export default CreateOrder;
