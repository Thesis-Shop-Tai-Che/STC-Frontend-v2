import React from "react";
import { Icon } from "zmp-ui";
import Button from "zmp-ui/button";
import { Product } from "@utils/type/Product";
import { useNavigate } from "react-router-dom";
import { openChatScreen, primaryColor, tertiaryColor } from "@utils/helper";

const ButtonOrder: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const saveNativeStorgeProduct = () => {
    navigate(`/order`, { state: { product: product } });
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-12 bg-white flex justify-center items-end">
      <Button
        className="w-4/12 "
        style={{ backgroundColor: tertiaryColor, borderRadius: "0px" }}
        onClick={() => openChatScreen()}
      >
        <Icon icon="zi-chat" />
      </Button>
      <Button
        className="w-8/12 rounded-none"
        style={{
          backgroundColor:
            !product || !product?.amount || product.amount === 0
              ? "gray"
              : primaryColor,
          borderRadius: "0px",
        }}
        onClick={saveNativeStorgeProduct}
        disabled={!product || !product?.amount || product.amount === 0}
      >
        {!product || !product?.amount || product.amount === 0
          ? "Hết hàng"
          : "Mua ngay"}
      </Button>
    </div>
  );
};

export default ButtonOrder;
