const getColorOpacity = (hexColor: string, opacity: string): string => {
  const hexToRgb = (hex) => {
    const normalizedHex = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b,
      )
      .substring(1);
    const rgbValues = normalizedHex.match(/.{2}/g);

    if (!rgbValues) {
      // Handle invalid hex input
      return [0, 0, 0];
    }
    return rgbValues.map((x) => parseInt(x, 16));
  };

  const primaryColorHexToRgb = hexToRgb(hexColor);
  const backgroundColorOpacity = `rgba(${primaryColorHexToRgb[0]}, ${primaryColorHexToRgb[1]}, ${primaryColorHexToRgb[2]}, ${opacity})`;
  return backgroundColorOpacity;
};

export default getColorOpacity;
