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
import SearchHeader from "../components/searchHeader";
import Categories from "../components/Categories";
import FooterNav from "../components/FooterNav";

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

const mainContent = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px; /* Placeholder for banner height */
  background-color: #ddd; /* Placeholder for banner background */
`;

const ProductSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const ProductItem = styled.div`
  max-width: 100px;
  min-width: 100px;
  margin: 5px;
  background-color: #000;
  height: 100px; /* Placeholder for product image */
`;



const Main = () => {
  return (
    <div>
    <SearchHeader/>
    <mainContent>
      <Banner src="" alt="bannerImg" />
      <Categories />  
    </mainContent>
    <ProductSection>
      추천 아이템
      <ProductItem/>
    </ProductSection>
    <FooterNav />
    </div>
  );
};

export default Main;
