import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ProductCardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingStar = styled.span`
  color: #f8ce0b;
  margin-right: 5px;
`;

const ReviewCount = styled.span`
  font-size: 14px;
  color: #777;
`;

const ProductCard = ({ product }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<RatingStar key={i} as={BsStarFill} />);
    }
    if (hasHalfStar) {
      stars.push(<RatingStar key={fullStars} as={BsStarHalf} />);
    }
    for (let i = fullStars + hasHalfStar; i < 5; i++) {
      stars.push(<RatingStar key={i} as={BsStar} />);
    }
    return stars;
  };

  return (
    <ProductCardContainer>
      <ProductImage
        src="../../public/images/스와퍼(상품이미지).svg"
        alt="스와퍼 상품이미지"
      />
      <ProductTitle>"회색바지"</ProductTitle>
      <ProductPrice>15,000원</ProductPrice>
      <RatingContainer>
        {renderStars()}
        <ReviewCount>{product.reviewCount} 리뷰</ReviewCount>
      </RatingContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
