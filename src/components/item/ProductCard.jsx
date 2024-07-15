import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // 하트 아이콘
import { apiClient } from "../../api/ApiClient"; // Ensure you import apiClient correctly

const ProductCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 400px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const SellerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SellerAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const SellerName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const ProductTags = styled.div`
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: auto; // 오른쪽 정렬
`;

const LikeCount = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const Stars = styled.span`
  color: gold;
  margin-left: 5px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PriceAndRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function ProductCard({
  itemId,
  sellerAvatar,
  sellerName,
  likes,
  productName,
  price,
  tags,
  productImage,
  reviewCount,
  rating,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // likes 초기값 설정

  useEffect(()=> {
    getLikeCount();
    getLikeStatus();
  })

  const getLikeCount = async() => {
    const res = await apiClient.get(`items/${itemId}/likes/count`);
    console.log(res);
    setLikeCount(res.data.response.likesCount);
  }

  const getLikeStatus = async() => {
    const res = await apiClient.get(`/users/mylikes/${itemId}`);
    if(res.status === 200)
      setIsLiked(res.data.response);
  }

  const handleLikeClick = async () => {
    try {
      const response = await apiClient.patch(`/likes`, {
        itemId: itemId, // 변경된 좋아요 상태 전송
      });
      setLikeCount((isLiked ?  (likeCount - 1) : (likeCount + 1)));
      setIsLiked(!isLiked); // 업데이트된 좋아요 수 반영
    } catch (error) {
      console.error("좋아요 상태 변경 중 오류 발생:", error);
      // 에러 처리 (예: 사용자에게 알림 메시지 표시)
    }
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    const roundedRating = Math.round(rating);
    const filledStars = roundedRating;
    const emptyStars = totalStars - filledStars;

    return (
      <>
        {Array.from({ length: filledStars }, (_, index) => (
          <span key={`filled-${index}`}>★</span>
        ))}
        {Array.from({ length: emptyStars }, (_, index) => (
          <span key={`empty-${index}`}>☆</span>
        ))}
      </>
    );
  };

  return (
    <ProductCardContainer>
      <ProductImage src={productImage} alt="상품 이미지" />
      <ProductInfo>
        <SellerInfo>
          <SellerAvatar src={sellerAvatar} alt="판매자 이미지" />
          <SellerName>{sellerName}</SellerName>

          <LikeButton onClick={handleLikeClick}>
            {isLiked ? (
              <AiFillHeart size={24} color="red" />
            ) : (
              <AiOutlineHeart size={24} />
            )}
            <LikeCount>{likeCount}</LikeCount>
          </LikeButton>
        </SellerInfo>

        <ProductTags>{tags}</ProductTags>
        <ProductDetails>
          <ProductName>{productName}</ProductName>
          <PriceAndRating>
            <ProductPrice>{price}원</ProductPrice>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Stars>{renderStars(rating)}</Stars>
              <span style={{ marginLeft: "5px", color: "#999", fontSize: "14px" }}>
                {rating.toFixed(1)}
              </span>
              <span style={{ marginLeft: "5px", color: "#999", fontSize: "14px" }}>
                리뷰 {reviewCount}개
              </span>
            </div>
          </PriceAndRating>
        </ProductDetails>
      </ProductInfo>
    </ProductCardContainer>
  );
}

export default ProductCard;
