import React, { FC, ReactNode } from "react";
import { Text } from "zmp-ui";
import { PriceDisplay } from "@components/display";
import getColorOpacity from "@utils/helper/getColorOpacity";
import { primaryColor } from "@utils/helper/config";
import { StatusOrder, STATUS_ORDER } from "@utils/type/StatusOrder";

const ItemStatusShipping: FC = () => {
  const colorOpacity = getColorOpacity(primaryColor, "0.3");

  return (
    <>
      <p
        className="px-4 py-2 bg-red-500 font-medium rounded-md"
        style={{ backgroundColor: colorOpacity, color: primaryColor }}
      >
        Đang giao hàng{" "}
      </p>
      <Text
        size="xLarge"
        className="   text-primary"
        style={{ fontWeight: "bolder" }}
      >
        {" "}
        <PriceDisplay children={320000} />
      </Text>
    </>
  );
};

const ItemStatusProcessing: FC = () => {
  const colorOpacity = getColorOpacity(primaryColor, "0.3");

  return (
    <>
      <p
        className="px-4 py-2 bg-red-500 font-medium rounded-md"
        style={{ backgroundColor: colorOpacity, color: primaryColor }}
      >
        Đang xử lí
      </p>
      <Text
        size="xLarge"
        className="   text-primary"
        style={{ fontWeight: "bolder" }}
      >
        {" "}
        <PriceDisplay children={320000} />
      </Text>
    </>
  );
};

const ItemStatusCanceled: FC = () => {
  const colorOpacity = getColorOpacity("#FF0900", "0.3");

  return (
    <>
      <p
        className="px-4 py-2 bg-red-500 font-medium rounded-md"
        style={{ backgroundColor: colorOpacity, color: "#FF0900" }}
      >
        Đã hủy đơn
      </p>
      <Text
        size="xLarge"
        className="   text-primary"
        style={{ fontWeight: "bolder" }}
      >
        {" "}
        <PriceDisplay children={320000} />
      </Text>
    </>
  );
};

const ItemStatusReceived: FC = () => {
  const colorOpacity = getColorOpacity("#FF0900", "0.3");

  return (
    <>
      <p
        className="px-4 py-2 bg-red-500 font-medium rounded-md"
        style={{ backgroundColor: primaryColor, color: "white" }}
      >
        Đã nhận hàng
      </p>
      <Text
        size="xLarge"
        className="   text-primary"
        style={{ fontWeight: "bolder" }}
      >
        {" "}
        <PriceDisplay children={320000} />
      </Text>
    </>
  );
};

const StatusHeader: FC<{ currentStatusOrder: string | null }> = ({
  currentStatusOrder,
}) => {
  const StatusItem: FC = () => {
    if (!currentStatusOrder) {
      return <></>;
    }
    if (currentStatusOrder === STATUS_ORDER.PROCESSING)
      return <ItemStatusProcessing />;

    if (currentStatusOrder === STATUS_ORDER.DELIVERING)
      return <ItemStatusShipping />;

    if (currentStatusOrder === STATUS_ORDER.SUCCESS)
      return <ItemStatusReceived />;

    if (currentStatusOrder === STATUS_ORDER.CANCELED)
      return <ItemStatusCanceled />;

    return <></>;
  };
  return (
    <div className="flex p-2 items-center justify-between">
      <StatusItem />
    </div>
  );
};
export default StatusHeader;
