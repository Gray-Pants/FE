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
  let [itemImages, setItemImages] = useState([]);
  const [itemDetailImage, setItemDetailImage] = useState(null);

  const categoryOptions = [
    { label: '아우터', value: 'OUTER' },
    { label: '긴팔', value: 'LONG_SLEEVE' },
    { label: '반팔', value: 'SHORT_SLEEVE' },
    { label: '반바지', value: 'SHORTS' },
    { label: '긴바지', value: 'PANTS' },
    { label: '치마', value: 'SKIRT' },
    { label: '운동화', value: 'SNIKERS' },
    { label: '부츠', value: 'BOOTS' },
    { label: '슬리퍼', value: 'SLIPPER' },
    { label: '볼캡', value: 'BALL_CAP' },
    { label: '버킷햇', value: 'BUCKET_HAT' },
    { label: '비니', value: 'BEANIE' },
    { label: '백팩', value: 'BACKPACK' },
    { label: '크로스백', value: 'CROSS_BAG' },
    { label: '숄더백', value: 'SHOULDER_BAG' },
    { label: '팔찌', value: 'BRACELET' },
    { label: '반지', value: 'RING' },
    { label: '목걸이', value: 'NECKLACE' },
    { label: '여성속옷', value: 'WOMAN_UNDERWEAR' },
    { label: '남성속옷', value: 'MAN_UNDERWEAR' }
  ];

  const handleItemImageChange = (e) => {
    const selectImages = Array.from(e.target.files);
    setItemImages(selectImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('category', itemCategory);
    formData.append('itemPrice', itemPrice);
    formData.append('stock', itemStock);
    itemImages.forEach((itemImage) => formData.append('itemPhotos', itemImage));
    if (itemDetailImage) {
      formData.append('itemDescImg', itemDetailImage);
    }

    apiClient.post('/items/item', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log('서버 응답:', response);
      })
      .catch(error => {
        console.error('전송 오류:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>상품 등록</Title>
      <FormContainer>
        <InputContainer>
          <Label>상품 이름</Label>
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
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </SelectField>
        </InputContainer>
        <InputContainer>
          <Label>상품 이미지 (최대 3장)</Label>
          <FileInputField
            type="file"
            onChange={handleItemImageChange}
            multiple
            accept=".jpg, .jpeg, .png"
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
