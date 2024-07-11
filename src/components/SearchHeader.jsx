import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiBell } from "react-icons/fi";
import { apiClient } from "../api/ApiClient";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  width: calc(100vw - 40px); /* 40px은 양쪽의 20px 패딩을 고려한 값 */
  min-width: 250px;
  max-width: 400px; /* 웹 화면에서 고정된 최대 너비 */
  box-sizing: border-box; /* padding, border 포함한 크기 설정 */
  justify-content: space-between; /* 자식 요소 사이의 공간을 최대로 설정 */
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: auto;
    height: 40px;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 25px;
  padding: 8px 15px;
  margin-left: 20px;
  flex: 1;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Input = styled.input`
  flex: 1; /* 남는 공간 차지 */
  border: none; /* 테두리 없음 */
  background-color: transparent; /* 배경 투명 */
  outline: none; /* 포커스 시 테두리 없음 */
  margin-left: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px; /* 아이콘 간 간격 조절 */

  svg {
    margin-right: 10px; /* 아이콘 간 간격 조절 */
    cursor: pointer; /* 커서 모양 변경 */
  }
`;

const SearchHeader = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
     apiClient.get(`/items/${searchText}`);
    console.log("검색 결과:", searchText);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <HeaderContainer>
      <Logo src="/images/greyPantsIcon.png" alt="logo image" />
      <SearchBarContainer>
        <FiSearch />
        <Input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </SearchBarContainer>
      <IconContainer>
        <FiShoppingCart size={20} onClick={handleCartClick} /> {/* 장바구니 아이콘 */}
        <FiBell size={20} /> {/* 알림 아이콘 */}
      </IconContainer>
    </HeaderContainer>
  );
};

export default SearchHeader;
