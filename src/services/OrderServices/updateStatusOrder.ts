import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";

const updateStatusOrder = () => {
    const [fetchStatusOrder, setFetchStatusOrder] = useState<FetchState>(
        FetchState.DEFAULT
    );

    const updateStatus = async ({
        orderId,
        newStatus,
    }: {
        orderId: number;
        newStatus: string;
    }) => {
        try {
            setFetchStatusOrder(FetchState.LOADING);

            const url = `${import.meta.env.VITE_API_ORDER}/${orderId}`.replace(
                " ",
                ""
            );
            const res = await axios.patch(url, {
                newStatus,
            }); 
            setFetchStatusOrder(FetchState.SUCCESS);
        } catch (error) {
            console.log(error);
            setFetchStatusOrder(FetchState.ERROR);
        }
    };
    return [updateStatus, fetchStatusOrder] as const;
};

export default updateStatusOrder;