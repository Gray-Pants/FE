import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { TabContext } from "./TabProvider";

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 700; // 폰트 굵게 설정
  cursor: pointer;
  position: relative;

  color: ${(props) =>
    props.active ? "black" : "#6d697a"}; // 선택되지 않은 탭 색상 변경

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 50px; // indicator 너비 조절
    height: 3px; // indicator 높이 조절
    background-color: ${(props) =>
      props.active ? "#f25f0d" : "transparent"}; // indicator 색상
    transform: translateX(-50%); // indicator 가운데 정렬
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: translateX(-50%) scaleX(1.2); // 호버 시 indicator 확대 효과
  }
`;

function ProductDetailsTab() {
  const { activeTab, setActiveTab } = useContext(TabContext);
  const location = useLocation(); // 현재 location 정보 가져오기

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
      <Link to={`${location.pathname}/review`}>
        {" "}
        {/* 현재 경로에 /review 추가 */}
        <Tab
          active={activeTab === "리뷰"}
          onClick={() => handleTabClick("리뷰")}
        >
          리뷰
        </Tab>
      </Link>
      <Tab active={activeTab === "문의"} onClick={() => handleTabClick("문의")}>
        문의
      </Tab>
    </TabContainer>
  );
}
export default ProductDetailsTab;
