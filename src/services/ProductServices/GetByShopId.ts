import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { Product, } from "@utils/type/Product";
import axios from "axios";

const GetProductByShopId = () => {
  const [fetchState, setFetchState] = useState<FetchState>(FetchState.DEFAULT);
  const [products, setProducts] = useState<Product[]>();

  const getRes = async (shopId: string) => {
    try {
      setFetchState(FetchState.LOADING);
      const response = await axios.get(
        `${import.meta.env.VITE_API_SHOP}?page=0&pageSize=10&shop_id=${shopId}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      const resData = response.data.data as Product[];

      setProducts(resData);
      setFetchState(FetchState.SUCCESS);
    } catch (error) {
      console.log(error);
      setFetchState(FetchState.ERROR);
    }
  };

  return [products, fetchState, getRes] as const;
};

export default GetProductByShopId;