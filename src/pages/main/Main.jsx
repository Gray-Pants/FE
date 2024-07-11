import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchHeader from "../../components/header/SearchHeader";
import Categories from "../../components/main/Categories";
import FooterNav from "../../components/footer/FooterNav";

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

const MainContent = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px; /* Placeholder for banner height */
  background-color: #ddd; /* Placeholder for banner background */
`;

const ProductSection = styled.div`
  padding: 10px 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  width: 100%;
  text-align: center;
`;

const ProductItem = styled.div`
  max-width: 100px;
  min-width: 100px;
  margin: 5px;
  background-color: #000;
  height: 100px; /* Placeholder for product image */
  display: inline-block;
`;

const Recommand = styled.div`
  font-family: 'TheJamsil3Regular';
  padding: 10px;
  text-align: left;
`;

const Main = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Initial load
    fetchMoreData();
  }, []);

  const fetchMoreData = () => {
    if (products.length >= 100) {
      setHasMore(false);
      return;
    }
    // Simulate fetching data from an API
    setTimeout(() => {
      const newProducts = Array.from({ length: 10 }, (_, index) => (
        <ProductItem key={products.length + index} />
      ));
      setProducts([...products, ...newProducts]);
    }, 1500);
  };

  return (
    <>
      <SearchHeader />
      <MainContent>
        <Banner src="" alt="bannerImg" />
        <Categories />
      </MainContent>
      <ProductSection>
        <Recommand>추천 아이템</Recommand>
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {products}
        </InfiniteScroll>
      </ProductSection>
      <FooterNav />
    </>
  );
};

export default Main;
