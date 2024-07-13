import React from "react";
import PageHeader from "../components/header/PageHeader";
import FooterNav from "../components/footer/FooterNav";
import EditPassword from "../components/user/EditPassword"

const changePassword = () => {
  return (
    <>
    <PageHeader />
      <EditPassword/>
    <FooterNav />
    </>
  );
};

export default changePassword;