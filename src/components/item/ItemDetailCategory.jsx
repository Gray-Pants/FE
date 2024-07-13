import React from "react";
import styled from "styled-components";

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

function ItemDetailCategory({ category }) {
  return (
    <CategoryMenu>
      <CategoryItem>{category}</CategoryItem>
    </CategoryMenu>
  );
}

export default ItemDetailCategory;
