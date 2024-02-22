import { setStorage, } from "zmp-sdk/apis";
import { SetLocalStorageParam } from "@utils/type";


const setDataToStorage = async ({ type, data }: SetLocalStorageParam) => {
    try { 
        const { errorKeys } = await setStorage({
            data: {
                [type]: data,
            },
        });
    } catch (error) {
        console.log(error);
    }
};


export default setDataToStorage;
