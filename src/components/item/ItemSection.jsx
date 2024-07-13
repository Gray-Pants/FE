import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";

const ProductSectionContainer = styled.div`
  padding: 10px 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  width: 100%;
  text-align: center;
`;

const ProductItem = styled.div`
  max-width: 100px;
  min-width: 100px;
  margin: 5px;
  background-color: #fff; /* Change background color to white */
  height: 100px; /* Placeholder for product image */
  display: inline-block;
  text-align: center; /* Center align text */
  padding: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the area */
`;

const ItemName = styled.div`
  font-family: "TheJamsil3Regular";
  font-size: 10px;
  text-align: center;
`;

const Recommand = styled.div`
  font-family: "TheJamsil3Regular";
  padding: 10px;
  text-align: left;
`;

const ItemSection = ({ title, products }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleClickProduct = (itemId) => {
    navigate(`/${itemId}/details`); // itemId를 사용하여 페이지 이동
  };

  return (
    <ProductSectionContainer>
      <Recommand>{title}</Recommand>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          onClick={() => handleClickProduct(product.itemId)}
        >
          <ProductImage src={product.itemPhotos} alt={product.itemName} />
          <ItemName>{product.itemName}</ItemName>
          <ItemName>{product.itemPrice}원</ItemName>
        </ProductItem>
      ))}
    </ProductSectionContainer>
  );
};

export default ItemSection;
