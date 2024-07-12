import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`;

const FilterBtn = styled.button`
  padding: 5px 10px;
  font-family: TheJamsil2Light;
  font-size: 12px; /* Adjusted to make the text smaller */
`;

function Filter() {
  return (
    <FilterContainer>
      <FilterBtn>낮은 가격순</FilterBtn>
      <FilterBtn>높은 가격순</FilterBtn>
      <FilterBtn>판매량순</FilterBtn>
      <FilterBtn>리뷰 많은 순</FilterBtn>
      <FilterBtn>최신순</FilterBtn>
    </FilterContainer>
  );
}

export default Filter;
