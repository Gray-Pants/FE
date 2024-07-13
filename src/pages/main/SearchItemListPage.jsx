import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchHeader from "../../components/header/SearchHeader";
import FooterNav from "../../components/footer/FooterNav";
import Filter from "../../components/main/Filter";
import ItemSection from "../../components/item/ItemSection";
import { apiClient } from "../../api/ApiClient";

const ProductItem = styled.div`
  max-width: 100px;
  min-width: 100px;
  margin: 5px;
  background-color: #fff; /* Change background color to white */
  height: 150px; /* Increase height to accommodate image and details */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100px; /* Placeholder for product image */
  object-fit: cover; /* Ensure the image covers the area */
`;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchItemListPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowPrice");
  const query = useQuery();
  const searchQuery = query.get("query");

  useEffect(() => {
    // Load data
    fetchData(sortOrder);
  }, [searchQuery, sortOrder]);

  const fetchData = async () => {
    try {
      const response = await apiClient.get(
        "items/" + searchQuery + `?sort=${sortOrder}`
      );
      setProducts(response.data.response);
    } catch (error) {
      console.error("전송 오류:", error);
      // 오류 발생 시 처리할 로직
    }
  };

  return (
    <>
      <SearchHeader />
      <Filter setSortOrder={setSortOrder} />
      <ItemSection
        title={`상품 검색: ${searchQuery || ""}`}
        products={products}
      />
      <FooterNav />
    </>
  );
};

export default SearchItemListPage;
