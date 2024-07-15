import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QuantitySelector from "./QuantitySelector";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { apiClient } from "../../api/ApiClient";

const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.div`
  font-size: 10px;
  color: #999;
`;

const DeleteButton = styled(Button)`
  font-size: 10px; /* 폰트 크기 조정 */
  color: #999; /* 글씨 색상 변경 */
  border: none;
  font-weight: normal; /* 폰트 굵기 변경 */
  cursor: pointer;
  width: 100px;
  padding-right: 5px;
  position: relative;
  left: 5px;
`;

function CartItem({ item, setCartItems, cartItems }) {
  const [quantity, setQuantity] = useState(item.cartItemQuantity);
  const [isChecked, setIsChecked] = useState(item.checked);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsChecked(item.checked);
    setQuantity(item.cartItemQuantity);
  }, [item.checked, item.cartItemQuantity]);

  const handleCheckboxChange = (e) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);

    // 선택 상태 변경 API 요청 (필요에 따라 구현)
    // apiClient.patch(`/carts/myitems/${item.cartItemId}`, { checked: newChecked });

    // 변경된 아이템 정보로 cartItems 업데이트
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.cartItemId === item.cartItemId
          ? { ...prevItem, checked: newChecked }
          : prevItem
      )
    );
  };

  const handleQuantityChange = async (newQuantity) => {
    try {
      const response = await apiClient.put(`/carts/items`, {
        cartItemQuantity: newQuantity,
      });
      setQuantity(response.data.response.cartItemQuantity);
      // 변경된 아이템만 업데이트
      setCartItems((prevItems) =>
        prevItems.map((prevItem) =>
          prevItem.cartItemId === item.cartItemId
            ? {
                ...prevItem,
                cartItemQuantity: newQuantity, // 수량 업데이트
                calculatedPrice: item.item.itemPrice * newQuantity, // 가격 재계산
              }
            : prevItem
        )
      );
    } catch (error) {
      console.error("수량 변경 중 오류 발생:", error);
      // 에러 처리 (예: 사용자에게 알림 메시지 표시)
    }
  };

  const handleDeleteClick = async () => {
    try {
      await apiClient.delete(`/carts/items/${item.cartItemId}`);
      setCartItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem.cartItemId !== item.cartItemId)
      );
    } catch (error) {
      console.error("상품 삭제 중 오류 발생:", error);
      // 에러 처리 (예: 사용자에게 알림 메시지 표시)
    }
  };

  return (
    <ItemContainer>
      <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
      <ProductImage
        src={item.item.itemPhotos} // item.item.itemPhotos[0]으로 접근
        alt={item.itemName}
        onLoad={() => setIsLoading(false)}
        onError={(e) => {
          e.target.src = "/images/default_product_image.jpg";
          setIsLoading(false);
        }}
      />
      <ProductInfo>
        <ProductName>{item.item.itemName}</ProductName>
        <ProductPrice>{item.itemPrice}원</ProductPrice>
      </ProductInfo>
      <QuantitySelector quantity={quantity} onChange={handleQuantityChange} />
      <DeleteButton onClick={handleDeleteClick}>삭제</DeleteButton>
    </ItemContainer>
  );
}

export default CartItem;
