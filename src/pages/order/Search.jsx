import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // 화살표 아이콘
import SearchBar from '../../components/header/SearchBar';
const SearchTermSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #999;
`;

const SearchTermList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SearchTermItem = styled.li`
  background-color: #f5f5f5;
  padding: 8px 12px;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

const TermText = styled.span`
  margin-right: 5px;
`;

const RankNumber = styled.span`
  font-size: 12px;
  color: #999;
`;

const DropdownArrow = styled(IoIosArrowDown)`
  margin-left: auto;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

function Search() {
  const [activeSection, setActiveSection] = useState("최근 검색어");
  const [isRecentOpen, setIsRecentOpen] = useState(true); // 최근 검색어 초기 상태: 열림
  const [isPopularOpen, setIsPopularOpen] = useState(false); // 인기 검색어 초기 상태: 닫힘

  const recentKeywords = ["긴팔티", "얇은 긴팔", "여름긴팔티", "오프숄더", "여름긴팔니트"];
  const popularKeywords = [
    { term: "뷔스티에", rank: 1 },
    { term: "보조배터리", rank: 2 },
    { term: "래쉬가드", rank: 3 },
    { term: "애플워치 스트랩", rank: 4 },
    { term: "발레코어", rank: 5 },
    { term: "운동화", rank: 6 },
    { term: "담요", rank: 7 },
    { term: "파자마", rank: 8 },
    { term: "누브라", rank: 9 },
  ];

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    if (sectionName === "최근 검색어") {
      setIsRecentOpen(!isRecentOpen);
      setIsPopularOpen(false);
    } else {
      setIsPopularOpen(!isPopularOpen);
      setIsRecentOpen(false);
    }
  };

  return (
    <div>
    <SearchBar />
      <SearchTermSection>
        <SectionTitle onClick={() => handleSectionClick("최근 검색어")}>
          최근 검색어
          <EditButton>편집</EditButton>
          <DropdownArrow isOpen={isRecentOpen} />
        </SectionTitle>
        {isRecentOpen && (
          <SearchTermList>
            {recentKeywords.map((keyword) => (
              <SearchTermItem key={keyword}>{keyword}</SearchTermItem>
            ))}
          </SearchTermList>
        )}
      </SearchTermSection>

      <SearchTermSection>
        <SectionTitle onClick={() => handleCategoryClick("인기 검색어")}>
          인기 검색어
          <span>07.10 12:00 기준</span>
          <DropdownArrow isOpen={isPopularOpen} />
        </SectionTitle>
        {isPopularOpen && (
          <div>
            <SearchTermList>
              {["전체", "10대", "20대 초반", "20대 중반", "20대 후반", "30대 이상"].map((age) => (
                <SearchTermItem key={age}>{age}</SearchTermItem>
              ))}
            </SearchTermList>
            <SearchTermList>
              {popularKeywords.map((keyword) => (
                <SearchTermItem key={keyword.term}>
                  <RankNumber>{keyword.rank}</RankNumber>
                  <TermText>{keyword.term}</TermText>
                  <IoIosArrowDown /> {/* 순위 변동 아이콘 */}
                </SearchTermItem>
              ))}
            </SearchTermList>
          </div>
        )}
      </SearchTermSection>
    </div>
  );
}

export default Search;