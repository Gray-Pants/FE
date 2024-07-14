import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { FiArrowLeft, FiHome, FiMenu } from "react-icons/fi";
import { apiClient } from "../../api/ApiClient";
import { useNavigate } from "react-router-dom";

// Styled Components

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 40px;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 30;
`;

const RightButtons = styled.div`
  display: flex;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  margin-left: 220px;
`;

const ReviewTabs = styled.div`
  // margin-top: 50px;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
`;

const Tab = styled.button`
  flex: 1;
  padding: 15px 10px;
  border: none;
  background: none;
  font-size: 16px;
  ${props => props.$active && `
    font-weight: bold;
    border-bottom: 2px solid orange;
  `}
`;

const ReviewContent = styled.div`
  padding: 15px;
  width: 100%;
  background-color: #fff;
`;

const ProductInfo = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: flex-start;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const StoreName = styled.span`
  font-size: 12px;
  color: #888;
  margin-bottom: 4px;
`;

const ProductName = styled.h2`
  font-size: 14px;
  margin: 0;
`;

const WriteReviewButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  position: relative;
`;

const ReviewBonus = styled.span`
  display: block;
  font-size: 10px;
  color: #ff6b6b;
  margin-top: 5px;
`;

// Component
const Review = () => {
  const [reviewables, setReviewables] = useState([]);
  const navigate = useNavigate();

  const getReviewAbles = async() => {
    const res = await apiClient.get('/users/reviews/requests');
    console.log(res.data.response);
    setReviewables(res.data.response);
  }

  useEffect(() => {
    getReviewAbles();
  },[]);



  return (
    <>
      <ReviewTabs>
        <Tab $active>리뷰 작성</Tab>
        <Tab onClick={()=> {navigate("/mypage/reviews/list")}}>작성한 리뷰</Tab>
      </ReviewTabs>

      {reviewables.map(reviewable => (
        <ReviewContent key={reviewable.orderItemId}>
          <ProductInfo>
            <ProductImage src={reviewable.item.itemPhotos[0]} alt="제품 이미지" />
            <ProductDetails>
              <StoreName>{reviewable.storeName}</StoreName>
              <ProductName>{reviewable.item.itemName}</ProductName>
            </ProductDetails>
          </ProductInfo>
          
          <WriteReviewButton onClick={()=> navigate(`/mypage/reviews/new?orderitem=${reviewable.orderItemId}`)}>
          구매확정하고 후기 작성하기
            <ReviewBonus>작성 시 적립금 최대 4,500원 지급!</ReviewBonus>
          </WriteReviewButton>
        </ReviewContent>))}
    </>
  );
};

export default Review;