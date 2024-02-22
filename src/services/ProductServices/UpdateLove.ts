import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";

const UpdateLove = () => {
  const [fetchStatus, setFetchStatus] = useState<FetchState>(
    FetchState.DEFAULT,
  );
  const updateStatusLove = async (user_id: number, product_id: number) => {
    try {
      setFetchStatus(FetchState.LOADING);

      const res = await axios.post(
        `${import.meta.env.VITE_API_LOVE}`.replace(" ", ""),
        { user_id, product_id }
      );
      console.log(res.data)
      setFetchStatus(FetchState.SUCCESS);
    } catch (error) {
      setFetchStatus(FetchState.ERROR);
    }
  };
  return [fetchStatus, updateStatusLove] as const;
};


export default UpdateLove;