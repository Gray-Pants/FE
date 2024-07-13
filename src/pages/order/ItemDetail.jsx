import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SearchHeader from "../../components/header/SearchHeader";
import ItemDetailCategory from "../../components/item/ItemDetailCategory";
import ProductCard from "../../components/item/ProductCard";
import ProductDetailsTab from "../../components/item/ProductDetailsTab";
import ItemImage from "../../components/item/ItemImage";
import FooterNav from "../../components/footer/FooterNav";
import { apiClient } from "../../api/ApiClient";
import { TabContext, TabProvider } from "../../components/item/TabProvider";
import ReviewList from "../../components/review/ReviewList";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { activeTab } = useContext(TabContext);

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
  }, [itemId, activeTab]);

  if (error) {
    return (
      <div>
        <h2>상품 정보를 불러오는 중 오류가 발생했습니다.</h2>
        <p>잠시 후 다시 시도해 주세요.</p>
      </div>
    );
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <TabProvider>
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
        <ProductDetailsTab>
          {(activeTab) => (
            <>
              {activeTab === "상세정보" && (
                <ItemImage images={product.itemPhotos} />
              )}
              {activeTab === "리뷰" && (
                <ReviewList itemId={itemId} product={product} />
              )}
              {activeTab === "문의" && <div>문의 내용</div>}
            </>
          )}
        </ProductDetailsTab>
        <FooterNav />
      </>
    </TabProvider>
  );
};

export default ItemDetail;
