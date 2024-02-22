import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { OrderStatusFetch } from "@utils/type/Order";

const GetOrderByOrderId = () => {
    const [fetchStateOrder, setFetchStateOrder] = useState<FetchState>(
        FetchState.DEFAULT
    );
    const [order, setOrder] = useState<OrderStatusFetch>();
    const getResGetOrder = async (orderId: string) => {
        try {
            setFetchStateOrder(FetchState.LOADING);
             const res = await axios.get(
                `${import.meta.env.VITE_API_ORDER}/${orderId}`,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            const resData = res.data.data as OrderStatusFetch;
            setOrder(resData);
            setFetchStateOrder(FetchState.SUCCESS);
        } catch (error) {
            console.log(error);
            setFetchStateOrder(FetchState.ERROR);
        }
    };
    return [order, fetchStateOrder, getResGetOrder] as const;
};

export default GetOrderByOrderId;