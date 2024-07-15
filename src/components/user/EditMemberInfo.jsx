import React, { useState } from 'react';
import styled from 'styled-components';

// ... (이전의 styled components는 그대로 유지)

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

function UserInfoEditPage() {
  const [nickname, setNickname] = useState("지갑이 얇아 슬픈 짐승");
  const [addressName, setAddressName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [savedAddresses, setSavedAddresses] = useState([]);

  const handleAddAddress = () => {
    if (addressName && phoneNumber && address) {
      setSavedAddresses([...savedAddresses, { addressName, phoneNumber, address }]);
      setAddressName("");
      setPhoneNumber("");
      setAddress("");
    }
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
      <Divider />

      <InputField>
        <Label>닉네임</Label>
        <InputWrapper>
          <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
        </InputWrapper>
      </InputField>

      <Button>변경하기</Button>

      <InputField>
        <Label>주소 이름</Label>
        <InputWrapper>
          <Input 
            placeholder="우리집" 
            value={addressName} 
            onChange={(e) => setAddressName(e.target.value)}
          />
          <ClearButton onClick={() => setAddressName("")}>×</ClearButton>
        </InputWrapper>
      </InputField>

      <InputField>
        <Label>휴대폰 번호</Label>
        <InputWrapper>
          <Input 
            placeholder="010-9071-9904" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <ClearButton onClick={() => setPhoneNumber("")}>×</ClearButton>
        </InputWrapper>
      </InputField>

      <InputField>
        <Label>주소</Label>
        <InputWrapper>
          <Input 
            placeholder="상도동 7-104 초원빌라 105호" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)}
          />
          <ClearButton onClick={() => setAddress("")}>×</ClearButton>
        </InputWrapper>
      </InputField>

      <Button onClick={handleAddAddress}>배송지 추가</Button>

      {savedAddresses.map((savedAddress, index) => (
        <SavedAddressItem key={index}>
          <AddressHeader>
            <AddressName>{savedAddress.addressName}</AddressName>
          </AddressHeader>
          <Divider />
          <AddressInfo>{savedAddress.phoneNumber}</AddressInfo>
          <AddressInfo>{savedAddress.address}</AddressInfo>
        </SavedAddressItem>
      ))}
    </>
  );
}

export default UserInfoEditPage;