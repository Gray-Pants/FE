import React, { useState } from "react";
import styled from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 400px;
  max-width: 400px;
  margin-top: 60px;
  padding: 5px 0;
`;

const CheckBox = styled.div`
  margin-right: 10px; /* 체크박스와 텍스트 사이 간격 */
  cursor: pointer;
`;

const Label = styled.span`
  font-size: 16px;
`;

function CheckBoxComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <CheckBox onClick={handleCheckboxChange}>
        {isChecked ? (
          <MdCheckBox size={24} />
        ) : (
          <MdCheckBoxOutlineBlank size={24} />
        )}
      </CheckBox>
      <Label>전체선택(0/1)</Label>
      <Label style={{ marginLeft: "auto" }}>선택삭제</Label> {/* 오른쪽 정렬 */}
    </Container>
  );
}

export default CheckBoxComponent;
