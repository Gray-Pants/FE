import React from "react";
import styled from "styled-components";

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  width: 24px; // 체크박스 크기
  height: 24px;
  border: 1px solid #ddd; // 테두리 색상
  border-radius: 0; // 사각형 모양
  background-color: white; // 배경색 흰색
  appearance: none; // 기본 스타일 제거
  margin-right: 10px; // 오른쪽 여백 추가

  &:checked {
    background-color: #f25f0d; // 체크 시 주황색 배경
    border: none; // 체크 시 테두리 제거

    &::before {
      // 체크 표시 추가
      content: "✔";
      display: block;
      color: white; // 체크 표시 색상 흰색
      font-size: 12px; // 체크 표시 크기
      text-align: center;
      line-height: 24px; // 체크 표시 수직 정렬
    }
  }
`;

function Checkbox({ checked, onChange }) {
  return <CheckboxInput checked={checked} onChange={onChange} />;
}

export default Checkbox;
