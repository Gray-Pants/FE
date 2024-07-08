import React from "react";
import styled from "styled-components";
import {
  FiSearch,
  FiShoppingCart,
  FiBell,
  FiHome,
  FiList,
  FiUser,
} from "react-icons/fi";
import { MdOutlineRecommend } from "react-icons/md";
import SearchHeader from "../components/SearchHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: calc(100vw - 40px);
  min-width: 250px;
  max-width: 400px;
  margin: auto;
  height: 100vh;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray; /* Placeholder for the logo */
`;

const SearchBar = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 0 10px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  flex-grow: 1;
  outline: none;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  overflow-x: auto;
  white-space: nowrap;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const MainSection = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 10px 0;
`;

const ProductSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductItem = styled.div`
  width: 48%;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  height: 150px; /* Placeholder for product image */
`;

const BottomNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #ccc;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  return (
    <Container>
      <SearchHeader />

      <CategoryMenu>
        <CategoryItem>상의</CategoryItem>
        <CategoryItem>하의</CategoryItem>
        <CategoryItem>신발</CategoryItem>
        <CategoryItem>모자</CategoryItem>
        <CategoryItem>가방</CategoryItem>
        <CategoryItem>소품</CategoryItem>
        <CategoryItem>언더웨어</CategoryItem>
      </CategoryMenu>

      <MainSection>
        <h3>오늘의 상품 (추천상품?)</h3>
        <ProductSection>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductSection>
      </MainSection>

      <BottomNavBar>
        <NavItem>
          <FiHome />
          <span>홈</span>
        </NavItem>
        <NavItem>
          <FiList />
          <span>목록</span>
        </NavItem>
        <NavItem>
          <FiSearch />
          <span>검색</span>
        </NavItem>
        <NavItem>
          <FiUser />
          <span>마이페이지</span>
        </NavItem>
      </BottomNavBar>
    </Container>
  );
};

export default Main;
