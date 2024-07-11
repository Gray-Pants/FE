import React from "react";
import SearchHeader from "../components/SearchHeader";
import ItemDetailCategory from "../components/ItemDetailCategory";
import ProductCard from "../components/ProductCard";
import ProductDetailsTab from "../components/ProductDetailsTab";
import FooterNav from "../components/FooterNav";

const ItemDetail = () => {
  return (
    <>
      <SearchHeader />
      <ItemDetailCategory />
      <ProductCard />
      <ProductDetailsTab />
      <FooterNav />
    </>
  );
};

export default ItemDetail;
