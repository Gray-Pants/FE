import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItem from "../../components/cart/CartItem";
import PriceSummary from "../../components/item/PriceSummary";
import { apiClient } from "../../api/ApiClient";
import PageHeader from "../../components/header/PageHeader";
import Checkbox from "../../components/cart/Checkbox";
import Button from "../../components/cart/Button";
import ItemOrderFooter from "../../components/footer/ItemOrderFooter";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 양쪽 정렬 */
  padding: 10px 0; /* 상하 패딩 추가 */
  border-bottom: 1px solid #f0f0f0; /* 아래쪽 테두리 추가 */
`;

const DeleteButton = styled(Button)`
  font-size: 10px; /* 폰트 크기 조정 */
  color: #999; /* 글씨 색상 변경 */
  border: none;
  font-weight: normal; /* 폰트 굵기 변경 */
  cursor: pointer;
  width: 100px;
  padding-right: 5px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  font: 12px;
`;

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await apiClient.get("/carts/myitems"); // 인증된 사용자의 장바구니 정보 가져오기
        const itemsWithImage = response.data.response.map((item) => ({
          ...item,
          productImage: item.item.itemPhotos[0],
          productName: item.item.itemName,
          itemPrice: item.item.itemPrice,
          id: item.cartItemId,
        }));
        setCartItems(itemsWithImage);
      } catch (error) {
        console.error("장바구니 아이템을 가져오는 중 오류 발생:", error);
      } finally {
        setIsLoading(false); // 로딩 상태 해제
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    // 로컬 스토리지에서 장바구니 아이템 불러오기
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    // 장바구니 아이템 변경 시 로컬 스토리지에 저장
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlePriceChange = (priceData) => {
    setTotalPrice(priceData.totalPrice);
    setTotalQuantity(priceData.totalQuantity);
  };

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    setCartItems(cartItems.map((item) => ({ ...item, checked: isChecked })));
  };

  const handleDeleteSelected = () => {
    const updatedCartItems = cartItems.filter((item) => !item.checked);
    setCartItems(updatedCartItems);
    // TODO: API 요청으로 선택된 상품 삭제
  };

  const handleOrderClick = () => {
    const selectedItems = cartItems.filter((item) => item.checked);
    navigate("/itemOrder", { state: { cartItems: selectedItems } }); // 선택된 상품 정보 전달
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageHeader />
      <Container>
        <CartHeader>
          <CheckboxContainer>
            <Checkbox checked={selectAll} onChange={handleSelectAllChange} />
            <span style={{ marginLeft: "10px" }}>전체 선택</span>
          </CheckboxContainer>
          <DeleteButton onClick={handleDeleteSelected}>선택 삭제</DeleteButton>
        </CartHeader>

        <CartList>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              setCartItems={setCartItems}
              selectAll={selectAll} // selectAll 상태를 CartItem에 전달
            />
          ))}
        </CartList>

        <PriceSummary cartItems={cartItems} onPriceChange={handlePriceChange} />
      </Container>
      <ItemOrderFooter
        totalPrice={totalPrice} // totalPrice 값 전달
        onClick={handleOrderClick}
        disabled={totalQuantity === 0}
      />
    </>
  );
}

export default Cart;
