import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: transparent; // 배경 없음
  color: #f4975c; // 주황색 글씨
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 300px;
  transition: color 0.3s ease; // 색상 변화에 대한 부드러운 전환 효과

  &:hover {
    text-decoration: underline; // 호버 시 밑줄 추가
  }

  &:active {
    // 클릭 시
    color: black; // 글씨 색상 검은색으로 변경
  }
`;

function Button({ children, onClick, ...rest }) {
  return (
    <ButtonStyle onClick={onClick} {...rest}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
