import React from "react";
import Seller from "../../components/seller/Seller";
import {Routes, Route} from "react-router-dom";
import SellerList from "../../components/seller/SellerList";
import SellerProductDetails from "../../components/seller/SellerProductDetails";
import SellerSalesList from "../../components/seller/SellerSalesList";
import ItemAdd from "../../components/seller/ItemAdd";
import SellerHeaderTab from "../../components/seller/SellerHeader";


const SellerPage = () => {
  return (
    <>
      <SellerHeaderTab>
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
            path="/product/sales/details"
            element={<SellerSalesList />}
          />
        </Routes>
      </SellerHeaderTab>
    </>
  );
};

export default SellerPage;
