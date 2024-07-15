import React, { useState } from 'react';
import styled from 'styled-components';

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
  font-size: 15px;
  color: #474747;
  margin-bottom: 5px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
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

function UserInfoEditPage() {
  const [nickname, setNickname] = useState("지갑이 얇아 슬픈 짐승");
  const [addressName, setAddressName] = useState("우리집");
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

      {/* <AddressInput>
        <Label>{addressName || '배송지 추가'}</Label>
        <AddressField placeholder="서울특별시 어쩌고 ~" />
        <AddressField placeholder="01011112222" />
      </AddressInput> */}
    </>
  );
}

export default UserInfoEditPage;