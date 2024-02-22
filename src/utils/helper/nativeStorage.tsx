import { setStorage, getStorage } from "zmp-sdk/apis";

const PRODUCT_ORDER = "PRODUCT_ORDER";
const getKey = (nameStore: string): string | null => {
  switch (nameStore) {
    case PRODUCT_ORDER:
      return "product_order";
    default:
      return null;
  }
};

const setNativeStorage = (nameStore: string, dataStore: any): boolean => {
  const key = getKey(nameStore);
  if (key) {
    setStorage({
      data: {
        [key]: dataStore,
      },
      success: (data) => {
        const { errorKeys } = data;
        return true;
      },
      fail: (error) => {
        return false;
      },
    });
  }
  return false;
};

const getNativeStorage = (
  nameStore: string,
): Promise<{ data: any | null; error: any | null }> => {
  const key = getKey(nameStore);

  return new Promise((resolve) => {
    if (key) {
      getStorage({
        keys: [key],
        success: (data) => {
          resolve({ data: data[key], error: null });
        },
        fail: (error) => {
          resolve({ data: null, error });
        },
      });
    } else {
      // If key is null, resolve with null data and no error
      resolve({ data: null, error: null });
    }
  });
};

export { setNativeStorage, getNativeStorage, PRODUCT_ORDER };
