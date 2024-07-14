import React, { createContext, useState } from "react";

// 탭의 기본 상태 (상세정보)
const initialActiveTab = "상품 목록";

// TabContext 생성
const TabContext = createContext({
  activeTab: initialActiveTab,
  setActiveTab: () => {}, // setActiveTab 함수 (초기값은 빈 함수)
});

// TabProvider 컴포넌트 생성
function TabProvider({ children }) {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export { TabContext, TabProvider };