import React from 'react';
import styled from 'styled-components';
import { FiShoppingBag, FiSmartphone, FiHeadphones, FiWatch } from 'react-icons/fi';
import { GiTShirt } from 'react-icons/gi';

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
`;

const ImageIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 10px;
`;

const Categories = () => {
  return (
    <CategoryContainer>
      <Category>
        <ImageIcon src="/icons/shirt-2.png" alt="top image" />
        상의
      </Category>
      <Category>
        <ImageIcon src="/icons/pants.png" alt="top image" />
        하의
      </Category>
      <Category>
        <ImageIcon src="/icons/sneakers.png" alt="top image" />
        신발
      </Category>
      <Category>
        <ImageIcon src="/icons/cap.png" alt="top image" />
        모자
      </Category>
      <Category>
        <ImageIcon src="/icons/school-bag.png" alt="top image" />
        가방
      </Category>
      <Category>
        <ImageIcon src="/icons/necklace.png" alt="top image" />
        소품
      </Category>
      <Category>
        <ImageIcon src="/icons/panties.png" alt="top image" />
        언더웨어
      </Category>
    </CategoryContainer>
  );
};

export default Categories;
