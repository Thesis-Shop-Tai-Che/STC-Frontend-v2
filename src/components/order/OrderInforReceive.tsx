import {
  SectionText,
  InputNoOutline,
  ButtonSecondary,
  DividerSpaceLine,
} from "@components/common";
import React from "react";
import { Button, Icon, Text } from "zmp-ui";
import { primaryColor } from "@utils/helper/config";
import { OrderStatusFetch } from "@utils/type/Order";

const OrderInforReceive: React.FC<{
  editView?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  orderItem?: OrderStatusFetch | null;
  title?:string;
}> = ({ editView, onChange, orderItem, title }) => {
  const AdressField = editView ? (
    <>
      <InputNoOutline
        id="address"
        placeholder="Nhập địa chỉ..."
        onChange={onChange}
      />
      {/* <ButtonSecondary title="Tự động điền" isSecondary /> */}
    </>
  ) : (
    <h1>{orderItem?.address}</h1>
  );

  const ReceiverField = editView ? (
    <>
      <div>
        <label htmlFor="numberphone">Người nhận</label>
        <InputNoOutline
          placeholder="Cho phép truy cập SĐT để tự động điền"
          id="numberphone"
          onChange={onChange}
        />
      </div>{" "}
      {/* <Icon icon="zi-chevron-right" className="ml-5 self-center" /> */}
    </>
  ) : (
    <div>
      <Text className="font-bold" style={{ color: primaryColor }} bold>
        {orderItem && orderItem.name ? orderItem?.name : " "} -{" "}
        {orderItem && orderItem.phone ? orderItem?.phone : " "}
      </Text>
      <Text className="text-gray-500">Người nhận</Text>
    </div>
  );

  const NoteField = editView ? (
    <>
      <InputNoOutline
        id="note"
        placeholder="Ghi chú cho người bán..."
        onChange={onChange}
      />
    </>
  ) : (
    <h3>{orderItem?.note}</h3>
  );

  return (
    <SectionText title={title ? title :"1. Thông tin nhận hàng"} padding="title-only">
      <div className="px-4">
        <div className="flex gap-5 justify-start items-center">
          <Icon icon="zi-location" />
          {AdressField}
        </div>
        <DividerSpaceLine />
        <div className="flex gap-5 justify-start items-start ">
          <Icon icon="zi-user" />
          {ReceiverField}
        </div>
        <DividerSpaceLine />
        <div className="flex gap-5 justify-start items-start">
          <Icon icon="zi-note" />
          {NoteField}
        </div>
      </div>
    </SectionText>
  );
};

export default OrderInforReceive;
