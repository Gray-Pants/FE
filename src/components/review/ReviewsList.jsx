import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../api/ApiClient';
import { useNavigate } from 'react-router-dom';


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

const ReviewItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
`;

const ReviewHeader = styled.div`
//margin-top: 10px;
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductInfo = styled.div`
  flex-grow: 1;
`;

const StoreName = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const ProductName = styled.div`
  font-size: 14px;
`;

const ProductOption = styled.div`
  font-size: 12px;
  color: #555;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
`;

const ReviewBody = styled.div`
  padding-top: 10px;
  border-bottom: 4px solid orange;
`;

const Rating = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Stars = styled.span`
  color: gold;
  margin-left: 5px;
`;

const ReviewDate = styled.div`
  font-size: 9px;
  color: #7D7D7D;
  margin-bottom: 10px;
`;

const ReviewText = styled.div`
  font-size: 14px;
`;

const ReviewsList = () => {

  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const getReviews = async () => {
    const res =await apiClient.get('/users/reviews');
    console.log(res);
    setReviews(res.data.response);
  }

  useEffect(() => {
    getReviews();
  }, []);


  return (
    <>
      <ReviewTabs>
        <Tab onClick={()=> {navigate("/mypage/reviews")}}>리뷰 작성</Tab>
        <Tab $active>작성한 리뷰</Tab>
      </ReviewTabs>

      {reviews?.map((review) => (
        <ReviewItem key={review.reviewId}>
          <ReviewHeader>
            <ProductImage src={review.item.itemPhotos[0]} alt={review.item.itemName} />
            <ProductInfo>
              <StoreName>{review.item.storeName}</StoreName>
              <ProductName>{review.item.itemName}</ProductName>
              {/* <ProductOption>{review.productOption}</ProductOption> */}
            </ProductInfo>
          </ReviewHeader>
          <Divider />
          <ReviewBody>
            <Rating>
              {review.reviewScore}/5
              <Stars>      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>{index < review.reviewScore ? '★' : '☆'}</span>
      ))}</Stars> {/* 평점에 따라 별 개수를 조정하세요 */}
            </Rating>
            <ReviewDate>작성일 {review.createdAt}</ReviewDate>
            <ReviewText>{review.reviewContent}</ReviewText>
          </ReviewBody>
        </ReviewItem>
      ))}
    </>
  );
};

export default ReviewsList;
