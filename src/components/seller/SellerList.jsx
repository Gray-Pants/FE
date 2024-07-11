import React from 'react';
import styled from 'styled-components';

const SellerList = () => {
  const products = [
    { name: '상품1', stock: '재고', price: '가격' },
    { name: '상품2', stock: '재고', price: '가격' },
    { name: '상품3', stock: '재고', price: '가격' },
    { name: '상품4', stock: '재고', price: '가격' },
    { name: '상품5', stock: '재고', price: '가격' },
  ];

  return (
    <ListContainer>
      <Title>상품 목록</Title>
      {products.map((product, index) => (
        <ProductBox key={index}>
          <ProductImage />
          <ProductInfo>
            <ProductRow>
              <ProductLabel>이름:</ProductLabel>
              <ProductName>{product.name}</ProductName>
              <Placeholder width="30%" />
            </ProductRow>
            <ProductRow>
              <ProductLabel>재고:</ProductLabel>
              <ProductStock>{product.stock}</ProductStock>
              <Placeholder width="30%" />
            </ProductRow>
            <ProductRow>
              <ProductLabel>가격:</ProductLabel>
              <ProductPrice>{product.price}</ProductPrice>
              <Placeholder width="30%" />
            </ProductRow>
          </ProductInfo>
        </ProductBox>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
`;

const ProductBox = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 15px;
  display: flex;
  background: #F5F5F5;
  border-radius: 8px;
  overflow: hidden;
`;

const ProductImage = styled.div`
  width: 120px;
  height: 120px;
  background: #D9D9D9;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
`;

const ProductRow = styled.div`
  display: flex;
  align-items: center;
`;

const ProductLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  width: 40px;
  margin-right: 5px;
`;

const ProductText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0;
  width: 60px;
`;

const ProductName = styled(ProductText)``;

const ProductStock = styled(ProductText)``;

const ProductPrice = styled(ProductText)``;

const Placeholder = styled.div`
  height: 20px;
  background: #E0E0E0;
  border-radius: 4px;
  margin-left: 10px;
  width: ${props => props.width || '50%'};
`;

export default SellerList;