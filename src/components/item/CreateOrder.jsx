import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import FooterNav from "../footer/FooterNav";
import { apiClient } from "../../api/ApiClient";

const HeaderSpacer = styled.div`
  // height: 80px;
`;

const Section = styled.section`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const AddressTypeGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  overflow-x: scroll;
  scrollbar-width: none;
`;

const AddressType = styled.button`
  width: 70px;
  height: 29.62px;
  background-color: ${(props) => (props.$active ? "#F4975C" : "#D2DAE8")};
  color: ${(props) => (props.$active ? "#FFFFFF" : "#6D697A")};
  border: none;
  border-radius: 30px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 300;
  flex-shrink: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 24px;
  border: 1px solid #6d697a;
  border-radius: 30px;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const PhoneInput = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 32%;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`;

const ProductDetails = styled.div`
  margin-left: 10px;
`;

const Seller = styled.p`
  font-size: 10px;
  color: #7d7d7d;
`;

const ProductName = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const ProductOption = styled.p`
  font-size: 10px;
  color: #7d7d7d;
`;

const ProductQuantity = styled.p`
  font-size: 10px;
  color: #7d7d7d;
`;

const ProductPrice = styled.p`
  font-size: 8px;
  font-weight: 700;
  margin-left: auto;
`;

const DiscountItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const DiscountName = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const DiscountAmount = styled.p`
  font-size: 10px;
  color: #7d7d7d;
`;

const TotalDiscount = styled(DiscountItem)`
  border-top: 1px solid #6d697a;
  padding-top: 5px;
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const RadioButton = styled.input`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-right: 10px;
`;

const PaymentName = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const PriceItem = styled(DiscountItem)``;

const PriceName = styled(DiscountName)``;

const PriceAmount = styled(DiscountAmount)``;

const TotalPrice = styled(TotalDiscount)``;

const PayButton = styled.button`
  width: 100%;
  height: 59px;
  background-color: #f4975c;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 70px;
