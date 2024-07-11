import React from "react";
import SearchHeader from "../../components/header/SearchHeader";
import ItemDetailCategory from "../../components/ItemDetailCategory";
import ProductCard from "../../components/product/ProductCard";
// import ProductDetailsTab from "../../components/product/ProductDetailsTab";
import FooterNav from "../../components/footer/FooterNav";

const ItemDetail = () => {
  return (
    <>
      <SearchHeader />
      <ItemDetailCategory />
      <ProductCard />
      {/* <ProductDetailsTab /> */}
      <FooterNav />
    </>
  );
};

export default ItemDetail;
