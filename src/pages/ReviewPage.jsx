import React from "react";
import Review from "../components/Review";
import PageHeader from "../components/header/PageHeader";
import FooterNav from "../components/footer/FooterNav";

const ReviewPage = () => {
  return (
    <>
      <PageHeader props={"리뷰"}/>
      <Review />
      <FooterNav />
    </>
  );
};

export default ReviewPage;