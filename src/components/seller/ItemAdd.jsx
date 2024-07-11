import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'TheJamsil3Regular';
  text-align: center;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;   // 컨테이너 width에 맞춰 최대한 늘림
  max-width: 400px; // 최대 너비는 400px
  height: 40px;
  margin-bottom: 15px;
  padding: 0 10px;
  background: #d9d9d9;
  border: none;
  font-size: 16px;

  &::placeholder {
    color: #000000;
  }
`;

const FileInputField = styled.input`
  /* 기존 FileInputField 스타일과 동일하게 설정 */
  width: 100%; // 컨테이너 width에 맞춰 최대한 늘림
  max-width: 400px; // 최대 너비는 400px
  height: 40px;
  margin-bottom: 15px;
  padding: 5px 10px;
  background: #d9d9d9;
  border: none;
  font-size: 16px;
`;

const Label = styled.label`
  display: block; // Label을 block 요소로 변경
  width: 100%; // 컨테이너 width에 맞춰 최대한 늘림
  max-width: 400px; // 최대 너비는 400px
  margin-bottom: 5px;
  font-size: 14px;
  color: #000000;
  text-align: left;
`;

const InputContainer = styled.div`
  display: flex; // flexbox 사용
  flex-direction: column; // 수직 정렬
  align-items: center;   // 가운데 정렬
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 100%;
  max-width: 400px;
  height: 40px;
  background: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
`;

const ItemAdd = () => {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemStock, setItemStock] = useState('');
  const [itemImages, setItemImages] = useState([null, null, null]);
  const [itemDetailImage, setItemDetailImage] = useState(null);

  const handleItemImageChange = (index, file) => {
    const newImages = [...itemImages];
    newImages[index] = file;
    setItemImages(newImages);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // Form data를 준비합니다.
    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('itemCategory', itemCategory);
    formData.append('itemPrice', itemPrice);
    formData.append('itemStock', itemStock);
    itemImages.forEach((image, index) => {
      if (image) {
        formData.append(`itemImage${index + 1}`, image);
      }
    });
    if (itemDetailImage) {
      formData.append('itemDetailImage', itemDetailImage);
    }

    // 서버에 formData를 전송하는 로직을 추가합니다.
    // 예시:
    // axios.post('/api/upload', formData)
    //   .then(response => console.log(response))
    //   .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>상품 등록</Title>
      <FormContainer>
        <InputContainer> 
          <Label>상품 이름</Label> {/* Label 컴포넌트 추가 */}
          <InputField
            placeholder="상품 이름"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label>상품 카테고리</Label>
          <InputField
            placeholder="상품 카테고리"
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
          />
        </InputContainer>
        {[...Array(3)].map((_, index) => (
          <InputContainer key={index}>
            <Label>아이템 이미지 {index + 1}</Label>
            <FileInputField 
              type="file" 
              onChange={(e) => handleItemImageChange(index, e.target.files[0])}
            />
          </InputContainer>
        ))}
        <InputField 
          placeholder="상품 가격" 
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <InputField 
          placeholder="상품 재고" 
          value={itemStock}
          onChange={(e) => setItemStock(e.target.value)}
        />
        <InputContainer>
          <Label>상품 상세 페이지 이미지</Label>
          <FileInputField
            type="file"
            onChange={(e) => setItemDetailImage(e.target.files[0])}
          />
        </InputContainer>
        <SubmitButton type="submit">상품 등록</SubmitButton>
      </FormContainer>
    </form>
  );
};

export default ItemAdd;
