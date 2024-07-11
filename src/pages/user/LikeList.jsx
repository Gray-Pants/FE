import React from "react";
import SerchHeader from "../../components/header/SearchHeader"
import FooterNav from "../../components/footer/FooterNav";
import LikeList from "../../components/user/LikeList";

const Likes = () => {
  return (
    <>
    <SerchHeader />
      <LikeList/>
    <FooterNav />
    </>
  );
};

export default Likes;