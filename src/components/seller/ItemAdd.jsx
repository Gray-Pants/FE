import React, { useState } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../api/ApiClient';

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

const SelectField = styled.select`
  width: 100%;
  max-width: 400px;
  height: 40px;
  margin-bottom: 15px;
  padding: 5px 10px;
  background: #d9d9d9;
  border: none;
  font-size: 16px;
`;

const ItemAdd = () => {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemStock, setItemStock] = useState('');
  const [itemImages, setItemImages] = useState([]);
  const [itemDetailImage, setItemDetailImage] = useState(null);

  const categoryOptions = ['아우터', '긴팔', '반팔', '반바지', '긴바지', '치마', '운동화', '부츠', '슬리퍼', '볼캡', '버킷햇', '비니', '백팩', '크로스백', '숄더백', '팔찌', '반지', '목걸이', '여성속옷', '남성속옷'];

  const handleItemImageChange = (index, file) => {

    const newImages = [...itemImages];
    newImages[index] = file;
    setItemImages(newImages.slice(0, 4)); // 최대 3개의 이미지만 유지
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('itemCategory', itemCategory);
    formData.append('itemPrice', itemPrice);
    formData.append('stock', itemStock);
    itemImages.forEach(itemImage=> formData.append("itemPhotos", itemImage))
    if (itemDetailImage) {
      formData.append('itemDescImg', itemDetailImage);
    }

    console.log(formData.get('itemName'));

    apiClient.post('/items/item', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log('서버 응답:', response);
        // 성공적으로 데이터를 전송한 후 처리할 로직
      })
      .catch(error => {
        console.error('전송 오류:', error);
        // 오류 발생 시 처리할 로직
      });
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
          <SelectField
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
          >
            <option value="">카테고리 선택</option>
            {categoryOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </SelectField>
        </InputContainer>
      
        <InputContainer>
          <Label>상품 이미지 (최대 3장)</Label>
          <FileInputField
            type="file"
            onChange={handleItemImageChange}
            multiple // 다중 파일 선택 가능
          />
        </InputContainer>

        <InputContainer>
          <Label>상품 가격</Label>
          <InputField
            placeholder="상품 가격" 
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />

        </InputContainer>
        <InputContainer>
          <Label>상품 재고</Label>
          <InputField
            placeholder="상품 재고" 
            value={itemStock}
            onChange={(e) => setItemStock(e.target.value)}
          />
        </InputContainer>
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
