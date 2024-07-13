import React from "react";
import MyPage from "../../components/user/MyPage";
import PageHeader from "../../components/header/PageHeader";
import FooterNav from "../../components/footer/FooterNav";
import EditPassword from "../../components/user/EditPassword";
import { Routes, Route } from "react-router-dom";
import EditMemberInfo from "../../components/user/EditMemberInfo";
import LikeList from "../../components/user/LikeList";
import OrderPayList from "../../components/user/OrderPayList";

const Mypage = () => {
  return (
    <>
    <PageHeader props={`마이페이지`}/>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="edit/password" element={<EditPassword />} />
        <Route path="edit/profile" element={<EditMemberInfo />} />
        <Route path="likes" element={<LikeList />} />
        <Route path="orders" element={<OrderPayList />} />
      </Routes>
    <FooterNav />
    </>
  );
};

export default Mypage;
