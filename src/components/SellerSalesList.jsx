import React from 'react';
import styled from 'styled-components';

const SellerSalesList = () => {
  return (
    <>
      <Title>판매 내역</Title>
      {[1, 2, 3].map((index) => (
        <SalesEntry key={index}>
          <OrderDate>주문 날짜</OrderDate>
          <SalesTable>
            <TableHeader>
              <HeaderItem>상품명</HeaderItem>
              <HeaderItem>재고</HeaderItem>
              <HeaderItem>판매수량</HeaderItem>
              <HeaderItem>가격</HeaderItem>
              <HeaderItem>총판매가격</HeaderItem>
            </TableHeader>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </SalesTable>
        </SalesEntry>
      ))}
    </>
  );
};

const Title = styled.h1`
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #000000;
  margin: 20px 0;
`;

const SalesEntry = styled.div`
  margin-top: 30px;
`;

const OrderDate = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 30px;
`;

const SalesTable = styled.div`
  width: 100%;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const HeaderItem = styled.div`
  flex: 1;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TableCell = styled.div`
  flex: 1;
  height: 20px;
  background: #D9D9D9;
  margin: 0 2px;
`;

export default SellerSalesList;