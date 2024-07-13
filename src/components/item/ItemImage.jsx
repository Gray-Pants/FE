import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  overflow-y: auto; // 세로 스크롤 항상 활성화
  max-height: 100vh; // 최대 높이 제한 (원하는 값으로 설정)
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

function ProductImage({ src }) {
  return (
    <ImageContainer>
      {/* <Image src={src} alt="Product" /> */}
      <Image src="../../../public/images/Rectangle 57.svg" alt="Product" />
    </ImageContainer>
  );
}

export default ProductImage;
