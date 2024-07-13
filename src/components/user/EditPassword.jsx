import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeft, FiHome, FiUser } from "react-icons/fi";
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  color: #333;
  font-size: 1rem;
  text-align: center;
`;

const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
`;

const BackIcon = styled.div`
  cursor: pointer;
`;

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  color: #474747;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px; 
  font-size: 1rem; 
  color: #7C7C7C;
  background-color: #F6F6F6;
  border: 1px solid #F6F6F6;
  border-radius: 10px; 
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 15px; 
  background-color: #EAEAEA;
  border: none;
  border-radius: 10px;
  font-size: 1rem; 
  color: #000000;
  cursor: pointer;
  margin-top: 20px;
`;

const Message = styled.p`
  color: ${props => props.isError ? 'red' : 'green'};
  text-align: center;
  margin-top: 10px;
`;

const EditPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSave = async () => {
    if (newPassword !== confirmNewPassword) {
      setMessage("새 비밀번호가 일치하지 않습니다.");
      setIsError(true);
      return;
    }

    const userId = parseInt(localStorage.getItem('userId'), 10);

    try {
      const response = await axios.post('/api/password/change', {
        userId: userId,
        password: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmNewPassword
      });

      if (response.data.success) {
        setMessage(response.data.response);
        setIsError(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        setMessage(response.data.response.message);
        setIsError(true);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.response.message);
      } else {
        setMessage("비밀번호 변경 중 오류가 발생했습니다.");
      }
      setIsError(true);
      console.error('Error changing password:', error);
    }
  };

  return (
    <Container>
      <Header>
        <HeaderIcon>
          <BackIcon>
            <FiArrowLeft />
          </BackIcon>
        </HeaderIcon>
        <span>비밀번호 수정</span>
        <HeaderIcon>
          <FiHome />
          <FiUser />
        </HeaderIcon>
      </Header>
      <Label>현재 비밀번호</Label>
      <Input
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <Label>새로운 비밀번호</Label>
      <Input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <Label>새로운 비밀번호 확인</Label>
      <Input
        type="password"
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
      />
      <SaveButton onClick={handleSave}>변경하기</SaveButton>
      {message && <Message isError={isError}>{message}</Message>}
    </Container>
  );
};

export default EditPassword;