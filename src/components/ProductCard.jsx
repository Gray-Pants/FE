import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // 하트 아이콘

const ProductCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
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

function ProductCard() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(345);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <ProductCardContainer>
      <ProductImage
        src="../../public/images/스와퍼(상품이미지).svg"
        alt="상품 이미지"
      />
      <ProductInfo>
        <SellerInfo>
          <SellerAvatar
            src="../../public/images/김바덕.jpg"
            alt="판매자 이미지"
          />
          <SellerName>동대문 판매왕</SellerName>
          <LikeButton onClick={handleLikeClick}>
            {isLiked ? (
              <AiFillHeart size={24} color="red" /> // 빨간 하트
            ) : (
              <AiOutlineHeart size={24} /> // 빈 하트
            )}
            <LikeCount>{likeCount}</LikeCount>
          </LikeButton>
        </SellerInfo>
        <ProductTags>#캐주얼 #신상 34.5만</ProductTags>
        <ProductName>
          [진짜 쌈] 회색바지단 시그니처 코튼 버뮤다 팬츠
        </ProductName>
        <ProductPrice>50,000원</ProductPrice>
        <ProductName>
          [real cheap] Gray pants. Signature Cotton Bermuda pants
        </ProductName>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>★★★★★</span>
          <span style={{ marginLeft: "5px", color: "#999", fontSize: "14px" }}>
            4.8
          </span>
          <span style={{ marginLeft: "5px", color: "#999", fontSize: "14px" }}>
            리뷰 5개
          </span>
        </div>
      </ProductInfo>
    </ProductCardContainer>
  );
}

export default ProductCard;
