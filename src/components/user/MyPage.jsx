import React from "react";
import styled from "styled-components";
import { FiLock, FiSettings, FiHeart } from "react-icons/fi"; // react-icons 사용
// --- Styled Components ---

const HeaderSpacer = styled.div`
  height: 80px;  // 헤더와 섹션 사이의 간격
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  width: 96%;
  padding: 15px 0;
  background-color: #fff;
  margin-left: 8px;
`;

const ProfileName = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
  margin-left: 5px;
`;

const WhiteButton = styled.button`
  background-color: #fff;
  color: #dcdcdc;
  border: 1px solid #dcdcdc;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 0.6rem;
  margin-left: 10px;
`;

const OrderReviewContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%; 
  padding: 10px 0;
  background-color: #fff;
  border-top: 1px solid #ffa500; 
  border-bottom: 7px solid #ffa500; 
`;

const OrderReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  color: #333;
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: #ccc;
`;

const MenuContainer = styled.div`
  width: 100%; 
  background-color: #fff;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const MenuIcon = styled.div`
  margin-right: 10px;
  color: #ffa500;
`;

const MenuText = styled.div`
  font-size: 0.9rem;
  color: #333;
`;

// --- 컴포넌트 ---

const MyPage = () => {
  const handleMenuClick = (menu) => {
    // 메뉴 클릭 시 처리 로직 (예: 페이지 이동)
    console.log(`${menu} 메뉴 클릭`);
  };

  return (
    <>
      <HeaderSpacer />
        <ProfileHeader>
          <div>👤</div> {/* 프로필 이미지 대체 아이콘 */}
          <ProfileName>지갑이 얇아 슬픈 짐승</ProfileName>
          <WhiteButton>white</WhiteButton>
        </ProfileHeader>
        <OrderReviewContainer>
          <OrderReviewItem>
            <div>주문내역</div>
            <div>0</div>
          </OrderReviewItem>
          <Divider />
          <OrderReviewItem>
            <div>나의 리뷰</div>
            <div>0</div>
          </OrderReviewItem>
        </OrderReviewContainer>
        <MenuContainer>
          <MenuItem onClick={() => handleMenuClick("비밀번호 수정")}>
            <MenuIcon>
              <FiLock />
            </MenuIcon>
            <MenuText>비밀번호 수정</MenuText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("회원 정보 수정")}>
            <MenuIcon>
              <FiSettings />
            </MenuIcon>
            <MenuText>회원 정보 수정</MenuText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("찜 목록")}>
            <MenuIcon>
              <FiHeart />
            </MenuIcon>
            <MenuText>찜 목록</MenuText>
          </MenuItem>
        </MenuContainer>
    </>
  );
};

export default MyPage;
