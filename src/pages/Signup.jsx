import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../ui/container";

const Logo = styled.img`
    width: 100px;
    margin-bottom: 2px;
`;

const Title = styled.h2`
    margin-top: 2px;
    margin-bottom: 20px;
`;

const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    width: 100%; /* 버튼도 인풋 필드와 동일한 너비로 설정 */
`;

const InputWrapper = styled.div`
    width: 80%;
`;

const EmailContainer = styled.div`
    display: flex;
    justify: space-between;
    width: 105%;
    align-items: start;
`;

const EmailInput = styled(InputField)`
    width: auto;
    margin-right: 10px; /* 버튼과의 간격을 설정 */
`;

const VerifyButton = styled(Button)`
    background-color: #2196f3;
    width: auto; /* 버튼 너비를 자동으로 설정하여 내용에 맞게 조절 */
    margin-left: 20px;
    flex-shrink: 0; /* 버튼의 크기가 줄어들지 않도록 설정 */
`;

// 회원가입 컴포넌트
function SignUp() {
    const [singupState, setSignupState] = useState({
        name: "",
        email: "",
        authCode: "",
        password: "",
        passwordCheck: "",
        phoneNumber: "",
        address: "",
    
    });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSignUp = () => {
    // 회원가입 로직 (API 요청 등)
    console.log("회원가입 정보:", {
      name,
      email,
      authCode,
      password,
      passwordCheck,
      phoneNumber,
      address,
    });
  };

  const handleVerifyEmail = () => {
    // 이메일 인증 로직 (API 요청 등)
    console.log("이메일 인증 요청:", email);
  };

  return (
    <>
      <Link to="/">
      <Logo src="/images/main-icon.png" alt="logo" />
      </Link>
      <Title>회원가입</Title>
      <InputWrapper>
        <InputField type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <EmailContainer >
          <InputField type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <VerifyButton onClick={handleVerifyEmail}>인증</VerifyButton>
        </EmailContainer>
        <InputField type="text" placeholder="인증번호" value={authCode} onChange={(e) => setAuthCode(e.target.value)} />
        <InputField type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <InputField type="password" placeholder="Check the password" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
        <InputField type="tel" placeholder="휴대폰 번호" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <InputField type="text" placeholder="주소" value={address} onChange={(e) => setAddress(e.target.value)} />
        <Button onClick={handleSignUp}>회원가입</Button>
      </InputWrapper>
    </>
  );
}

export default SignUp;