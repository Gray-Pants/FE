import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiHome, FiList, FiSearch, FiUser } from "react-icons/fi";

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding: 15px;
  background-color: #fff;
  min-width: 250px;
  max-width: 400px; /* 웹 화면에서 고정된 최대 너비 */
  height: 60px;
  border-top: 2px solid #d2dae8;
  box-sizing: border-box;

  width: calc(100vw - 40px);
`;

const NavItem = styled(Link)`
  // Link 컴포넌트 스타일링
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

const NavIcon = styled.img`
  font-size: 24px; // 아이콘 크기 조절
  margin-bottom: 5px;
`;

const NavText = styled.span`
  font-size: 12px; // 텍스트 크기 조절
`;

const FooterNav = () => {
  return (
    <>
      <NavigationBar>
        <NavItem to="/">
          <NavIcon as={FiHome} /> {/* as 속성을 사용하여 아이콘 변경 */}
          {/* <NavText>홈</NavText> */}
        </NavItem>
        <NavItem to="/category">
          <NavIcon as={FiList} />
          {/* <NavText>목록</NavText> */}
        </NavItem>
        <NavItem to="/search">
          <NavIcon as={FiSearch} />
          {/* <NavText>검색</NavText> */}
        </NavItem>
        <NavItem to="/mypage">
          <NavIcon as={FiUser} />
          {/* <NavText>마이페이지</NavText> */}
        </NavItem>
      </NavigationBar>
    </>
  );
};

export default FooterNav;
