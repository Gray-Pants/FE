import React from 'react';
import styled from 'styled-components';

const PaymentCompletePage = () => {
  return (
    <PageContainer>
      <MainContent>
        <LogoContainer>
          <Logo src="/images/greyPantsIcon.png" alt="logo image" />
        </LogoContainer>
        <CompletionMessage>결제 완료 되었습니다!</CompletionMessage>
        <HomeButton>홈으로</HomeButton>
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 2836px;
  background: #FFFFFF;
`;

const MainContent = styled.div`
  position: absolute;
  width: 600px;
  height: 2836px;
  left: 417px;
  top: 0px;
  background: #FFFFFF;
  border: 1px solid #000000;
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 223px;
  height: 163.89px;
  left: calc(50% - 223px/2 - 0.5px);
  top: 55px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CompletionMessage = styled.p`
  position: absolute;
  width: 270px;
  height: 29px;
  left: calc(50% - 219px/2 - 0.5px);
  top: 287px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

const HomeButton = styled.button`
  position: absolute;
  width: 284.65px;
  height: 60px;
  left: calc(50% - 284.65px/2 - 0.68px);
  top: 427px;
  box-sizing: border-box;
  border: 2px solid #000000;
  border-radius: 30px;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #000000;
  cursor: pointer;
`;

export default PaymentCompletePage;