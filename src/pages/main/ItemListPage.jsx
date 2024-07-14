import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SearchHeader from "../../components/header/SearchHeader";
import FooterNav from "../../components/footer/FooterNav";
import Filter from "../../components/main/Filter";
import ItemList from "../../components/item/CategoryBar";
import ItemSection from "../../components/item/ItemSection";
import { apiClient } from "../../api/ApiClient";

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

const ItemListPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('lowPrice');
  const { subCategory } = useParams();

  useEffect(() => {
    // Load all data
    fetchData(sortOrder);
  }, [subCategory, sortOrder]);

  const fetchData = async() => {
    // Simulate fetching data from an API
    const response = await apiClient.get(`items/category?category=${subCategory}&sort=${sortOrder}`);
    console.log(sortOrder);
    setProducts(response.data.response);
  };

  return (
    <>
      <SearchHeader />
      <ItemList />
      <Filter setSortOrder={setSortOrder} />
      <ItemSection title={`상품 :`} products={products} />
      <FooterNav /> 
    </>
  );
};

export default ItemListPage;
