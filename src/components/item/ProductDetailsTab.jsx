import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TabContext } from "./TabProvider";

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px; /* 너비 조절 */
  border-bottom: 1px solid #ddd; /* 아래쪽 회색 테두리 */
  margin-bottom: 20px; /* 아래 여백 추가 */
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  position: relative;

  color: ${(props) => (props.active ? "black" : "#6d697a")};

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -1px; /* indicator 위치 조절 */
    width: 50px;
    height: 3px;
    background-color: ${(props) => (props.active ? "#f25f0d" : "transparent")};
    transform: translateX(-50%);
    transition: all 0.3s ease; /* 모든 속성에 transition 적용 */
  }

  &:hover::after {
    width: 100%; /* 호버 시 indicator 너비 확장 */
    background-color: #ffd5bd; /* 호버 시 indicator 색상 변경 */
  }
`;

const ProductDetailsTab = ({ children }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <>
      <TabContainer className="tab-buttons">
        <Tab
          active={activeTab === "상세정보"}
          onClick={() => setActiveTab("상세정보")}
        >
          상세정보
        </Tab>
        <Tab active={activeTab === "리뷰"} onClick={() => setActiveTab("리뷰")}>
          리뷰
        </Tab>
        <Tab active={activeTab === "문의"} onClick={() => setActiveTab("문의")}>
          문의
        </Tab>
      </TabContainer>
      <div className="tab-content">{children(activeTab)}</div>
    </>
  );
};

export default ProductDetailsTab;
