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
  margin-top: 15px;
  margin-bottom: 10px;
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
  const [userInfo, setUserInfo] = useState({});
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [addressName, setAddressName] = useState("");
  const [addrList, setAddrList] = useState([]);
  
  const getUserInfo = async () => {
    const res = await apiClient.get("/users/info");
    console.log(res);
    setUserInfo(res.data.response);
    setNickname(res.data.response.username);

  }

  useEffect(() => {
    getUserInfo();
  }, [])

  const handleSave = async () => {
    if (nickname === "" || nickname === userInfo.username) {
      alert("변경할 닉네임을 입력해주세요.");
      return;
    }
    const res = await apiClient.put("/users/username", {
      changeName: nickname,
    });
    if(res.status === 200) {
      setAddrList([...addrList, address])
      alert("회원 정보가 변경되었습니다.");
    } else {
      alert("회원 정보 변경에 실패했습니다.");
    }

  };


  const handleAddAddress = async () => {
    const res = await apiClient.post("/users/newaddr", {
      userAddrName: addressName,
      userAddr: address,
      userAddrPhone: phone
    });
    console.log(res);
    if(res.status === 200) {
      alert("배송지가 추가되었습니다.");
    } else {
      alert("배송지 추가에 실패했습니다.");
    }
  }

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
      <tr/>
      <Label>배송지명</Label>
      <Input value={addressName} placeholder="배송지명" onChange={(e) => setAddressName(e.target.value)} />
      <Label>휴대폰 번호</Label>
      <Input value={phone} placeholder="휴대폰 번호" onChange={(e) => setPhone(e.target.value)} />
      <Label>주소</Label>
      <Input value={address} placeholder="주소" onChange={(e) => setAddress(e.target.value)} />
      <AddAddressButton onClick={()=>handleAddAddress()}>배송지 추가</AddAddressButton>
      {/* <DeleteTextButton onClick={handleDelete}>회원 정보 삭제</DeleteTextButton> */}
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
