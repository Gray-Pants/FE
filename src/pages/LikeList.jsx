import React from "react";
import SerchHeader from "../components/SearchHeader"
import FooterNav from "../components/FooterNav";
import LikeList from "../components/LikeList";

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