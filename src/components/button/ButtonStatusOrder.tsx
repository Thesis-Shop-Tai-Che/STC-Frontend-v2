import React, { FC, useEffect } from "react";
import { Icon } from "zmp-ui";
import Button from "zmp-ui/button"; 
import { primaryColor } from "@utils/helper";
import { FetchState, } from "@utils/type/FetchState";
import { STATUS_ORDER } from "@utils/type/StatusOrder";
import { useNavigate } from "react-router-dom";
import getColorOpacity from "@utils/helper/getColorOpacity"; 
import { updateStatusOrder } from "@services/OrderServices";

const ButtonStatusOrderProcessing: FC<{ orderId: number, setChangeStatusCallback:()=>void }> = ({ orderId, setChangeStatusCallback })  => {
  const colorOpacity = (color, opacity) => {
    return getColorOpacity(color, opacity);
  };
  const [updateStatus, fetchStatusOrder] = updateStatusOrder();

  useEffect(() => {
    if(fetchStatusOrder == FetchState.SUCCESS)
    {
      setChangeStatusCallback() 
    }
  },[fetchStatusOrder])
  return (
    <>
      <Button
        className="w-2/5 rounded-full"
        style={{ backgroundColor: colorOpacity("#FF0900", 0.2), color: "red" }}
        onClick={()=>updateStatus({orderId, newStatus: STATUS_ORDER.CANCELED} )}
      >
        <Icon icon="zi-delete" /> {"  "}
        Hủy đơn
      </Button>
      <Button
        className="w-2/5 rounded-full"
        style={{
          backgroundColor: colorOpacity(primaryColor, 0.3),
          color: primaryColor,
        }}
      
      >
        <Icon icon="zi-chat" /> {"  "}
        Hỗ trợ ngay
      </Button>
    </>
  );
};

const ButtonStatusOrderCanceled: FC<{ productId: number, setChangeStatusCallback: ()=>void }> = ({ productId, setChangeStatusCallback }) => {
  const colorOpacity = (color, opacity) => {
    return getColorOpacity(color, opacity);
  };
  const navigate = useNavigate();
  return (
    <>
      <Button
        className="w-4/5 rounded-full"
        style={{
          backgroundColor: colorOpacity(primaryColor, 0.3),
          color: primaryColor,
        }}
        onClick={()=>{navigate(`/product-detail/${productId}`)}}
      >
        Mua lại sản phẩm{" "}
      </Button>
    </>
  );
};
const ButtonStatusOrderShipping: FC = () => {
  const colorOpacity = (color, opacity) => {
    return getColorOpacity(color, opacity);
  };
  return (
    <>
      <Button
        className="w-4/5 rounded-full"
        style={{
          backgroundColor: colorOpacity(primaryColor, 0.3),
          color: primaryColor,
        }}
      >
        <Icon icon="zi-chat" /> {"  "}
        Hỗ trợ ngay
      </Button>
    </>
  );
};

const ButtonStatusOrderReceived: FC = () => {
  const colorOpacity = (color, opacity) => {
    return getColorOpacity(color, opacity);
  };
  return (
    <>
      <Button
        className="w-4/5 rounded-full"
        style={{
          backgroundColor: colorOpacity(primaryColor, 0.3),
          color: primaryColor,
        }}
      >
        <Icon icon="zi-recall" /> Đánh giá sản phẩm
      </Button>
    </>
  );
};

const ButtonStatusOrder: FC<{
  currentStatusOrder: string | null;
  orderId: number;
  productId: number;
  setChangeStatusCallback : ()=>void
}> = ({ currentStatusOrder, orderId, setChangeStatusCallback, productId }) => {
  const ButtonStatusOrderItem: FC = () => {
    if (!currentStatusOrder) {
      return <></>;
    }
    if (currentStatusOrder == STATUS_ORDER.PROCESSING)
      return <ButtonStatusOrderProcessing  orderId={orderId} setChangeStatusCallback={setChangeStatusCallback}/>;

    if (currentStatusOrder == STATUS_ORDER.DELIVERING)
      return <ButtonStatusOrderShipping />;

    if (currentStatusOrder == STATUS_ORDER.SUCCESS)
      return <ButtonStatusOrderReceived />;

    if (currentStatusOrder == STATUS_ORDER.CANCELED)
      return <ButtonStatusOrderCanceled productId={productId} setChangeStatusCallback={setChangeStatusCallback}/>;

    return <></>;
  };
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white flex justify-around items-center">
      <ButtonStatusOrderItem />
    </div>
  );
};

export default ButtonStatusOrder;
