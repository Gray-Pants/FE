import React from "react";
import styled from "styled-components";

// --- Styled Components ---

const WishlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%; /* 전체 너비 */
  min-width: 400px; /* 최소 너비 설정 */
  height: 640px; /* 전체 높이 */
  border: 1px solid #ddd; /* 모바일 화면 경계 표시 */
  padding: 10px 20px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* 너비 100%로 설정 */
  background-color: #fff;
`;

const WishlistHeader = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  width: 96%; /* 너비 96%로 설정 */
  padding: 15px 0;
  background-color: #fff;
  margin-left: 8px;
  position: relative; /* 상대 위치 */
`;

const WishlistTitle = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
`;

const WishlistCount = styled.div`
  font-size: 0.9rem;
  color: #333;
  position: absolute; /* 절대 위치 */
  right: 0; /* 오른쪽에 고정 */
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%; /* 너비 100%로 설정 */
  padding: 10px 0;
`;

const GalleryItem = styled.div`
  width: 30%; /* 너비 30%로 설정 (한 줄에 3개) */
  margin-bottom: 20px;
  text-align: left; /* 왼쪽 정렬 */
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: #ccc; /* 임시 배경색 */
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  margin-top: 10px;
`;

const MarketName = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const ItemName = styled.div`
  font-size: 0.9rem;
  color: #333;
  margin-top: 5px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const ItemDiscount = styled.div`
  font-size: 0.8rem;
  color: #e74c3c; /* 할인률 색상 */
  margin-right: 10px;
`;

const ItemPrice = styled.div`
  font-size: 0.8rem;
  color: #999;
`;

// --- 컴포넌트 ---

const WishlistPage = () => {
  // 예시 데이터
  const wishlistItems = [
    { id: 1, market: "마켓 1", name: "상품 1", discount: "10%", price: "₩9,000", image: "" },
    { id: 2, market: "마켓 2", name: "상품 2", discount: "20%", price: "₩16,000", image: "" },
    { id: 3, market: "마켓 3", name: "상품 3", discount: "30%", price: "₩21,000", image: "" },
    { id: 4, market: "마켓 4", name: "상품 4", discount: "15%", price: "₩17,000", image: "" },
    { id: 5, market: "마켓 5", name: "상품 5", discount: "25%", price: "₩15,000", image: "" },
    { id: 6, market: "마켓 6", name: "상품 6", discount: "5%", price: "₩19,000", image: "" },
  ];

  return (
    <WishlistContainer>
      <MainContainer>
        <WishlistHeader>
          <WishlistTitle>찜한 상품 목록</WishlistTitle>
          <WishlistCount>{wishlistItems.length}개</WishlistCount>
        </WishlistHeader>
        <GalleryContainer>
          {wishlistItems.map((item) => (
            <GalleryItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <MarketName>{item.market}</MarketName>
                <ItemName>{item.name}</ItemName>
                <PriceContainer>
                  <ItemDiscount>{item.discount}</ItemDiscount>
                  <ItemPrice>{item.price}</ItemPrice>
                </PriceContainer>
              </ItemDetails>
            </GalleryItem>
          ))}
        </GalleryContainer>
      </MainContainer>
    </WishlistContainer>
  );
};

export default WishlistPage;
