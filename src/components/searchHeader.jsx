import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch, FiShoppingCart, FiBell } from "react-icons/fi";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  min-width: 400px; /* 최소 너비 설정 */
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
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
  flex: 1; // 남는 공간 차지
  border: none; // 테두리 없음
  background-color: transparent; // 배경 투명
  outline: none; // 포커스 시 테두리 없음
  margin-left: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px; // 아이콘 간 간격 조절

  svg {
    margin-right: 10px; // 아이콘 간 간격 조절
    cursor: pointer; // 커서 모양 변경
  }
`;

const SearchHeader = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // 검색 로직 구현
    console.log("검색어:", searchText);
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
          <FiShoppingCart size={20} /> {/* 장바구니 아이콘 */}
          <FiBell size={20} /> {/* 알림 아이콘 */}
        </IconContainer>
    </HeaderContainer>
  );
};

export default SearchHeader;
