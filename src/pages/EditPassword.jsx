import React from "react";
import PageHeader from "../components/PageHeader";
import FooterNav from "../components/FooterNav";
import EditPassword from "../components/EditPassword"

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