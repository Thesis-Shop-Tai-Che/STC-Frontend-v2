import React from "react";
import { Input, Box } from "zmp-ui";

const TmnSearch: React.FC = () => {
  return (
    <Box p={4} className="bg-white">
      <Input.Search
        label="Label"
        helperText="Helper text"
        placeholder="Tên sản phẩm..."
        clearable
        onSearch={(value) => {
          console.log(value);
        }}
      />
    </Box>
  );
};

export default TmnSearch;
