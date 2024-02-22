import React, { PropsWithChildren, ChangeEvent, FC } from "react";
import { Box, Text } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

interface SetionProps {
  id?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputNoOutline: FC<SetionProps> = ({
  id,
  placeholder,
  type,
  onChange,
  ...props
}) => {
  return (
    <input
      id={id}
      type={type}
      onChange={onChange}
      className="w-full text-sm focus:border-b-2 mt-2  outline-none opacity-70 "
      placeholder={placeholder}
      {...props}
    />
  );
};

export default InputNoOutline;
