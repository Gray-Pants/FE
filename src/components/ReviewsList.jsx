import React from 'react';
import styled from 'styled-components';

// Styled Components

const ReviewContainer = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%; /* Ensure each review expands to container width */
`;

const ReviewImageContainer = styled.div`
  flex-shrink: 0;
`;

const ReviewImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const ReviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px; /* Adjusted margin for spacing */
`;

const ReviewProductName = styled.h3`
  margin-bottom: 8px;
`;

const ReviewProductDetails = styled.p`
  margin-bottom: 8px;
`;

const ReviewRating = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewRatingStrong = styled.strong`
  margin-right: 8px;
`;

const ReviewText = styled.div`
  margin-top: 1px; /* Space between product details and review text */
`;

const ReviewListContainer = styled.div`
  padding: 16px;
  width: 100%; /* Expand to container width */
  max-width: 600px; /* Adjusted to fit comfortably within the container */
  margin: 0 auto;
`;

// Sample data
const reviews = [
  {
    image: 'https://via.placeholder.com/150',
    storeName: '스토어 이름',
    productName: '브렌슨 미니멀 트레이닝 essential 원턱 반바지',
    productDetails: '블랙 | FREE',
    rating: '4.5/5.0',
    ratingStars: '⭐⭐⭐⭐⭐',
    date: '작성일 2022.08.22',
    comment: '진짜 리뷰 잘 안쓰는데 쓴다. 뭐 대충 그렇다. 사진은 없지만...'
  },
  // 더 많은 리뷰를 여기에 추가하세요
];

// Review Component
const Review = ({ review }) => {
  return (
    <>
      <ReviewImageContainer>
        <ReviewImage src={review.image} alt="product" />
      </ReviewImageContainer>
      <ReviewDetails>
        <div>
          <p>{review.storeName}</p>
          <ReviewProductName>{review.productName}</ReviewProductName>
          <ReviewProductDetails>{review.productDetails}</ReviewProductDetails>
        </div>
        <div>
          <ReviewRating>
            <ReviewRatingStrong>{review.rating}</ReviewRatingStrong>
            <span>{review.ratingStars}</span>
          </ReviewRating>
          <p>{review.date}</p>
        </div>
        <ReviewText>
          <p>{review.comment}</p>
        </ReviewText>
      </ReviewDetails>
    </>
  );
};

// ReviewsList Component
const ReviewsList = () => {
  return (
    <ReviewListContainer>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </ReviewListContainer>
  );
};

export default ReviewsList;
