import React from "react";
import SearchHeader from "../../components/header/SearchHeader";
import ItemDetailCategory from "../../components/item/ItemDetailCategory";
import ProductCard from "../../components/item/ProductCard";
// import ProductDetailsTab from "../../components/product/ProductDetailsTab";
import Comment from "../../components/review/Comment";
import FooterNav from "../../components/footer/FooterNav";

const ItemDetail = () => {
  return (
    <>
      <SearchHeader />
      <ItemDetailCategory />
      <ProductCard />
      {/* <ProductDetailsTab /> */}
      <Comment />
      <FooterNav />
    </>
  );
};

export default ItemDetail;
