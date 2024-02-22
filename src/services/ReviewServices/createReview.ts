import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { Review } from "@utils/type/Review";

const CreateReview = () => {
  const [fetchStatus, setFetchStatus] = useState<FetchState>(
    FetchState.DEFAULT,
  );
  const postReview = async (review: Review) => {
    try {
      setFetchStatus(FetchState.LOADING);
 
      const res = await axios.post(
        `${import.meta.env.VITE_API_REVIEW}`.replace(" ", ""),
        review
      );
      console.log(res.data)
      setFetchStatus(FetchState.SUCCESS);
    } catch (error) {
      setFetchStatus(FetchState.ERROR);
    }
  };
  return [fetchStatus, postReview] as const;
};


export default CreateReview;