import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import PropTypes from 'prop-types';

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
  border-bottom: 7px solid #ffa500;
  margin-bottom: 12px;
`;

const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
`;

const BackIcon = styled.div`
  cursor: pointer;
  padding-left: 10px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 0.9rem;
  color: #7C7C7C;
  background-color: #F6F6F6;
  border: 1px solid #F6F6F6;
  border-radius: 15px;
`;

const AddAddressButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #F6F6F6;
  border: 4px solid #F6F6F6;
  border-radius: 15px; //버튼 모서리
  font-size: 0.8rem;
  color: #333;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 200px;
`;

const DeleteTextButton = styled.div`
  text-align: center;
  font-size: 10px;
  color: #C0C0C0;
  cursor: pointer;
  margin: 10px 0;
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #EAEAEA;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #000000;
  cursor: pointer;
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
        <HeaderIcon>
          <BackIcon>
            <FiArrowLeft aria-label="뒤로 가기" />
          </BackIcon>
        </HeaderIcon>
        <span>회원 정보</span>
        <HeaderIcon>
          <FiHome aria-label="홈" />
        </HeaderIcon>
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
};

EditMemberInfo.propTypes = {
  nickname: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
};

export default EditMemberInfo;
