import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";
import FooterNav from "../../components/footer/FooterNav";

// --- Styled Components ---

const CategoryMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoryTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
`;

const CategoryImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
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
  padding-left: 30px;
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
  상의: { image: "/icons/shirt-2.png", subCategories: ["아우터", "긴팔", "반팔"] },
  하의: { image: "/icons/pants.png", subCategories: ["반바지", "긴바지", "치마"] },
  신발: { image: "/icons/sneakers.png", subCategories: ["운동화", "부츠", "슬리퍼"] },
  모자: { image: "/icons/cap.png", subCategories: ["볼캡", "버킷햇", "비니"] },
  가방: { image: "/icons/school-bag.png", subCategories: ["백팩", "크로스백", "숄더백"] },
  소품: { image: "/icons/necklace.png", subCategories: ["팔찌", "반지", "목걸이"] },
  언더웨어: { image: "/icons/panties.png", subCategories: ["여성속옷", "남성속옷"] }
};

function Category() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleSubCategoryClick = (category, subCategory) => {
    navigate(`/${category}/${subCategory}`);
  };

  return (
    <>
    <CategoryMenuContainer>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <CategoryTitle onClick={() => handleCategoryClick(category)}>
            <CategoryImage src={categories[category].image} alt={`${category} icon`} />
            {category}
            <ArrowIcon isOpen={activeCategory === category} />
          </CategoryTitle>
          {activeCategory === category && (
            <SubCategoryList isOpen={true}>
              {categories[category].subCategories.map((subCategory) => (
                <CategoryItem
                  key={subCategory}
                  onClick={() => handleSubCategoryClick(category, subCategory)}
                >
                  {subCategory}
                </CategoryItem>
              ))}
            </SubCategoryList>
          )}
        </div>
      ))}
    </CategoryMenuContainer>
    <FooterNav />
    </>
  );
}

export default Category;
