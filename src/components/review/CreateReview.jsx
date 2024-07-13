import React, { useState } from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 75px;
`;

const ProductImage = styled.div`
  margin-right: 30p;
`;

const Image = styled.img`
  width: 80px;
  height: auto;
  border-radius: 4px;
`;

const ProductDetails = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.div`
  font-size: 10px;
  color: #888;
  margin-bottom: 5px;
`;

const ProductName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductInfo = styled.div`
  font-size: 14px;
  color: #888;
`;

const RatingContainer = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
`;

const RatingLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: orange;
  margin-bottom: 10px;
`;

const RatingSpan = styled.div`
  margin-bottom: 10px;
`;

const RatingStars = styled.div`
  display: flex;
  justify-content: center;
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
  width: 200px; 
  padding: 10px 10%;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f2f2f2;
  border: none;
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  width: 200px; 
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: orange;
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
      <ProductContainer>
        <ProductImage>
          <Image src="https://via.placeholder.com/80" alt="Product" />
        </ProductImage>
        <ProductDetails>
          <BrandName>브렌슨</BrandName>
          <ProductName>미니멀 트레이닝 essential 윌텍 반바지</ProductName>
          <ProductInfo>블랙 | FREE</ProductInfo>
        </ProductDetails>
      </ProductContainer>
      <RatingContainer>
        <RatingLine />
        <RatingSpan>상품은 만족하셨나요?</RatingSpan>
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
