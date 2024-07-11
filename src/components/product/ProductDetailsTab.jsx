import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";
import shouldForwardProp from "@emotion/is-prop-valid";

// --- Styled Components ---

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #ddd; /* 회색 밑줄 */
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 15px 0;
  font-size: 16px;
  cursor: pointer;
  position: relative; /* indicator 위치 설정을 위해 필요 */

  /* active 스타일 조건부 적용 (삼항 연산자 사용) */
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "black" : "#777")};

  /* &:after는 active 상태일 때만 적용 */
  ${(props) =>
    props.active &&
    `
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: ${props.theme.colors.primary || "#f25f0d"}; 
      transform: scaleX(1);
      transition: transform 0.3s ease;
    }
  `}

  /* shouldForwardProp 옵션 추가 */
  ${shouldForwardProp((prop) => !["active"].includes(prop))}
`;

// --- 컴포넌트 ---

function ProductDetailsTab() {
  const [activeTab, setActiveTab] = useState("상세정보");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabContainer>
      <Tab
        active={activeTab === "상세정보"}
        onClick={() => handleTabClick("상세정보")}
      >
        상세정보
      </Tab>
      <Tab active={activeTab === "리뷰"} onClick={() => handleTabClick("리뷰")}>
        리뷰
      </Tab>
      <Tab active={activeTab === "문의"} onClick={() => handleTabClick("문의")}>
        문의
      </Tab>
    </TabContainer>
  );
}

export default ProductDetailsTab; // 컴포넌트 이름 수정
