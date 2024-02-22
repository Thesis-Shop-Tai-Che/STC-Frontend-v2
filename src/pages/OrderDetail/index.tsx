import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Page } from "zmp-ui";
import ProductShortageItem from "@components/product/ProductShortageItem";
import {
  OrderInforReceive,
  OrderPaymentFillInfo,
  TotalPaymentAndOrder,
} from "@components/order";
import { DividerSpace } from "@components/divider";
import { CreateOrder } from "@services/OrderServices";
import { FetchState } from "@utils/type/FetchState";
import { UserFetch } from "@utils/type/User";
import { Product } from "@utils/type/Product";
import { ShipPayment, TYPESPAYMENT } from "@utils/type/Payment";
import { STATUS_ORDER } from "@utils/type/StatusOrder";
import { PRODUCT_ORDER, getNativeStorage } from "@utils/helper";


interface typeInputOrderInfoReceive {
  numberphone: string | null;
  note: string | null;
  address: string | null;
}

const INITINPUTORDERINFORECEIVE: typeInputOrderInfoReceive = {
  numberphone: null,
  note: null,
  address: null,
};

const OrderDetail: React.FC<{ currentUser: UserFetch }> = ({ currentUser }) => {
  const location = useLocation();
  const produc = location.state.product;
  const navigate = useNavigate();
  const [productItem, setProductItem] = useState<Product | null>(produc);
  const [inputOrderInfoReceive, setInputOrderInfoReceive] =
    useState<typeInputOrderInfoReceive>(INITINPUTORDERINFORECEIVE);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [paymentInfor, setPaymentInfor] = useState<ShipPayment>({
    typePayment: TYPESPAYMENT.CASH,
    shipPrices: 20000,
  });
  const [resCreateOrder, fetchStatusOrder, postOrder] = CreateOrder();

 
  useEffect(() => {
    productItem && setTotalPayment(productItem.price + paymentInfor.shipPrices);
  }, [productItem, paymentInfor.shipPrices]);

  const handleChangeInputOrderInfoReceive = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;

    setInputOrderInfoReceive((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (fetchStatusOrder == FetchState.SUCCESS) handleOrderProduct();
  }, [fetchStatusOrder]);

  const handleOrderProduct = () => { 
    if (resCreateOrder?.id) navigate(`/status-order/${resCreateOrder.id}`);
  };

  const handleCreateOrder = () => {
    if (productItem) {
      const orderNeedPost = {
        user_id: currentUser.id,
        product_id: productItem.id,
        shop_id: productItem.shop_id,
        amount: 1,
        payment_method: TYPESPAYMENT.CASH,
        address: inputOrderInfoReceive.address as string,
        note: inputOrderInfoReceive.note as string,
        status: STATUS_ORDER.PROCESSING,
        name: currentUser.name,
        phone: "8324235242",
      };
      postOrder(orderNeedPost);
    }
  };

  return (
    <>
      {productItem && (
        <Page className="bg-white flex flex-col justify-between">
          <ProductShortageItem product={productItem as Product} />
          <DividerSpace />
          <OrderInforReceive
            editView
            onChange={handleChangeInputOrderInfoReceive}
          /> 
          <DividerSpace />
          <OrderPaymentFillInfo editView paymentInfor={paymentInfor} />
          <TotalPaymentAndOrder
            onClick={handleCreateOrder}
            totalPayment={totalPayment}
          />
        </Page>
      )}
    </>
  );
};

export default OrderDetail;
