import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Page } from "zmp-ui";
import { DividerSpace } from "@components/divider";
import ProductShortageItem from "@components/product/ProductShortageItem";
import {
  OrderInforReceive,
  StatusHeader,
  ButtonStatusOrder,
  OrderPaymentFillInfo,
} from "@components/order";
import { GetOrderByOrderId } from "@services/OrderServices";
import { Product } from "@utils/type/Product";
import { FetchState } from "@utils/type/FetchState";
import { OrderStatusFetch } from "@utils/type/Order";
import { UserFetch } from "@utils/type/User";
import { ShipPayment } from "@utils/type/Payment";

const StatusOrder: React.FC<{ currentUser: UserFetch }> = ({ currentUser }) => {
  const { idOrder } = useParams();
  const [order, fetchStateOrder, getResGetOrder] = GetOrderByOrderId();
  const [orderItem, setOrderItem] = useState<OrderStatusFetch | null>(null);

  const [needChangeStatus, setNeedChangeStatus] = useState(false);
  const setChangeStatusCallback = () => {
    setNeedChangeStatus(!needChangeStatus);
  };
  useEffect(() => {
    getResGetOrder(idOrder as string);
  }, [needChangeStatus]);

  useEffect(() => {
    if (fetchStateOrder == FetchState.SUCCESS) {
      setOrderItem(order as OrderStatusFetch);
    }
  }, [fetchStateOrder]); 
  return (
    <>
      {orderItem && (
        <Page className="bg-white">
          <StatusHeader currentStatusOrder={orderItem.status} />
 
          <ProductShortageItem
            product={
              {
                id: orderItem.id,
                title: orderItem.Product.title,
                price: orderItem.Product.price,
                shop_id: orderItem.shop_id,
                created_at: "2023-11-23T15:31:37.560Z",
                updated_at: null,
                ProductMedia: orderItem.Product.ProductMedia,
              } as Product
            }
          />
          <DividerSpace />
          <OrderInforReceive orderItem={orderItem} />
          <DividerSpace />
          <OrderPaymentFillInfo
            paymentInfor={
              {
                typePayment: orderItem.payment_method,
                shipPrices: orderItem.ship_fee,
              } as ShipPayment
            }
          />
          <ButtonStatusOrder
            currentStatusOrder={orderItem.status}
            orderId={orderItem.id}
            productId={orderItem.product_id}
            setChangeStatusCallback={setChangeStatusCallback}
          />
        </Page>
      )}
    </>
  );
};

export default StatusOrder;
