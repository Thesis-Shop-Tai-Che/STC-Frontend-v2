import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { ProductList } from "@utils/type";
import axios from "axios";

 const GetProductsPopular = () => {
  const [fetchState, setFetchState] = useState<FetchState>(FetchState.DEFAULT);
  const [products, setProducts] = useState<ProductList>();

  const getRes = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const response = await axios.get(
        `${import.meta.env.VITE_API_SUGGESTION}?page=0&pageSize=10`,
        { 
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      const resData = response.data as ProductList;
      console.log(response.data)
      setProducts(resData); 
      setFetchState(FetchState.SUCCESS);
    } catch (error) { 
      setFetchState(FetchState.ERROR);
    }
  };

  return [products, fetchState, getRes] as const;
};


export default GetProductsPopular;