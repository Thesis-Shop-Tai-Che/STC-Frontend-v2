import React from "react";
import { Text } from "zmp-ui";
import { Product } from "@utils/type/Product";
import { useNavigate } from "react-router-dom";
import { PriceDisplay } from "@components/display";

const ProductShopItem: React.FC<{ product: Product }> = ({ product }) => {
  const navigation = useNavigate();
  return (
    <div
      className="flex flex-col gap-10 p-4"
      onClick={() => {
        navigation(`/product-detail/${product.id}`);
      }}
    >
      <div className="flex items-start h-20 gap-5  ">
        <img
          src={product.ProductMedia[0].url}
          alt="Product Image"
          // style={{  height: '100%', objectFit:"fill"}}
          className="rounded-lg w-24 h-24"
        />
        <div className=" h-2/3 flex flex-col justify-between w-full">
          <Text size="normal" className="m-0 p-0" bold>
            {product.title}
          </Text>
          <div className="flex justify-between w-full">
            <Text size="normal" bold>
              <PriceDisplay children={product.price} />
            </Text>
          </div>
        </div>
      </div>
      <div className="flex gap-10  ">
        <Text size="small" className="text-gray-500">
          Kho hàng: {product.amount}
        </Text>
        <Text size="small" className="text-gray-500">
          Đã bán: {product.has_sold}
        </Text>
        <Text size="small" className="text-gray-500">
          Thích: {product._count?.Love}
        </Text>
      </div>
    </div>
  );
};

export default ProductShopItem;
