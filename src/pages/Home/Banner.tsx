import React from "react";
import BannerImage from "@assets/images/banner.png";
import { Box } from "zmp-ui";

const Banner: React.FunctionComponent = () => {
  return (
    <Box className="bg-amber-700 m-0">
      <img className="w-screen h-auto" src={BannerImage} alt="Banner Image" />
    </Box>
  );
};

export default Banner;
