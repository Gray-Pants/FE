import React from "react";
import Review from "../../components/Review";
import PageHeader from "../components/PageHeader";
import FooterNav from "../components/FooterNav";

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