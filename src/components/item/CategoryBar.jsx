import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ItemListContainer = styled.div`
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    width: 100%;
    text-align: center;
`;

const ItemTitle = styled.div`
  font-family: 'TheJamsil3Regular';
  font-size: 15px;
  text-align: left; /* Added text-align property */
`;

function CategoryBar() {
  const { category, subCategory } = useParams();

  return (
    <ItemListContainer>
      <ItemTitle>
        {category} &gt; {subCategory}
      </ItemTitle>
    </ItemListContainer>
  );
}

export default CategoryBar;
