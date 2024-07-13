import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  overflow-x: scroll;
  scrollbar-width: none;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`;

const ImageIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 10px;
`;

const categories = [
  { name: '상의', icon: '/icons/shirt-2.png' },
  { name: '하의', icon: '/icons/pants.png' },
  { name: '신발', icon: '/icons/sneakers.png' },
  { name: '모자', icon: '/icons/cap.png' },
  { name: '가방', icon: '/icons/school-bag.png' },
  { name: '소품', icon: '/icons/necklace.png' },
  { name: '언더웨어', icon: '/icons/panties.png' }
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/GreyPants/${category}`);
  };

  return (
    <CategoryContainer>
      {categories.map((category) => (
        <Category key={category.name} onClick={() => handleCategoryClick(category.name)}>
          <ImageIcon src={category.icon} alt={`${category.name} image`} />
          {category.name}
        </Category>
      ))}
    </CategoryContainer>
  );
};

export default Categories;
