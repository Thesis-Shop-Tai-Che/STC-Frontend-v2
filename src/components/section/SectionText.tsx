import React, { PropsWithChildren } from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

export interface SetionProps extends BoxProps {
  title: string;
  padding?: "all" | "none" | "title-only";
  icon?: any;
}
const SectionText: FC<PropsWithChildren<SetionProps>> = ({
  children,
  title,
  padding,
  icon,
  ...props
}) => {
  return (
    <Box
      className={`bg-background ${padding === "all" ? "p-4 space-y-4" : ""} ${
        padding === "title-only" ? "py-4 space-y-4" : ""
      }`}
      {...props}
    >
      <div className="flex justify-between ">
        <Text.Title className={`${padding === "title-only" ? "px-4" : ""}`}>
          {title}
        </Text.Title>
        <div className="px-4">{icon}</div>
      </div>

      {children}
    </Box>
  );
};

export default SectionText;
