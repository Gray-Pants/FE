import React from "react";
import ReviewsList from "../../components/review/ReviewsList";
import PageHeader from "../../components/header/PageHeader";
import FooterNav from "../../components/footer/FooterNav";

const ReviewsListPage = () => {
  return (
    <>
      <PageHeader props={"리뷰"}/>
        <ReviewsList />
      <FooterNav />
    </>
  );
};

export default ReviewsListPage;