import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"; // 아이콘 라이브러리

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  background: #FFFFFF;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  border-bottom: 2px solid #F4975C;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
`;

const Section = styled.div`
  border-bottom: 1px solid #E0E0E0;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

const SectionContent = styled.div`
  padding: 0 20px 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
`;

const AddressGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const AddressButton = styled.button`
  padding: 10px;
  background: #F4F4F4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AddressTypeGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const AddressType = styled.button`
  padding: 5px 15px;
  background: ${props => props.active ? "#F4975C" : "#F4F4F4"};
  color: ${props => props.active ? "#FFFFFF" : "#000000"};
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductDetails = styled.div``;

const ProductName = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-weight: 700;
  color: #F4975C;
`;

const DiscountItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

const RadioButton = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #E0E0E0;
  border-radius: 50%;
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  margin-top: 15px;
`;

const Button = styled.button`
  width: 100vw;
  padding: 15px;
  background: #F4975C;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  left: 0;
`;

function CreateOrder() {
  const [activeSections, setActiveSections] = useState({
    배송지: true,
    상품정보: true,
    할인혜택: true,
    결제수단: true,
    최종결제금액: true,
  });
  const [addressType, setAddressType] = useState("집");

  const toggleSection = (sectionName) => {
    setActiveSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  return (
    <>
      <Header>
        <BackButton>{"<"}</BackButton>
        <Title>주문서 작성</Title>
        <Icons>
          <span>🏠</span>
          <span>👤</span>
        </Icons>
      </Header>

      <Section>
        <SectionHeader onClick={() => toggleSection("배송지")}>
          <SectionTitle>배송지</SectionTitle>
          {activeSections["배송지"] ? <FiChevronUp /> : <FiChevronDown />}
        </SectionHeader>
        {activeSections["배송지"] && (
          <SectionContent>
            <AddressTypeGroup>
              <AddressType active={addressType === "집"} onClick={() => setAddressType("집")}>집</AddressType>
              <AddressType active={addressType === "친구집"} onClick={() => setAddressType("친구집")}>친구집</AddressType>
            </AddressTypeGroup>
            <Input placeholder="이름 *" />
            <Input placeholder="휴대폰번호(선택)" />
            <AddressGroup>
              <Input placeholder="주소 *" />
              <AddressButton>주소 찾기</AddressButton>
            </AddressGroup>
            <Input placeholder="상세주소" />
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionHeader onClick={() => toggleSection("상품정보")}>
          <SectionTitle>상품정보</SectionTitle>
          {activeSections["상품정보"] ? <FiChevronUp /> : <FiChevronDown />}
        </SectionHeader>
        {activeSections["상품정보"] && (
          <SectionContent>
            <ProductInfo>
              <ProductImage src="path_to_product_image.jpg" alt="Product" />
              <ProductDetails>
                <ProductName>[진짜 쌈] 회색바지단 시그니처 코튼 버뮤다 팬츠</ProductName>
                <ProductPrice>15,200원</ProductPrice>
              </ProductDetails>
            </ProductInfo>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionHeader onClick={() => toggleSection("할인혜택")}>
          <SectionTitle>할인혜택</SectionTitle>
          {activeSections["할인혜택"] ? <FiChevronUp /> : <FiChevronDown />}
        </SectionHeader>
        {activeSections["할인혜택"] && (
          <SectionContent>
            <DiscountItem>
              <span>상품할인</span>
              <span>13,000원</span>
            </DiscountItem>
            <DiscountItem>
              <span>등급할인</span>
              <span>2,000원</span>
            </DiscountItem>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionHeader onClick={() => toggleSection("결제수단")}>
          <SectionTitle>결제수단</SectionTitle>
          {activeSections["결제수단"] ? <FiChevronUp /> : <FiChevronDown />}
        </SectionHeader>
        {activeSections["결제수단"] && (
          <SectionContent>
            <PaymentMethod>
              <RadioButton />
              <span>카드 결제</span>
            </PaymentMethod>
            <PaymentMethod>
              <RadioButton />
              <span>계좌 이체</span>
            </PaymentMethod>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionHeader onClick={() => toggleSection("최종결제금액")}>
          <SectionTitle>최종 결제금액</SectionTitle>
          {activeSections["최종결제금액"] ? <FiChevronUp /> : <FiChevronDown />}
        </SectionHeader>
        {activeSections["최종결제금액"] && (
          <SectionContent>
            <DiscountItem>
              <span>상품금액</span>
              <span>30,200원</span>
            </DiscountItem>
            <DiscountItem>
              <span>할인금액</span>
              <span>15,000원</span>
            </DiscountItem>
            <TotalAmount>
              <span>결제금액</span>
              <span style={{color: '#F4975C'}}>15,200원</span>
            </TotalAmount>
          </SectionContent>
        )}
      </Section>

      <Button>결제하기</Button>
    </>
  );
}

export default CreateOrder;