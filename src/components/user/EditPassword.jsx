import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeft, FiHome, FiUser } from "react-icons/fi";

// Styled Components

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

// Component

const Editpassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSave = () => {
    // Save button click logic
    console.log("Password change:", { currentPassword, newPassword, confirmNewPassword });
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
    </Container>
  );
};

export default Editpassword;
