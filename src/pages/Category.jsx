import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";

// --- Styled Components ---

const CategoryMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SubCategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 20px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const ArrowIcon = styled(FiChevronRight)`
  margin-left: auto;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "none")};
`;

// --- 컴포넌트 ---

const categories = {
  아우터: ["가디건", "자켓", "집업/점퍼", "바람막이", "코트", "플리스", "야상", "패딩"],
  상의: ["후드", "맨투맨", "니트"],
  // ... (다른 카테고리 추가)
};

function Category() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <CategoryMenuContainer>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <CategoryTitle onClick={() => handleCategoryClick(category)}>
            {category}
            <ArrowIcon isOpen={activeCategory === category} />
          </CategoryTitle>
          {activeCategory === category && (
            <SubCategoryList isOpen={true}>
              {categories[category].map((subCategory) => (
                <CategoryItem key={subCategory} onClick={() => handleCategoryClick(subCategory)}>
                  {subCategory}
                </CategoryItem>
              ))}
            </SubCategoryList>
          )}
        </div>
      ))}
    </CategoryMenuContainer>
  );
}

export default Category;