import React from "react";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi"; // 화살표 아이콘

// --- Styled Components ---

const CategoryMenu = styled.div`
  /* 전체 메뉴 스타일 */
  max-width: 400px;
  min-width: 400px;
  height: 68px;
  font-size: 15px;
  font-weight: 700;
  background-color: #fff;
  display: flex; /* 아이템들을 가로로 배치 */
  justify-content: flex-start;
  padding-left: 20px;
`;

const CategoryItem = styled.div`
  /* 카테고리 아이템 스타일 */
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  color: #6d697a;
`;

const ArrowIcon = styled(FiChevronRight)`
  /* 화살표 아이콘 스타일 */
  margin-left: 5px;
  font-size: 15px;
  font-weight: 700;
  color: #6d697a; // 원하는 색상 적용
`;

const SubCategoryList = styled.ul`
  /* 하위 카테고리 목록 스타일 */
  list-style: none;
  padding: 0;
  margin-left: 20px; /* 들여쓰기 */
  font-size: 15px;
  font-weight: 700;
  color: #6d697a;
`;

function ItemDetailCategory() {
  return (
    <CategoryMenu>
      <CategoryItem>
        신발 <ArrowIcon />
        <SubCategoryList>
          스니커즈
          {/* 다른 하위 카테고리 추가 */}
        </SubCategoryList>
      </CategoryItem>
      {/* 다른 카테고리 아이템 추가 */}
    </CategoryMenu>
  );
}

export default ItemDetailCategory;
