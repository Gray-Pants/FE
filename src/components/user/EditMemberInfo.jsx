import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import PropTypes from 'prop-types';
import { apiClient } from "../../api/ApiClient";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  padding: 0;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 12px;
  font-size: 20px;
`;

const InputField = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.label`

  display: block;
  font-size: 0.8rem;
  color: #333;
  margin-bottom: 5px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 92%;
  height: 41px;
  background: #F7F7F7;
  border: none;
  border-radius: 15px;
  padding: 0 15px;
  font-size: 15px;
  color: #7C7C7C;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 18px;
  color: #7D7D7D;
`;

const Button = styled.button`
  width: 100%;
  height: 59px;
  background: #EAEAEA;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const AddressInput = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const AddressField = styled.input`
  width: 100%;
  height: 23px;
  border: 1px solid #6D697A;
  border-radius: 30px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 15px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
`;

const SavedAddressItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  background: #F7F7F7;
  border-radius: 15px;
`;

const AddressHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const AddressName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const AddressInfo = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

const EditMemberInfo = () => {
  const [nickname, setNickname] = useState("지갑이 얇아 슬픈 짐승");
  const [phone, setPhone] = useState("010-9071-9904");
  const [address, setAddress] = useState("상도동 7-104 초원빌라 105호");

  const handleSave = () => {
    console.log("정보 저장:", { nickname, phone, address });
  };

  const handleDelete = () => {
    console.log("회원 정보 삭제");
  };

  return (
    <>
      <Header>
        <BackButton>←</BackButton>
        <Title>회원 정보</Title>
        <IconContainer>
          <span>🏠</span>
          <span>👤</span>
          <span>🛒</span>
        </IconContainer>
      </Header>
      <Label>닉네임</Label>
      <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <Label>휴대폰 번호</Label>
      <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Label>주소</Label>
      <Input value={address} onChange={(e) => setAddress(e.target.value)} />
      <AddAddressButton>배송지 추가</AddAddressButton>
      <DeleteTextButton onClick={handleDelete}>회원 정보 삭제</DeleteTextButton>
      <SaveButton onClick={handleSave}>변경하기</SaveButton>
    </>
  );
}

export default UserInfoEditPage;