import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { FiChevronLeft, FiSearch, FiX } from "react-icons/fi";
import FooterNav from "./FooterNav";

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

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const SearchBarContainer = styled.div`
  position: relative; /* relative positioning for absolute child */
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

const ClearButton = styled(FiX)`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // 검색 로직 구현
    console.log("검색어:", searchText);
  };

  const handleClearInput = () => {
    setSearchText("");
  };

  return (
    <HeaderContainer>
      <NavItem to="/">
        <FiChevronLeft />
      </NavItem>
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
        <ClearButton onClick={handleClearInput} />
      </SearchBarContainer>
      <FooterNav />
    </HeaderContainer>
  );
};

export default SearchBar;
