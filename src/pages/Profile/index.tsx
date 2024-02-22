import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Page, List, Icon, Avatar, Box, Text } from "zmp-ui";
import { BusinessSvg, PackageSvg } from "@assets/svg";
import { DividerSpace } from "@components/divider";
import getDataToStorage from "@store/getStorage";
import { getCurrentUser } from "@store/action";
import { UserFetch } from "@utils/type/User";
import { primaryColor } from "@utils/helper";
import UserInfo from "@components/common/UserInfo";

const FORM_REGISTRY_BECOME_SELLER =
  "https://docs.google.com/forms/d/e/1FAIpQLSdvVTuVI65xencwFUtT-OquDJSq0UjSTe6vS0gQn8AJIoFCVQ/viewform";

const Profile: React.FC<{ currentUser: UserFetch }> = ({ currentUser }) => {
  const navigate = useNavigate();
  const profileTreeList = [
    {
      title: "Lịch sử đơn hàng",
      icon: <PackageSvg />,
      link: "/validity-order",
    },
    {
      title: "Đăng kí bán hàng",
      icon: <BusinessSvg />,
      href: FORM_REGISTRY_BECOME_SELLER,
      description: "Điền thông tin qua Google Form",
    },
  ];


  const fetchData = async () => {
    try {
      const userData = await getDataToStorage(getCurrentUser());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white">
      <UserInfo
        flexDirectionProp='column'
        alignItemsProp='center'
        avatarSource={currentUser.avatar}
        avatarSize={64}
        userName={currentUser.name}
        userNameSize='large'
        userInfoContentStyle={{ marginTop: 4 }}
        userInfoType='buyer-profile'
      />
      <DividerSpace />
      <List
        noSpacing
        divider={true}
        style={{ backgroundColor: 'white' }}
      >
        <List.Item
          title="Lịch sử đơn hàng"
          prefix={<PackageSvg />}
          suffix={<Icon icon="zi-chevron-right" />}
          className="tab-me__action__order-history"
          onClick={() => {
            navigate(`/validity-order/buyer`)
          }}
        />
        <List.Item
          title={currentUser.is_seller ? "Shop của tôi" : "Đăng kí bán hàng"}
          prefix={<BusinessSvg />}
          suffix={<Icon icon="zi-chevron-right" />}
          subTitle={currentUser.is_seller ? "" : "Điền thông tin qua Google Form"}
          className="tab-me__action__register-seller"
          onClick={() => {
            if (currentUser.is_seller) {
              navigate(`/shop-detail/${currentUser.id}`)
            } else {
              window.open(FORM_REGISTRY_BECOME_SELLER, '_blank');
            }
          }}
        />
      </List>
      {/* {currentUser.is_seller && (
        <div className=" flex justify-center mt-5">
          <button
            className="bg-transparent font-semibold hover:bg-gray-200 py-2 px-4 border rounded w-fit"
            style={{ color: primaryColor, borderColor: primaryColor }}
            onClick={() => {
              navigate(`/shop-detail/${currentUser.id}`);
            }}
          >
            Xem shop
          </button>
        </div>
      )}
      <DividerSpace />

      <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
        <div className="divide-y w-full">
          {profileTreeList &&
            profileTreeList.map((profileTreeItem, index) => {
              return (
                <div
                  className="user-body flex mb-4 sm:mb-0 sm:mr-4 justify-between p-3"
                  key={index}
                >
                  <div className="flex gap-5">
                    {profileTreeItem.icon}
                    <div className="flex flex-col items-start">
                      {profileTreeItem.href ? (
                        <a
                          target="_blank"
                          href={profileTreeItem.href}
                          className="title font-medium no-underline text-black"
                        >
                          {profileTreeItem.title}
                        </a>
                      ) : (
                        <Link
                          to={profileTreeItem.link ? profileTreeItem.link : ""}
                          className="title font-medium no-underline text-black"
                        >
                          {profileTreeItem.title}
                        </Link>
                      )}
                      {profileTreeItem.description && (
                        <p className="text-sm text-gray-500">
                          {profileTreeItem.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="skills flex flex-col">
                    <Icon icon="zi-chevron-right" />
                  </div>
                </div>
              );
            })}
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
