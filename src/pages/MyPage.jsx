import React from "react";
import MyPage from "../components/MyPage";
import PageHeader from "../components/PageHeader";
import FooterNav from "../components/FooterNav";

const Mypage = () => {
  return (
    <>
    <PageHeader />
      <MyPage/>
    <FooterNav />
    </>
  );
};

export default Mypage;
