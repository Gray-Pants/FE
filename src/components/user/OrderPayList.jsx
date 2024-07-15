import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../api/ApiClient';
import { useNavigate } from 'react-router-dom';

const OrderPayList = () => {
  
  const [orders, setOrders] = useState([{}]);
  const navigate = useNavigate();

  const getMyOrders = async () => {
    const res = await apiClient.get('/users/orders');
    setOrders(res.data.response);
    console.log(res);
  }

  useEffect(() => {
    getMyOrders();
  }, []);


  return (
    <>
      <Content>
        <Header>
          <BackButton />
          <Title>주문 내역</Title>
          <Icons>
            <HomeIcon />
            <AccountIcon />
          </Icons>
        </Header>
        
        <OrderStatus>
          <StatusItem>
            <StatusText>배송중</StatusText>
            <StatusNumber>0</StatusNumber>
          </StatusItem>
          <StatusItem>
            <StatusText>배송완료</StatusText>
            <StatusNumber>0</StatusNumber>
          </StatusItem>
          <StatusItem>
            <StatusText>취소/반품</StatusText>
            <StatusNumber>0</StatusNumber>
          </StatusItem>
        </OrderStatus>

        {orders?.map((order, index) => (
          <OrderGroup key={index}>
            <OrderDate>{order.date}</OrderDate>
            {order.orderItems?.map((orderItem, index) => (
              <OrderItem key={index} onClick={()=>{
              navigate(`/${orderItem.item.itemId}/details`);
            }}>
                <ProductImage src={orderItem.item.itemPhotos[0]} alt={orderItem.item.itemName} />
                <ItemDetails>
                  <ItemStatus>{orderItem.orderItemStatus}</ItemStatus>
                  <ItemPrice>{orderItem.orderItemPrice}</ItemPrice>
                  <ItemName>{orderItem.item.itemName}</ItemName>
                  <ItemOption>{orderItem.orderItemQuantity}</ItemOption>
                </ItemDetails>
              </OrderItem>
            ))}
          </OrderGroup>
        ))}
      </Content>
    </>
  );
};

const Content = styled.div`
  width: 100%;
  max-width: 360px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 5px solid #F4975C;
  width: 100%;
`;

const BackButton = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('path_to_back_arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

const Icons = styled.div`
  display: flex;
`;

const HomeIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  background-image: url('path_to_home_icon.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

const AccountIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  background-image: url('path_to_account_icon.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

const OrderStatus = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 5px solid #F4975C;
`;

const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatusText = styled.span`
  font-size: 14px;
`;

const StatusNumber = styled.span`
  font-size: 24px;
  color: #7D7D7D;
`;

const OrderGroup = styled.div`
  margin-top: 15px;
  border-bottom: 5px solid #F4975C;
  padding-bottom: 15px;
`;

const OrderDate = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const OrderItem = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #F4975C;
`;

const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  margin-right: 15px;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const ItemStatus = styled.div`
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 3px;
`;

const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 5px;
`;

const ItemName = styled.div`
  font-size: 12px;
  color: #5A5A5A;
  margin-bottom: 3px;
`;

const ItemOption = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #7D7D7D;
`;

export default OrderPayList;