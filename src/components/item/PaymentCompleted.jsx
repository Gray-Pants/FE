import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PaymentCompletePage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <PageContainer>
      <MainContent>
        <LogoContainer>
          <Logo src="/images/greyPantsIcon.png" alt="logo image" />
        </LogoContainer>
        <CompletionMessage>결제 완료 되었습니다!</CompletionMessage>
        <HomeButton onClick={handleHomeClick}>홈으로</HomeButton>
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #f9f9f9;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CompletionMessage = styled.p`
  font-family: 'TheJamsil3Regular';
  font-size: 24px;
  color: #333;
  margin-bottom: 70px;
`;

const HomeButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  background-color: #f4975c;
  font-family: 'TheJamsil2Light';
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e2854f;
  }
`;

export default PaymentCompletePage;
