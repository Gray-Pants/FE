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
  margin: 0 2px; /* Added margin to create space between buttons */
  width: 100px; /* Set the width of the buttons to be equal */
  box-sizing: border-box; /* Ensure padding is included in the width */
`;

function Filter({ setSortOrder }) {
  const handleFilterClick = (order) => {
    setSortOrder(order);
  };

  return (
    <FilterContainer>
      <FilterBtn onClick={() => handleFilterClick('lowPrice')}>낮은 가격순</FilterBtn>
      <FilterBtn onClick={() => handleFilterClick('highPrice')}>높은 가격순</FilterBtn>
      <FilterBtn onClick={() => handleFilterClick('salesVolume')}>판매량순</FilterBtn>
      <FilterBtn onClick={() => handleFilterClick('newest')}>최신순</FilterBtn>
    </FilterContainer>
  );
}

export default Filter;
