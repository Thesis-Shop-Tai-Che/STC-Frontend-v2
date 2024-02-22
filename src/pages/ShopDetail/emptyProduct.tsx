import React from "react";
import { Button, Text } from "zmp-ui";
import { primaryColor } from "@utils/helper/config";
import { UserFetch } from "@utils/type/User";

const EmptyProduct: React.FC<{
  currentUser: UserFetch;
  idShop: string | null;
}> = ({ currentUser, idShop }) => {
  return (
    <div className="flex flex-col p-4 gap-4 justify-center items-center">
      <div className="bg-gray-200 w-32 h-32 rounded-md " />
      <Text bold size="large">
        Vắng tanh như chùa bà đanh
      </Text>
      { currentUser.is_seller && currentUser.id == (idShop ? parseInt(idShop) : undefined) ? (
        <>
          <Text className="text-center text-gray-500 px-10">
            Đăng bán trên Shop Tái Chế để tiếp cận lượng khách hàng lớn có nhu
            cầu với sản phẩm bảo vệ môi trường
          </Text>
          <Button
            size="medium"
            className="w-fit"
            style={{ backgroundColor: primaryColor }}
          >
            Thêm sản phẩm mới
          </Button>{" "}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EmptyProduct;
