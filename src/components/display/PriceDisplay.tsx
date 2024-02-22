import React, { FC } from "react";
import { getConfig } from "@utils/helper/config";

export const PriceDisplay: FC<{ children: number }> = ({ children }) => {
  const symbol = getConfig((config) => config.template.currencySymbol);
  if (getConfig((config) => config.template.prefixCurrencySymbol)) {
    return (
      <>
        {symbol}
        {children && children.toLocaleString()}
      </>
    );
  } else {
    return (
      <>
        {children && children.toLocaleString()}
        {symbol}
      </>
    );
  }
};
