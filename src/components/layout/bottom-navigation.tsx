import React, { FC, useMemo, useState } from "react";
import { BottomNavigation, Icon } from "zmp-ui";
import { useLocation, useNavigate } from "react-router";
import { MenuItem } from "@utils/type";
import { primaryColor } from "@utils/helper/config";
import { useVirtualKeyboardVisible } from "@utils/hooks";

const tabs: Record<string, MenuItem> = {
  "/": {
    label: "Trang chủ",
    icon: <Icon icon="zi-home" />,
    activeIcon: <Icon icon="zi-home" style={{ fontWeight: "bold" }} />,
  },
  "/profile": {
    label: "Cá nhân",
    icon: <Icon icon="zi-user" />,
    activeIcon: <Icon icon="zi-user" style={{ fontWeight: "bold" }} />,
  },
};

export type TabKeys = keyof typeof tabs;
export const NO_BOTTOM_NAVIGATION_PAGES = [
  "/product-detail/",
  "/search",
  "/order",
  "/status-order",
  "/confirm-order",
  "/validity-order",
  "/shop-detail"
];

const BottomNavigationComponent: FC = () => {
  const [activeTab, setActiveTab] = useState("/");
  const keyboardVisible = useVirtualKeyboardVisible();
  const navigate = useNavigate();
  const location = useLocation();
  const notBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.some((page) =>
      location.pathname.startsWith(page)
    );
  }, [location]);

  if (notBottomNav || keyboardVisible) {
    return <></>;
  }
  return (
    <BottomNavigation
      fixed
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
    >
      {Object.keys(tabs).map((path: TabKeys) => (
        <BottomNavigation.Item
          key={path}
          label={tabs[path].label}
          icon={tabs[path].icon}
          activeIcon={tabs[path].activeIcon}
          onClick={() => navigate(path)}
          style={{ color: activeTab === path ? primaryColor : "" }}
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomNavigationComponent;
