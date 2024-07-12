import React from "react";
import CreateOrder from "../../components/item/CreateOrder";
import FooterNav from "../../components/footer/FooterNav";
import PageHeader from "../../components/header/PageHeader";

const OrderForm = () => {
  return (
    <>
      <PageHeader />
      <CreateOrder />
      <FooterNav />
    </>
  );
};

export default OrderForm;
