import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiChevronLeft, FiHome, FiUser } from "react-icons/fi";

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  width: calc(100vw - 40px); /* 40px은 양쪽의 20px 패딩을 고려한 값 */
  max-width: 400px; /* 웹 화면에서 고정된 최대 너비 */
  background-color: #fff;
  border-bottom: 10px solid orange;
  box-sizing: border-box;
  z-index: 10; /* 다른 콘텐츠 위에 표시되도록 z-index 추가 */
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

const NavIcon = styled.div`
  font-size: 24px;
  margin-bottom: 0px;
`;

const NavText = styled.span`
  font-size: 12px;
`;

const PageHeader = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <>
      <NavigationBar>
        <NavItem to="#" onClick={handleGoBack}>
          <FiChevronLeft />
        </NavItem>
        <NavItem to="/order">
          <NavText>주문서 작성</NavText>
        </NavItem>
        <div
          style={{
            display: "flex",
            width: "70px",
            justifyContent: "space-around",
          }}
        >
          <NavItem to="/">
            <NavIcon>
              <FiHome />
            </NavIcon>
          </NavItem>
          <NavItem to="/profile">
            <NavIcon>
              <FiUser />
            </NavIcon>
          </NavItem>
        </div>
      </NavigationBar>
    </>
  );
};

export default PageHeader;
