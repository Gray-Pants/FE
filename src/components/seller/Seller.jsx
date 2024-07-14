import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const Button = styled.div`
  width: 100%;
  height: 60px;
  background: #D9D9D9;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* 추가된 스타일 */
`;

const ButtonText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

const ImageBox = styled.div`
  aspect-ratio: 1;
  background: #D9D9D9;
`;

const Seller = () => {
  const navigate = useNavigate();

  const handleItemAddClick = () => {
    navigate('/sellerItemAdd');
  };

  const handleSalesHistoryClick = () => {
    navigate('/sellerProductSalesDetails');
  };

  return (
    <>
      <TitleContainer>
        <MypageIcon src="../public/mypage.svg" alt="마이페이지 아이콘" />
        <Title>삼성스토어</Title>
      </TitleContainer>
      <Button onClick={handleItemAddClick}>
        <ButtonText>상품 등록하기</ButtonText>
      </Button>
      <Button onClick={handleSalesHistoryClick}>
        <ButtonText>판매 내역 페이지</ButtonText>
      </Button>
      <ImageGrid>
        {[...Array(9)].map((_, index) => (
          <ImageBox key={index} />
        ))}
      </ImageGrid>
    </>
  );
};

export default Seller;
