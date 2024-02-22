import React, { useState } from "react";
import { primaryColor } from "@utils/helper/config";
import { Icon } from "zmp-ui";

const ProductDetailDescription: React.FC<{ description?: string }> = ({
  description,
}) => {
  const [readMoreDescription, setReadMoreDescription] = useState(false);

  return (
    <>
      <div className="px-4">
        {description && (
          <div
            className={`text-sm text-gray-500 ${
              !readMoreDescription && `max-line-2`
            } `}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
      <div
        style={{ color: primaryColor }}
        className="text-center border-t pt-4 cursor-pointer font-medium"
        onClick={() => setReadMoreDescription(!readMoreDescription)}
      >
        {readMoreDescription ? (
          <>
            Thu gọn <Icon icon="zi-chevron-up" />
          </>
        ) : (
          <>
            Xem thêm
            <Icon icon="zi-chevron-down" />
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetailDescription;
