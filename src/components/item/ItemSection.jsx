import React from "react";
import styled from "styled-components";

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
  return (
    <ProductSectionContainer>
      <Recommand>{title}</Recommand>
      {products.map((product, index) => (
        <ProductItem key={index}>
          <ProductImage src={product.itemPhotos} alt={product.item_name} />
          <ItemName>{product.itemName}</ItemName>
        </ProductItem>
      ))}
    </ProductSectionContainer>
  );
};

export default ItemSection;
