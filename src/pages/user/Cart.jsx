import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/cart/CartItem";
import PriceSummary from "../../components/item/PriceSummary";
import { apiClient } from "../../api/ApiClient";
import PageHeader from "../../components/header/PageHeader";
import Checkbox from "../../components/cart/Checkbox";
import Button from "../../components/cart/Button";
import ItemOrderFooter from "../../components/footer/ItemOrderFooter";

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
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
`;

const DeleteButton = styled(Button)`
  font-size: 10px;
  color: #999;
  border: none;
  font-weight: normal;
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
        const response = await apiClient.get("/carts/myitems");
        const itemsWithImage = response.data.response.map((item) => ({
          ...item,
          productImage: item.item.itemPhotos[0],
          productName: item.item.itemName,
          itemPrice: item.item.itemPrice,
          id: item.cartItemId,
          checked: false
        }));
        setCartItems(itemsWithImage);
        console.log("Cart items fetched:", itemsWithImage);
      } catch (error) {
        console.error("장바구니 아이템을 가져오는 중 오류 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    console.log("Cart items updated:", cartItems);
    const totalQuantity = cartItems.filter(item => item.checked).reduce((acc, item) => acc + item.cartItemQuantity, 0);
    const totalPrice = cartItems.filter(item => item.checked).reduce((acc, item) => acc + (item.itemPrice * item.cartItemQuantity), 0);

    setTotalQuantity(totalQuantity);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    setCartItems(cartItems.map((item) => ({ ...item, checked: isChecked })));
  };

  const handleDeleteSelected = () => {
    const updatedCartItems = cartItems.filter((item) => !item.checked);
    setCartItems(updatedCartItems);
  };

  const handleOrderClick = () => {
    const selectedItems = cartItems.filter((item) => item.checked);
    navigate("/createOrder", { state: { cartItems: selectedItems } });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(cartItems)) {
    return <div>장바구니에 오류가 있습니다.</div>;
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
              cartItems={cartItems} // Add this prop to pass current state
            />
          ))}
        </CartList>

        <PriceSummary cartItems={cartItems} />
      </Container>
      <ItemOrderFooter
        totalPrice={totalPrice}
        onClick={handleOrderClick}
        disabled={totalQuantity === 0}
      />
    </>
  );
}

export default Cart;
