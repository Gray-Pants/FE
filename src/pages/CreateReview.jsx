import React from "react";
import PageHeader from "../components/PageHeader";
import CreateReview from "../components/CreateReview";
import FooterNav from "../components/FooterNav";

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