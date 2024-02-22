import React from "react";
import { primaryColor } from "@utils/helper";

const ButtonSecondary: React.FC<{
  title: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDisable?: boolean;
  isGray?: boolean;
  onClick?: () => void;
}> = ({
  title,
  isPrimary,
  isSecondary,
  isDisable,
  isGray,
  onClick,
  ...props
}) => {
  const hexToRgb = (hex) => {
    const normalizedHex = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1);
    const rgbValues = normalizedHex.match(/.{2}/g);

    if (!rgbValues) {
      return [0, 0, 0];
    }
    return rgbValues.map((x) => parseInt(x, 16));
  };

  const primaryColorHexToRgb = hexToRgb(primaryColor);
  const backgroundColorOpacity = `rgba(${primaryColorHexToRgb[0]}, ${primaryColorHexToRgb[1]}, ${primaryColorHexToRgb[2]}, 0.3)`;

  let style;
  if (isPrimary) {
    style = { backgroundColor: primaryColor, color: "white" };
  } else if (isDisable) {
    style = { backgroundColor: "#EAEBED", color: "black" };
  } else {
    style = { backgroundColor: backgroundColorOpacity, color: primaryColor };
  }
  return (
    <button
      {...props}
      disabled={isDisable}
      onClick={onClick}
      className="font-semibold py-3 px-4 rounded-full w-full"
      style={style}
    >
      {title}
    </button>
  );
};

export default ButtonSecondary;
