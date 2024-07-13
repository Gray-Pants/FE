import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchHeader from "../../components/header/SearchHeader";
import ItemDetailCategory from "../../components/item/ItemDetailCategory";
import ProductCard from "../../components/item/ProductCard";
import ProductDetailsTab from "../../components/item/ProductDetailsTab";
import ItemImage from "../../components/item/ItemImage";
import FooterNav from "../../components/footer/FooterNav";
import { apiClient } from "../../api/ApiClient";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await apiClient.get("items/item/" + itemId);
        setProduct(response.data.response);
      } catch (error) {
        console.error("상품 정보를 불러오는 중 오류 발생:", error);
        setError(error);
      }
    };

    if (itemId) {
      fetchProduct();
    }
  }, [itemId]);

  if (error) {
    return (
      <div>
        <h2>상품 정보를 불러오는 중 오류가 발생했습니다.</h2>
        <p>잠시 후 다시 시도해 주세요.</p>
        <p></p>
      </div>
    );
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchHeader />
      <ItemDetailCategory category={product.categoryTitle} />
      <ProductCard
        sellerAvatar={product.sellerAvatar}
        sellerName={product.storeName}
        likes={product.likes}
        productName={product.itemName}
        price={product.itemPrice}
        tags={product.categoryTitle}
        productImage={product.itemPhotos[0]}
        reviewCount={product.reviewCount}
        rating={product.rating}
      />
      <ProductDetailsTab />
      <ItemImage images={product.itemPhotos} />
      <FooterNav />
    </>
  );
};

export default ItemDetail;
