import React from "react";
import CreateOrder from "../../components/item/CreateOrder";
import PageHeader from "../../components/header/PageHeader";
import PayFooter from "../../components/footer/PayFooter";

const OrderForm = () => {
  return (
    <>
      <PageHeader />
      <CreateOrder />
    </>
  );
};

export default OrderForm;
