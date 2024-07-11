import React from 'react';
import styled from 'styled-components';

const SellerLogin = () => {
  return (
    <LoginPage>
      <MainBackground>
        <MainContent>
          <LogoButton src="..\public\logo.svg" alt="Logo" />
          <InputField placeholder="email" />
          <InputField type="password" placeholder="password" />
          <SignUpButton>회원가입</SignUpButton>
          <LoginButton>로그인</LoginButton>
        </MainContent>
      </MainBackground>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  position: relative;
  width: 1440px;
  height: 2836px;
  background: #FFFFFF;
`;

const MainBackground = styled.div`
  position: absolute;
  width: 1440px;
  height: 2843px;
  left: 0px;
  top: -7px;
  background: #FFFFFF;
`;

const MainContent = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 600px;
  height: 2836px;
  left: 417px;
  top: 0px;
  background: #FFFFFF;
  border: 1px solid #000000;
`;

const InputField = styled.input`
  position: absolute;
  width: 500px;
  height: 70px;
  left: calc(50% - 500px/2);
  background: #D9D9D9;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #000000;
  border: none;
  outline: none;

  &:first-of-type {
    top: 222px;
  }

  &:last-of-type {
    top: 312px;
  }
`;

const Button = styled.button`
  position: absolute;
  width: 284.65px;
  height: 60px;
  left: calc(50% - 284.65px/2);
  border: 2px solid #000000;
  border-radius: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  cursor: pointer;
`;

const SignUpButton = styled(Button)`
  top: 427px;
  background: transparent;
  color: #000000;
`;

const LoginButton = styled(Button)`
  top: 503px;
  background: #000000;
  color: #FFFFFF;
`;

const LogoButton = styled.img`
  position: absolute;
  width: 143px;
  height: 105.1px;
  left: calc(50% - 143px/2 - 3.5px);
  top: 72px;
`;

export default SellerLogin;