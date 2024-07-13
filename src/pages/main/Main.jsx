import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchHeader from "../../components/header/SearchHeader";
import Categories from "../../components/main/Categories";
import FooterNav from "../../components/footer/FooterNav";
import { apiClient } from "../../api/ApiClient";
import ItemSection from "../../components/item/ItemSection";

const MainContent = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const Banner = styled.img`
  width: 100%;
  height: 200px; /* Placeholder for banner height */
  object-fit: cover; /* Ensure the image covers the area */
  background-color: #ddd; /* Placeholder for banner background */
`;

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load data
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiClient.get('items');
      console.log(response);
      setProducts(response.data.response);
    } catch (error) {
      console.error('전송 오류:', error);
      // 오류 발생 시 처리할 로직
    }
  };

  return (
    <>
      <SearchHeader />
      <MainContent>
        <Banner src="https://greypants-img-bucket.s3.ap-northeast-2.amazonaws.com/grey-pants.jpg" alt="bannerImg" />
        <Categories />
      </MainContent>
      <ItemSection title="추천 아이템" products={products} />
      <FooterNav />
    </>
  );
};

export default Main;
