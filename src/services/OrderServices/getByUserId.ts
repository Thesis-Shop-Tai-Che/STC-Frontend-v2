import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { OrderStatusFetch } from "@utils/type/Order";

 const GetOrderByUserId = () => {
  const [fetchStateOrder, setFetchStateOrder] = useState<FetchState>(
    FetchState.DEFAULT
  );
  const [order, setOrder] = useState<OrderStatusFetch[]>();
  const getResGetOrder = async (userId: number) => {
    try {
      setFetchStateOrder(FetchState.LOADING);
       const res = await axios.get(
        `${import.meta.env.VITE_API_ORDER}?page=0&pageSize=10&userId=${userId}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const resData = res.data.data as OrderStatusFetch[]; 
      setOrder(resData);
      setFetchStateOrder(FetchState.SUCCESS);
    } catch (error) {
      console.log(error);
      setFetchStateOrder(FetchState.ERROR);
    }
  };
  return [order, fetchStateOrder, getResGetOrder] as const;
};

export default GetOrderByUserId;
