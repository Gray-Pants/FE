import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SellerList from './SellerList';

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-left: 10px;
`;

const MypageIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Seller = () => {


  return (
    <>
      <TitleContainer>
        <MypageIcon src="../public/mypage.svg" alt="마이페이지 아이콘" />
        <Title>삼성스토어</Title>
      </TitleContainer>
      <SellerList />
    </>
  );
};

export default Seller;
