import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../security/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: calc(100vw - 40px); /* 40px은 양쪽의 20px 패딩을 고려한 값 */
    max-width: 400px; /* 웹 화면에서 고정된 최대 너비 */
    margin: auto /* 중앙 정렬을 위한 margin 설정 */;
    height: 100vh;
`;

const Logo = styled.img`
    width: 100px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    ${(props) => (props.$signup ? `
        background-color: white;
        color: black;
        border: 1px solid black;
    ` : `
        background-color: black;
        color: white;
    `)}
`;

const SocialLoginText = styled.p`
    font-size: 12px;
    margin-top: 20px;
    color: #777;
`;

const SocialLogin = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 10px;
`;

const SocialIcon = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;


const Login = () => {
    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const authContext = useAuth();

    const onChange = (e) => {
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit() {
        if(await authContext.login(loginState.email, loginState.password)){
            navigate(`/`)
        } else {
            alert('로그인 실패');
        }
    }

    return (
        <>
            <Link to="/">
            <Logo src="/images/main-icon.png" alt="logo" />
            </Link>
            <Input type="email" placeholder="email" name={"email"} onChange={onChange} value={loginState.email} />
            <Input type="password" placeholder="password" name={"password"} onChange={onChange} value={loginState.password}/>
            <Button $signup>회원가입</Button>
            <Button onClick={handleSubmit}>로그인</Button>
            <SocialLoginText>소셜 로그인</SocialLoginText>
            <SocialLogin>
                <Link to="http://kakao.com">
                <SocialIcon src="/images/login-kakao.webp" alt="Kakao" />
                </Link>
                <Link to="http://naver.com">
                <SocialIcon src="/images/login-naver.png" alt="Naver" />
                </Link>
                <Link to="http://google.com">
                <SocialIcon src="/images/login-google.png" alt="Google" />
                </Link>
            </SocialLogin>
        </>
    );
}

export default Login;
