import React, { useEffect } from "react";
import SectionText from "../section/SectionText";
import ProductItem from "./ProductItem";
import { FC, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSlideSkeleton } from "../skeleton/SkeletonsList";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GetProductsPopular } from "@services/ProductServices";
import { FetchState } from "@utils/type/FetchState";

const ProductListSwipeContent: FC = () => {
  const [products, fetchState, getRes] = GetProductsPopular();

  useEffect(() => {
    if (fetchState === FetchState.DEFAULT) getRes();
  }, []);
 
  return (
    <SectionText title="Gợi ý cho bạn" padding="title-only">
      <Swiper
        spaceBetween={10}
        slidesPerView={2.2}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="px-4 "
   
      >
        {(fetchState === FetchState.ERROR ||
          fetchState === FetchState.LOADING) && <ProductListSwipeFallBack />}

        {fetchState === FetchState.SUCCESS && (
          <div className="table h-full">
            {products?.data.map((product: any, index) => (
              <SwiperSlide className="table-column h-full" key={index}> <ProductItem key={index} product={product} /></SwiperSlide>
             
            ))}
          </div>
        )}
      </Swiper>
    </SectionText>
  );
};

const ProductListSwipeFallBack: FC = () => {
  const recommendProducts = [...new Array(3)];
  return (
    <SectionText title="Gợi ý cho bạn" padding="title-only">
      <Swiper slidesPerView={2.5} spaceBetween={16} className="px-4">
        {recommendProducts.map((_, index) => (
          <SwiperSlide key={index}>
            <ProductSlideSkeleton />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionText>
  );
};

const ProductListSwipe: FC = () => {
  return (
    <Suspense fallback={<ProductListSwipeFallBack />}>
      <ProductListSwipeContent />
    </Suspense>
  );
};

export default ProductListSwipe;
