import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetOrderByUserId } from "@services/OrderServices";
import ProductItem from "./productItem";

const ViewStatusOrder: React.FC<{ userId: number }> = ({ userId }) => {
  const [order, fetchStateOrder, getResGetOrder] = GetOrderByUserId();

  useEffect(() => {
    getResGetOrder(userId);
  }, []);
  const navigate = useNavigate(); 
  return (
    <>
      {order &&
        order.map((orderItem, index) => {
          const onAction = () => {
            navigate(`/status-order/${orderItem.id}`);
          };
          return (
            <>
              <ProductItem key={index}
                image={orderItem?.Product.ProductMedia[0].url}
                name={orderItem.Product.title}
                price={orderItem.Product.price}
                status={orderItem.status}
                onActon={onAction}
              />
            </>
          );
        })}
    </>
  );
};

export default ViewStatusOrder;
