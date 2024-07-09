import React from "react";
import CreateOrder from "../components/CreateOrder";
import FooterNav from "../components/FooterNav";
import PageHeader from "../components/PageHeader";

const OrderForm = () => {
  return (
    <>
      <PageHeader/>
        <CreateOrder />
        <FooterNav />
    </>
  );
};

export default OrderForm;
