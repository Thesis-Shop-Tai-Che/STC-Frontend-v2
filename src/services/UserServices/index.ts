import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { UserZalo, UserFetch } from "@utils/type/User";

import setDataToStorage from "@store/setStorage";
import { setCurrentUser } from "@store/action";
export const CreateUser = () => {
  const [fetchStatusUser, setFetchStatusUser] = useState<FetchState>(
    FetchState.DEFAULT
  );
  const [resCreateUser, setResCreateUser] = useState<UserFetch | null>(null);

  const postUser = async (user: UserZalo) => {
    try {
      setFetchStatusUser(FetchState.LOADING);

      const url = `${import.meta.env.VITE_API_USER_CREATION}`.replace(" ", "");
 
      const res = await axios.post(url, user,); 
      setFetchStatusUser(FetchState.SUCCESS);
      setResCreateUser(res.data);
      setDataToStorage(setCurrentUser(res.data))
    } catch (error: any) {
      console.error('Axios error:', error.toJSON());
      setFetchStatusUser(FetchState.ERROR);
    }
  };
  return [resCreateUser, fetchStatusUser, postUser] as const;
};