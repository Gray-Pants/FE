import React, { useState } from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const ProductImage = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 150px;
`;

const ProductName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const RatingSpan = styled.span`
  margin-right: 10px;
`;

const RatingStars = styled.div`
  display: flex;
`;

const Star = styled.span`
  font-size: 30px;
  color: #ccc;
  cursor: pointer;

  &.active {
    color: #ffc107;
  }
`;

const ReviewInput = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f2f2f2;
  border: none;
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
`;

// --- 컴포넌트 ---

const ReviewPage = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    console.log('리뷰 데이터 전송:', { rating });
    // 서버로 리뷰 데이터 전송하는 로직 추가
  };

  return (
    <>
      <ProductImage>
        <Image src="https://via.placeholder.com/150" alt="Product" />
      </ProductImage>
      <ProductName>브랜드 마비 트레이닝 반바지</ProductName>
      <RatingContainer>
        <RatingSpan>상품은 어떠셨나요?</RatingSpan>
        <RatingStars>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={star <= rating ? 'active' : ''}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </Star>
          ))}
        </RatingStars>
      </RatingContainer>
      <ReviewInput placeholder="리뷰를 작성해주세요." />
      <ButtonContainer>
        <CancelButton>취소</CancelButton>
        <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
      </ButtonContainer>
    </>
  );
};

export default ReviewPage;
