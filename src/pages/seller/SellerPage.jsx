import React from "react";
import Seller from "../../components/seller/Seller";
import FooterNav from "../../components/footer/FooterNav";
import {Routes, Route} from "react-router-dom";
import SellerLogin from "../../components/seller/SellerLogin";
import SellerList from "../../components/seller/SellerList";
import SellerProductDetails from "../../components/seller/SellerProductDetails";
import SellerSalesList from "../../components/seller/SellerSalesList";
import ItemAdd from "../../components/seller/ItemAdd";
import SellerRegister from "../../components/seller/SellerRegister";


const SellerPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Seller />} />
        <Route path="/new/item" element={<ItemAdd />} />
        <Route
          path="/product/list" element={<SellerList />} />
        <Route
          path="/product/details"
          element={<SellerProductDetails />}
        />
        <Route
          path="/seller/product/sales/details"
          element={<SellerSalesList />}
        />
      </Routes>
    </>
  );
};

export default SellerPage;
