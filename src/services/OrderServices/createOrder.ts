import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { Order, OrderStatusFetch } from "@utils/type/Order";

const CreateOrder = () => {
  const [fetchStatusOrder, setFetchStatusOrder] = useState<FetchState>(
    FetchState.DEFAULT
  );
  const [resCreateOrder, setResCreateOrder] = useState<Order | null>(null);

  const postOrder = async (order: any) => {
    try {
      setFetchStatusOrder(FetchState.LOADING);
      const abc = order; 
      const url = `${import.meta.env.VITE_API_ORDER}`.replace(" ", "");
       const res = await axios.post(url, order);
       setFetchStatusOrder(FetchState.SUCCESS);
      setResCreateOrder(res.data.order);
    } catch (error) {
      console.log(error);
      setFetchStatusOrder(FetchState.ERROR);
    }
  };
  return [resCreateOrder, fetchStatusOrder, postOrder] as const;
};

export default CreateOrder;