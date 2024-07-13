import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchHeader from "../../components/header/SearchHeader";
import FooterNav from "../../components/footer/FooterNav";
import Filter from "../../components/main/Filter";
import ItemSection from "../../components/item/ItemSection";

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

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchItemListPage = () => {
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const searchQuery = query.get("query");

  useEffect(() => {
    // Load all data
    fetchData();
  }, []);

  const fetchData = () => {
    // Simulate fetching data from an API
    const allProducts = Array.from({ length: 30 }, (_, index) => (
      <ProductItem key={index} />
    ));
    setProducts(allProducts);
  };

  return (
    <>
      <SearchHeader />
      <Filter />
      <ItemSection title={`상품 검색: ${searchQuery || ""}`} products={products} />
      <FooterNav />
    </>
  );
};

export default SearchItemListPage;
