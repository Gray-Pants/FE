import React from "react";
import PageHeader from "../../components/header/PageHeader";
import CreateReview from "../../components/review/CreateReview";
import FooterNav from "../../components/footer/FooterNav";

const CreateReviewPage = () => {
  return (
    <>
    <PageHeader />
      <CreateReview/>
    <FooterNav />
    </>
  );
};

export default CreateReviewPage;