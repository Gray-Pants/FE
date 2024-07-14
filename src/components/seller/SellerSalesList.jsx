import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../api/ApiClient';

const SalesHistoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
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

const OrderSection = styled.section`
  margin-bottom: 30px;
`;

const OrderDate = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 15px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #000000;
  padding: 10px 5px;
  border-bottom: 1px solid #D9D9D9;
`;

const TableCell = styled.td`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  text-align: center;
  padding: 10px 5px;
  background: #F9F9F9;
`;

const OrderTable = ({ date, products }) => (
  <OrderSection>

    {console.log(products)}
    <OrderDate>{date}</OrderDate>
    <Table>
      <thead>
        <tr>
          <TableHeader>상품명</TableHeader>
          <TableHeader>주문상태</TableHeader>
          <TableHeader>판매 수량</TableHeader>
          <TableHeader>가격</TableHeader>
          <TableHeader>총 판매가격</TableHeader>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
        <tr>
          <TableCell>{product.item.itemName}</TableCell>
          <TableCell>{product.orderItemStatus === 'ORDER' ? `결제완료` :
            '배송완료' }</TableCell>
          <TableCell>{product.orderItemQuantity}</TableCell>
          <TableCell>{product.orderItemPrice}</TableCell>
          <TableCell>총 판매 가격<tr/>{`${product.orderItemPrice * product.orderItemQuantity}원`}</TableCell>
        </tr>
      ))}
      </tbody>
    </Table>
  </OrderSection>
);

const SalesHistory = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await apiClient.get('/stores/my-order-items');
    console.log(res.data.response.orderItems);
    console.log(Object.keys(res.data.response.orderItems));
    setProducts(res.data.response.orderItems);
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <SalesHistoryWrapper>
      <Title>판매 내역</Title>
      {Object.keys(products).map((date) => console.log(date))}
      {Object.keys(products).map((dateval) =>
        <OrderTable date={dateval} products={products[dateval]} />
      )}
    </SalesHistoryWrapper>
  );
};

export default SalesHistory;