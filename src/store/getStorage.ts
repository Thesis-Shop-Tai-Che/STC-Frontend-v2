import { FetchState } from "@utils/type/FetchState";
import { useState } from "react";
import { getStorage } from "zmp-sdk/apis";

interface SetLocalStorageParams { 
  type: string; 
}

const getDataToStorage = async ({ type }: SetLocalStorageParams) => {

  try {
    const data = await getStorage({
      keys: [type]
    }); 
    return data[type];
  } catch (error) {
    console.log(error);
  }

};

export default getDataToStorage;
