import React from "react";
import { Button, Text } from "zmp-ui";
import { primaryColor } from "@utils/helper";
import { STATUS_ORDER } from "@utils/type/StatusOrder";
import { PriceDisplay } from "@components/display";

const ButtonStatusOrderBuyer: React.FC<{ status: string }> = ({ status }) => {
  return (
    <>
      {status == STATUS_ORDER.CANCELED && (
        <Button
          size="small"
          className="w-fit"
          style={{ backgroundColor: "rgba(255,0,0,0.2)", color: "red" }}
        >
          Đã hủy đơn
        </Button>
      )}
      {status == STATUS_ORDER.DELIVERING && (
        <Button
          size="small"
          className="w-fit"
          style={{ backgroundColor: primaryColor }}
        >
          Đang giao hàng
        </Button>
      )}
      {status == STATUS_ORDER.PROCESSING && (
        <Button
          size="small"
          className="w-fit"
          style={{ backgroundColor: primaryColor }}
        >
          Đang đợi xác nhận
        </Button>
      )}
      {status == STATUS_ORDER.SUCCESS && (
        <Button
          size="small"
          className="w-fit"
          style={{ backgroundColor: primaryColor }}
        >
          Giao hàng thành công
        </Button>
      )}
    </>
  );
};

const ButtonStatusOrderSeller: React.FC<{ status: string }> = ({ status }) => {
  return (
    <>
      {status == STATUS_ORDER.CANCELED && (
        <Button
          size="small"
          className="w-fit"
          style={{ backgroundColor: "rgba(255,0,0,0.2)", color: "red" }}
        >
          Đã hủy đơn
        </Button>
      )}
      {status == STATUS_ORDER.DELIVERING && (
        <Button
          size="small"
          className="w-fit"
          style={{ backgroundColor: primaryColor }}
        >
          Đã giao hàng & thanh toán
        </Button>
      )}
      {status == STATUS_ORDER.PROCESSING && (
        <Button
          size="small"
          className="w-fit"
          style={{ backgroundColor: primaryColor }}
        >
          Xác nhận bắt đầu giao hàng
        </Button>
      )}
      {status == STATUS_ORDER.SUCCESS && (
        <Button
          size="small"
          className="w-fit"
          style={{ backgroundColor: primaryColor }}
        >
          Đơn hàng đã hoàn thành
        </Button>
      )}
    </>
  );
};
const ProductItem: React.FC<{
  image: string;
  name: string;
  price: number;
  status: string;
  isSeller?: boolean;
  onActon?: () => void;
}> = ({ image, name, price, status, isSeller = false, onActon }) => {
  return (
    <div className="flex items-center justify-between cursor-pointer duration-300 ">
      <div className=" items-start gap-5 grid grid-cols-4 p-4">
        <div className=" mb-2.5 col-start-1 col-span-1" onClick={onActon}>
          <img className="w-24 h-24 rounded-xl" src={image} />
        </div>
        <div
          className="flex flex-col items-start col-start-2 col-span-full h-full"
          onClick={onActon}
        >
          <div className="font-medium no-underline mb-5">{name}</div>
          <div className="flex justify-between w-full">
            <span className="subtitle ">1 Sản phẩm</span>
            <span className="subtitle ">
              Thanh toán: <span style={{ color: primaryColor }}><PriceDisplay children={price} /></span>
            </span>
          </div>
        </div>
        <div className="col-start-1 col-span-full flex justify-end">
          {isSeller ? (
            <>
              <ButtonStatusOrderSeller status={status} />
            </>
          ) : (
            <ButtonStatusOrderBuyer status={status} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
