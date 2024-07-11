import React from "react";
import MyPage from "../../components/user/MyPage";
import PageHeader from "../../components/header/PageHeader";
import FooterNav from "../../components/footer/FooterNav";

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
