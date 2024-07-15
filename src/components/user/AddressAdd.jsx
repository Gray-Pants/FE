import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일링 컴포넌트 정의
const Container = styled.div`
  padding: 20px;
`;

const Form = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: orange;
  border: none;
  color: white;
  cursor: pointer;
`;

const AddressList = styled.div`
  margin-top: 20px;
`;

const AddressItem = styled.div`
  border: 1px solid #e0e0e0;
  padding: 10px;
  margin-bottom: 10px;
`;

const AddressInfo = styled.div`
  margin-bottom: 5px;
`;

const AddressBook = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAddress = () => {
    setAddresses((prev) => [...prev, newAddress]);
    setNewAddress({ name: '', phone: '', address: '' }); // 입력 필드 초기화
  };

  return (
    <Container>
      <Form>
        <Input
          name="name"
          value={newAddress.name}
          onChange={handleChange}
          placeholder="주소 이름"
        />
        <Input
          name="phone"
          value={newAddress.phone}
          onChange={handleChange}
          placeholder="휴대폰 번호"
        />
        <Input
          name="address"
          value={newAddress.address}
          onChange={handleChange}
          placeholder="주소"
        />
        <Button onClick={handleAddAddress}>배송지 추가</Button>
      </Form>

      <AddressList>
        {addresses.map((address, index) => (
          <AddressItem key={index}>
            <AddressInfo>이름: {address.name}</AddressInfo>
            <AddressInfo>휴대폰 번호: {address.phone}</AddressInfo>
            <AddressInfo>주소: {address.address}</AddressInfo>
          </AddressItem>
        ))}
      </AddressList>
    </Container>
  );
};

export default AddressBook;
