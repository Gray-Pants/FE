import React from 'react';
import styled from 'styled-components';

const SalesHistoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
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

const OrderTable = ({ date }) => (
  <OrderSection>
    <OrderDate>{date}</OrderDate>
    <Table>
      <thead>
        <tr>
          <TableHeader>상품명</TableHeader>
          <TableHeader>재고</TableHeader>
          <TableHeader>판매 수량</TableHeader>
          <TableHeader>가격</TableHeader>
          <TableHeader>총 판매가격</TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableCell>상품 A</TableCell>
          <TableCell>10</TableCell>
          <TableCell>2</TableCell>
          <TableCell>10,000원</TableCell>
          <TableCell>20,000원</TableCell>
        </tr>
        <tr>
          <TableCell>상품 B</TableCell>
          <TableCell>15</TableCell>
          <TableCell>1</TableCell>
          <TableCell>15,000원</TableCell>
          <TableCell>15,000원</TableCell>
        </tr>
      </tbody>
    </Table>
  </OrderSection>
);

const SalesHistory = () => {
  return (
    <SalesHistoryWrapper>
      <Title>판매 내역</Title>
      <OrderTable date="2023년 7월 1일" />
      <OrderTable date="2023년 6월 30일" />
      <OrderTable date="2023년 6월 29일" />
    </SalesHistoryWrapper>
  );
};

export default SalesHistory;