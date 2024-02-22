import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, ZMPRouter } from "zmp-ui";
import BottomNavigationComponent from "../components/layout/bottom-navigation";
import {
  HomePage,
  OrderDetail,
  DetailProduct,
  StatusOrder,
  Profile,
  ValidityOrder,
  ShopDetail,
} from "../pages";
import ComfirmOrder from "@pages/ValidityOrder/comfirmOrder";
import useAuth from "../hooks/useAuth";
import useGetAppInfo from "../hooks/useGetAppInfo";
import { CreateUser } from "@services/UserServices";

const MainRoute = () => {
  const { login } = useAuth();
  const { getAppInfo } = useGetAppInfo();
  const [resCreateUser, fetchStatusUser, postUser] = CreateUser();

  const actionGetOrCreateUser = async (user) => {
    await postUser({
      name: user.name,
      avatar: user.avatar,
      zalo_id: user.id,
    });
  };
  useEffect(() => {
    login(actionGetOrCreateUser);
  }, []);

  getAppInfo();

  return (
    <>
      {resCreateUser ? (
        <ZMPRouter>
          <Box className="flex-1 flex flex-col overflow-hidden">
            <Routes>
              <Route
                path="/"
                element={<HomePage currentUser={resCreateUser} />}
              />
              <Route
                path="/product-detail/:idProduct"
                element={<DetailProduct currentUser={resCreateUser} />}
              />
              <Route
                path="/order"
                element={<OrderDetail currentUser={resCreateUser} />}
              />
              <Route
                path="/status-order/:idOrder"
                element={<StatusOrder currentUser={resCreateUser} />}
              />
              <Route
                path="/profile"
                element={<Profile currentUser={resCreateUser} />}
              />
              <Route
                path="/validity-order/:userState"
                element={<ValidityOrder currentUser={resCreateUser} />}
              />
              <Route
                path="/confirm-order/:idOrder"
                element={<ComfirmOrder />}
              />
              <Route
                path="/shop-detail/:idShop"
                element={<ShopDetail currentUser={resCreateUser} />}
              />
            </Routes>
            <BottomNavigationComponent />
          </Box>
        </ZMPRouter>
      ) : (
        <> </>
      )}
    </>
  );
};

export default MainRoute;
