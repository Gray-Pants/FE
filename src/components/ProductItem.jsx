import React, { useState } from "react";
import styled from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

// --- Styled Components ---

const ProductItemContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
`;

const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1; // 텍스트 부분이 왼쪽으로 붙도록 설정
`;

const CheckBox = styled.div`
  margin-right: 5px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 100px;
  object-fit: cover;
  margin-right: 15px;
`;

const ProductInfo = styled.div`
  display: flex; /* flexbox 적용 */
  flex-direction: column; /* 세로 배치 */
  justify-content: space-between; /* 공간 분배 */
  flex: 1;
  margin-left: 15px; /* 이미지와의 간격 */
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  color: #999;
  margin: 5px 0 0;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const OptionSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
  flex: 1; /* 옵션 선택 영역이 왼쪽으로 붙도록 설정 */
`;

const QuantitySelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
`;

// --- 컴포넌트 ---

const ProductItem = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <ProductItemContainer>
      <ProductHeader>
        <CheckBoxLabel>
          <CheckBox>
            <MdCheckBoxOutlineBlank size={24} />
          </CheckBox>
          동대문 판매왕 배송상품
        </CheckBoxLabel>
      </ProductHeader>

      <ProductInfo>
        <ProductImage src={product.image} alt={product.name} />
        <div>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
        </div>
      </ProductInfo>

      <OptionContainer>
        <OptionSelect
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {product.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </OptionSelect>
        <QuantitySelect
          value={selectedQuantity}
          onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
        >
          {[1, 2, 3].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </QuantitySelect>
      </OptionContainer>
    </ProductItemContainer>
  );
};

// --- 더미 데이터 ---

const dummyProduct = {
  image: "../../public/images/상세이미지.svg",
  name: "[진짜 쌈] 회색바지단 시그니처 코튼 버뮤다 팬츠",
  price: 15200,
  options: ["멜란지/L"], // 옵션은 하나만
};

// --- 렌더링 ---

export default function App() {
  return (
    <div>
      <ProductItem product={dummyProduct} />
    </div>
  );
}
