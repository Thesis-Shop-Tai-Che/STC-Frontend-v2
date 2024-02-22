import React from "react";
import { Text } from "zmp-ui";
import { primaryColor } from "@utils/helper/config";
import { Product } from "@utils/type";
import { useNavigate } from "react-router-dom";
import UserInfo from "@components/common/UserInfo";

interface Props {
  product: Product;
}
const ProductDetailShop = ({ product }: Props) => {
  const navigate = useNavigate();

  const maxLength = 20;
  return (
    <div
    // className="flex items-center justify-between space-x-4 px-4"
    >
      <UserInfo
        flexDirectionProp='row'
        alignItemsProp='center'
        userInfoStyle={{
          backgroundColor: 'white',
          padding: '16px 12px 16px 12px', // Top & Bottom: 16px, Left & Right: 12px
        }}
        avatarSource={
          (product.Shop?.ShopInfo[0]?.avatar &&
            product.Shop?.ShopInfo[0].avatar) ||
          "https://media1.nguoiduatin.vn/media/dong-xuan-thuan/2023/07/20/ai.jpg"
        }
        avatarSize={48}
        userInfoContentStyle={{
          marginLeft: 8
        }}
        userName={product.Shop?.ShopInfo?.[0]?.name &&
          product.Shop?.ShopInfo?.[0]?.name?.length > maxLength
          ? `${product.Shop.ShopInfo[0].name.substring(0, maxLength)}...`
          : product.Shop?.ShopInfo?.[0]?.name}
        userNameSize="large"
        userInfoType='seller-profile'
        subTitle={
          product.Shop?.ShopInfo?.[0]?.address &&
            product.Shop?.ShopInfo?.[0]?.address?.length > maxLength
            ? `${product.Shop.ShopInfo[0].address.substring(0, maxLength)}...`
            : product.Shop?.ShopInfo?.[0]?.address
          // + ' - ' + `${product.amount} sản phẩm`
        }
      />
      {/* <button
        className="bg-transparent font-semibold hover:bg-gray-200 py-2 px-4 border rounded w-fit"
        style={{ color: primaryColor, borderColor: primaryColor }}
        onClick={() => {
          navigate(`/shop-detail/${product.shop_id}`);
        }}
      >
        Xem shop
      </button> */}
    </div>
  );
};

export default ProductDetailShop;