`;

const CreateOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedAddress, setSelectedAddress] = useState({ index: 0 });
  const [addrUserName, setAddrUserName] = useState("");
  const [addrPhoneNum, setAddrPhoneNum] = useState("");
  const [addr, setAddr] = useState("");
  const [addressList, setAddressList] = useState([{
    userAddrName: "직접입력",
    userAddrPhone: "",
    userAddr: "",
  }]);

  const getAddressList = async () => {
    const res = await apiClient.get("/users/info");
    setAddressList([...addressList, ...res.data.response.addrs]);
    setAddrUserName(res.data.response.username);
  };

  useEffect(() => {
    getAddressList();
  }, []);

  const requestKakaoPay = async () => {
    try {
      const orderAddr = addr;
      const orderPhone = addrPhoneNum;
      const orderItems = cartItems.map((item) => ({
        productName: item.productName,
        quantity: item.cartItemQuantity,
        totalAmount: item.itemPrice * item.cartItemQuantity,
      }));
      const totalAmount = orderItems.reduce(
        (sum, item) => sum + item.totalAmount,
        0
      );

      const storeNameList = cartItems.map(item => item.item.storeName);

      const itemName = orderItems[0].productName + " 외 " + (orderItems.length - 1) + "개";
      const quantity = orderItems.reduce((sum, item) => sum + item.quantity, 0);

      // itemIdList와 itemQuantityList 생성
      const itemIdList = cartItems.map(item => item.item.itemId);
      const itemQuantityList = cartItems.map(item => item.cartItemQuantity);

      const response = await apiClient.post(
        "/payments/kakaoPay/ready",
        {
          orderAddr,
          orderPhone,
          orderItems,
          totalAmount,
          itemName,
          quantity,
          itemIdList,
          itemQuantityList,
          storeNameList,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.localStorage.setItem("tid", response.data.response.tid);
      if (response.data) {
        const redirectUrl = isMobile()
          ? response.data.response.next_redirect_mobile_url
          : response.data.response.next_redirect_pc_url;
        if (redirectUrl) {
          window.location.href = redirectUrl;
        } else {
          console.error("카카오 페이 리디렉션 URL이 없습니다:", response.data);
        }
      }
    } catch (error) {
      console.error("카카오 페이 결제 오류:", error);
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paymentMethod === "카드 결제") {
      navigate("/card-payment");
    } else if (paymentMethod === "카카오 페이 결제") {
      requestKakaoPay();
    }
  };

  const totalDiscount = 0; // 임시 할인 금액
  const originalPrice = cartItems.reduce(
    (sum, item) => sum + item.itemPrice * item.cartItemQuantity,
    0
  );
  const finalPrice = originalPrice - totalDiscount;

  return (
    <>
      <HeaderSpacer />
      <form onSubmit={handleSubmit}>
        {/* 배송지 정보 */}
        {
    console.log(addressList)}
        <Section>
          <SectionTitle>배송지</SectionTitle>
          <AddressTypeGroup>
            {addressList.map((address, index) => (
              <AddressType
                key={index}
                type="button"
                $active={selectedAddress.index === index}
                onClick={() => {
                  setSelectedAddress({ index: index });
                  setAddr(address.userAddr);
                  setAddrPhoneNum(address.userAddrPhone);
                }}
              >
                {address.userAddrName}
              </AddressType>
            ))}
          </AddressTypeGroup>
          <Input placeholder="이름" value={addrUserName} onChange={e => setAddrUserName(e.target.value)} />
          <Input
            placeholder="전화번호"
            value={addrPhoneNum}
            onChange={(e) => { setAddrPhoneNum(e.target.value) }}
          />
          <Input
            placeholder="주소"
            value={addr}
            onChange={(e) => { setAddr(e.target.value) }}
          />
        </Section>

        {/* 상품 정보 */}
        <Section>
          <SectionTitle>상품 정보</SectionTitle>
          {cartItems.map((item) => (
            <ProductInfo key={item.id}>
              <ProductImage src={item.productImage} alt={item.productName} />
              <ProductDetails>
                <Seller>{item.storeName}</Seller>
                <ProductName>{item.productName}</ProductName>
                <ProductOption>{item.itemOption}</ProductOption>
                <ProductQuantity>
                  수량 {item.cartItemQuantity}개
                </ProductQuantity>
              </ProductDetails>
              <ProductPrice>
                {item.itemPrice * item.cartItemQuantity}원
              </ProductPrice>
            </ProductInfo>
          ))}
        </Section>

        {/* 할인 혜택 */}
        <Section>
          <SectionTitle>할인 혜택</SectionTitle>
          <DiscountItem>
            <DiscountName>상품할인</DiscountName>
            <DiscountAmount>{totalDiscount}원</DiscountAmount>
          </DiscountItem>
          {/* TODO: 다른 할인 항목 추가 (필요한 경우) */}
          <TotalDiscount>
            <DiscountName>총 할인금액</DiscountName>
            <DiscountAmount>- {totalDiscount}원</DiscountAmount>
          </TotalDiscount>
        </Section>

        {/* 결제 수단 */}
        <Section>
          <SectionTitle>결제 수단</SectionTitle>
          <PaymentMethod>
            <RadioButton
              type="radio"
              name="paymentMethod"
              value="카드 결제"
              checked={paymentMethod === "카드 결제"}
              onChange={() => handlePaymentMethodChange("카드 결제")}
            />
            <PaymentName>카드 결제</PaymentName>
          </PaymentMethod>
          <PaymentMethod>
            <RadioButton
              type="radio"
              name="paymentMethod"
              value="카카오 페이 결제"
              checked={paymentMethod === "카카오 페이 결제"}
              onChange={() => handlePaymentMethodChange("카카오 페이 결제")}
            />
            <PaymentName>카카오 페이 결제</PaymentName>
          </PaymentMethod>
        </Section>

        {/* 최종 결제 금액 */}
        <Section>
          <SectionTitle>최종 결제금액</SectionTitle>
          <PriceItem>
            <PriceName>상품금액</PriceName>
            <PriceAmount>{originalPrice.toLocaleString()}원</PriceAmount>
          </PriceItem>
          <PriceItem>
            <PriceName>할인금액</PriceName>
            <PriceAmount>- {totalDiscount.toLocaleString()}원</PriceAmount>
          </PriceItem>
          <TotalPrice>
            <PriceName>결제금액</PriceName>
            <PriceAmount>{finalPrice.toLocaleString()}원</PriceAmount>
          </TotalPrice>
        </Section>

        <PayButton type="submit">결제하기</PayButton>
      </form>

      <FooterNav />
    </>
  );
};

export default CreateOrder;
