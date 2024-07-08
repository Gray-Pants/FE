import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi"; // 화살표 아이콘

const CategoryMenuContainer = styled.div`
  // 컨테이너 컴포넌트 이름 변경
  width: 600px;
  height: 68px;
  font-size: 15px;
  font-weight: 700;
  background-color: #fff;

  /* 추가적인 스타일 */
  display: flex; /* 아이템들을 가로로 배치 */
  justify-content: space-around; /* 아이템 간격 균등하게 배분 */
`;

const CategoryMenu = styled.div`
  /* 전체 메뉴 스타일 */
  width: 600px;
  height: 68px;
  font-size: 15px;
  font-weight: 700;
  background-color: #fff;
`;

const CategoryItem = styled.div`
  /* 카테고리 아이템 스타일 */
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ArrowIcon = styled(FiChevronRight)`
  /* 화살표 아이콘 스타일 */
  margin-left: 5px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};
`;

const SubCategoryList = styled.ul`
  /* 하위 카테고리 목록 스타일 */
  list-style: none;
  padding: 0;
  margin-left: 20px; /* 들여쓰기 */
  display: ${(props) => (props.isOpen ? "block" : "none")}; /* 숨김/표시 토글 */
`;

function ItemDetailCategory() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <>
      <CategoryMenuContainer>
        <CategoryMenu>
          <CategoryItem onClick={() => handleCategoryClick("신발")}>
            신발 <ArrowIcon isOpen={activeCategory === "신발"} />
            {activeCategory === "신발" && (
              <SubCategoryList isOpen={true}>
                <li onClick={() => handleCategoryClick("스니커즈")}>
                  스니커즈 <ArrowIcon isOpen={activeCategory === "스니커즈"} />
                  {activeCategory === "스니커즈" && (
                    <SubCategoryList isOpen={true}>
                      <li>단화/캔버스</li>
                      {/* 다른 하위 카테고리 추가 */}
                    </SubCategoryList>
                  )}
                </li>
                {/* 다른 하위 카테고리 추가 */}
              </SubCategoryList>
            )}
          </CategoryItem>
          {/* 다른 카테고리 아이템 추가 */}
        </CategoryMenu>
      </CategoryMenuContainer>
    </>
  );
}

export default ItemDetailCategory;
