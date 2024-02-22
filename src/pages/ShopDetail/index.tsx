import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Text, Page, Box, Icon } from "zmp-ui";
import { DividerSpace } from "@components/common";
import { SectionText } from "@components/section";
import { GetProductByShopId } from "@services/ProductServices";
import { FetchState } from "@utils/type/FetchState";
import { UserFetch } from "@utils/type/User";
import EmptyProduct from "./emptyProduct";
import ProductShopItem from "./productShopItem";
import { Product } from "@utils/type";
import SellerOrderEntry from "@components/seller/SellerOrderEntry";
import UserInfo from "@components/common/UserInfo";

const FORM_UP_PRODUCT =
  "https://docs.google.com/forms/d/e/1FAIpQLSfbZOmiULkqBA77rvzsXlRUxs3yiP3M4iVDYjBs-eC3D2fkSQ/viewform";

const ShopDetail: React.FC<{ currentUser: UserFetch }> = ({ currentUser }) => {
  const [products, fetchState, getRes] = GetProductByShopId();
  const { idShop } = useParams();
  let orderCount = 3;

  useEffect(() => {
    if (fetchState === FetchState.DEFAULT && idShop) {
      getRes(idShop);
    }
  }, []);


  const calculateSumReview = (products: any[]): number => {
    if (!products || !Array.isArray(products)) {
      return 0;
    }

    const sumOfReviews = products.reduce((total, product) => {
      if (product._count && typeof product._count.Review === "number") {
        total += product._count.Review;
      }

      return total;
    }, 0);

    return sumOfReviews;
  };


  const countProcessingOrders = (products: any[]): number => {
    let sumOfOrder = products.reduce((accumulator, item) => {
      // Filter the order array for items with status "process" and count them
      const processOrders = item.Order.filter(order => order.status === "PROCESSING").length;
      // Add the count to the accumulator
      return accumulator + processOrders;
    }, 0);
    console.log('sumOfOrder', sumOfOrder)
    return sumOfOrder;
  }

  console.log('products', products);

  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      {fetchState == FetchState.SUCCESS && (
        <div
          className="flex-1 overflow-auto pb-20"
        >
          <UserInfo
            flexDirectionProp='row'
            alignItemsProp='center'
            userInfoStyle={{
              backgroundColor: 'white',
              padding: '0px 12px 0px 12px', // Top & Bottom: 16px, Left & Right: 12px
            }}
            avatarSource={
              (products &&
                products[0].Shop?.ShopInfo[0]?.avatar &&
                products[0].Shop?.ShopInfo[0].avatar) ||
              "https://media1.nguoiduatin.vn/media/dong-xuan-thuan/2023/07/20/ai.jpg"
            }
            avatarSize={48}
            userInfoContentStyle={{
              marginLeft: 8
            }}
            userName={products &&
              products[0].Shop?.ShopInfo?.[0]?.name &&
              products[0].Shop?.ShopInfo?.[0]?.name}
            userNameSize="large"
            userInfoType='seller-profile'
            subTitle={<Text>
              {!products || products.length == 0 ? 0 : products.length} sản
              phẩm, {products ? calculateSumReview(products) : 0} đánh giá
            </Text>}
            subTitleStyle={{
              color: '#767A7F'
            }}
          />

          <DividerSpace />

          <Box
            flex
            flexDirection='column'
            style={{
              backgroundColor: 'white',
              marginTop: 4,
              padding: '0px 12px 0px 12px', // Top & Bottom: 16px, Left & Right: 12px
            }}
          >
            <Text size='xLarge' bold>
              Đơn hàng của shop
            </Text>
            <Box
              flexDirection='row'
              alignItems='center'
              style={{ width: '100%', marginTop: 12 }} // Make the parent Box take full width of the screen
            >
              <SellerOrderEntry
                statusContent='Chờ xác nhận'
                statusCount={products ? countProcessingOrders(products) : 0}
                routePath='validity-order'
                routeParam='seller'
              />
              <SellerOrderEntry
                statusContent='Đánh giá'
                statusCount={products ? calculateSumReview(products) : 0}
              />
            </Box>

          </Box>
          <DividerSpace />
          <SectionText
            title="Danh sách sản phẩm"
            padding="title-only"
            icon={
              currentUser.is_seller &&
                currentUser.id == (idShop ? parseInt(idShop) : undefined) ? (
                <a href={FORM_UP_PRODUCT} target="_blank">
                  <Icon icon="zi-add-story" />
                </a>
              ) : (
                <></>
              )
            }
          >
            {!products || products.length == 0 ? (
              <EmptyProduct
                currentUser={currentUser}
                idShop={idShop as string}
              />
            ) : (
              <>
                {products.map((productItem, index) => {
                  return (
                    <ProductShopItem
                      product={productItem as Product}
                      key={index}
                    />
                  );
                })}
              </>
            )}
          </SectionText>
        </div>
      )}
    </Page>
  );
};

export default ShopDetail;
