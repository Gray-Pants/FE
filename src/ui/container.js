import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: calc(100vw - 40px); /* 40px은 양쪽의 20px 패딩을 고려한 값 */
  min-width: 250px;
  max-width: 400px; /* 웹 화면에서 고정된 최대 너비 */
  margin: auto; /* 중앙 정렬을 위한 margin 설정 */
  height: 100%;
`;
