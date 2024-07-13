import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../ui/container";
import { sendEmail, signUpReqeust, verifyEmail } from "../../api/AuthenticationApiService";
import { useAuth } from "../../security/AuthContext";

const Logo = styled.img`
    width: 100px;
    margin-bottom: 2px;
`;

const Title = styled.h2`
    margin-top: 2px;
    margin-bottom: 20px;
`;

const InputField = styled.input`
    box-sizing: border-box;
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
    width: 100%;
`;

const EmailContainer = styled.div`
    display: flex;
    justify: space-between;
    width: 100%;
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
  const navigate = useNavigate();
  const authContext = useAuth();

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
  const [code, setCode] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleSignUp = async () => {
    const res = await signUpReqeust(name, email, password, verificationCode, `user`);

    if(res.status == 200) {
      alert("회원가입이 완료되었습니다.");
      const jwtToken = 'Bearer ' + res.headers['access-token'];
      authContext.setUserAccessToken(jwtToken);
      navigate(`/`);
    }
    else {
      alert("회원가입에 실패했습니다.");
    }
  };

  const handleSendEmail = async () => {
    await sendEmail(email, `user`);
    alert("인증 이메일을 전송했습니다.");
  }

  const handleVerifyEmail = async () => {
    if(email === null || email === "") {
      alert("이메일을 입력해주세요.");
      return;
    }
    const res = await verifyEmail(email, code, `user`);
    console.log(res);
    if(res.status == 200) {
      alert("이메일 인증이 완료되었습니다.");
      setVerificationCode(res.data.response.verifiedCode);
    } else {
      alert("이메일 인증에 실패했습니다.");
    }
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
          <VerifyButton onClick={handleSendEmail}>전송</VerifyButton>
        </EmailContainer>    
         <EmailContainer >
          <InputField type="number" placeholder="인증번호" value={code} onChange={(e) => setCode(e.target.value)} />
          <VerifyButton onClick={handleVerifyEmail}>인증</VerifyButton>
        </EmailContainer>
        <InputField type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <InputField type="password" placeholder="Check the password" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
        <Button onClick={handleSignUp}>회원가입</Button>
      </InputWrapper>
    </>
  );
}

export default SignUp;