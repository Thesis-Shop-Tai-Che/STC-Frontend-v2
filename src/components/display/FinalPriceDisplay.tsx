import React, { FC, useMemo } from "react";
import { SelectedOptions } from "@utils/type/Cart";
import { Product } from "@utils/type/Product";
import { calcFinalPrice } from "@utils/helper/calcFinalPrice";
import { PriceDisplay } from "./PriceDisplay";

export const FinalPriceDisplay: FC<{
  product: Product;
  options?: SelectedOptions;
}> = ({ product, options }) => {
  const finalPrice = useMemo(
    () => calcFinalPrice(product, options),
    [product, options],
  );
  return <PriceDisplay>{finalPrice}</PriceDisplay>;
};
