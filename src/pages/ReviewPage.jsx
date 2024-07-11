import React from "react";
import Review from "../components/Review";
import PageHeader from "../components/header/PageHeader";
import FooterNav from "../components/footer/FooterNav";

const ReviewPage = () => {
  return (
    <>
      <PageHeader />
      <Review />
      <FooterNav />
    </>
  );
};

export default ReviewPage;