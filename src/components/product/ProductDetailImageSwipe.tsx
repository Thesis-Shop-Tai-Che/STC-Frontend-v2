import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Product } from "@utils/type";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@assets/css/OverrideSwipe.css";
import { Box } from "zmp-ui";

const ProductDetailImageSwipe = ({ product }) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination, Navigation]} 
      className="mySwiper"
    >
      {product.ProductMedia?.map((MediaItem, ChildIndex) => {
        return (
          <SwiperSlide key={ChildIndex}>
            <Box
              className="relative aspect-video rounded-t-md bg-cover bg-center bg-skeleton"
              style={{
                backgroundImage: `url(${MediaItem.url})`,
                minHeight: "60vh",
                width: "100%",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductDetailImageSwipe;
