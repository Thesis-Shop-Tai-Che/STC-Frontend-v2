import React, { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Page, useSnackbar } from "zmp-ui";
import { SectionText } from "@components/common";
import { DividerSpace } from "@components/divider";
import { ButtonOrder } from "@components/button";
import {
  ProductComment,
  ProductDetailDescription,
  ProductDetailShop,
  ProductDetailHead,
} from "@components/product";
import { GetProductById } from "@services/ProductServices";
import { GetReviewsByProductId } from "@services/ReviewServices";
import { FetchState } from "@utils/type/FetchState";
import { Product } from "@utils/type/Product";
import { Review } from "@utils/type/Review";
import { UserFetch } from "@utils/type/User";

const ProductDetailContent:  React.FC<{ currentUser: UserFetch }> = ({currentUser}) => {
  const { idProduct } = useParams();
  const { openSnackbar } = useSnackbar();
  const [productItem, fetchStateDetailProduct, getResDetailProduct] =
    GetProductById(idProduct as string);

  const [reviews, fetchStateListReview, getResGetListReview] =
    GetReviewsByProductId(idProduct as string);
  useEffect(() => {
    if (fetchStateDetailProduct === FetchState.DEFAULT) {
      try {
        getResDetailProduct();
      } catch (error) {
        console.log(error);
      }
    }
    if (fetchStateListReview === FetchState.DEFAULT) {
      try {
        getResGetListReview();
      } catch (error) {
        console.log(error);
      }
    }
  }, []); 
  return (
    <div>
      {fetchStateDetailProduct === FetchState.LOADING && (
        <Page className="flex justify-center items-center">
          <Button
            variant="secondary"
            type="highlight"
            onClick={() => {
              openSnackbar({
                text: "Loading...",
                type: "loading",
              });
            }}
          >
            Loading
          </Button>
        </Page>
      )}
      {fetchStateDetailProduct === FetchState.SUCCESS && (
        <>
          <ProductDetailHead
            product={productItem as Product}
            numberReview={reviews ? reviews.length : 0}
            userId={currentUser.id}
          />
          <DividerSpace />
          <ProductDetailShop product={productItem as Product} />
          <DividerSpace />
          <SectionText title="Mô tả sản phẩm" padding="title-only">
            <ProductDetailDescription description={productItem?.description} />
          </SectionText>
          <DividerSpace />
        </>
      )}

      {fetchStateListReview === FetchState.LOADING && (
        <Page className="flex justify-center items-center">
          <Button
            variant="secondary"
            type="highlight"
            onClick={() => {
              openSnackbar({
                text: "Loading...",
                type: "loading",
              });
            }}
          >
            Loading
          </Button>
        </Page>
      )}
      {fetchStateListReview === FetchState.SUCCESS && (
        <>
          <SectionText title="Đánh giá sản phẩm" padding="title-only">
            <ProductComment
              listReview={reviews as Review[]}
              product={productItem as Product}
              currentUser={currentUser}
            />
          </SectionText>
          <ButtonOrder product={productItem as Product} />
        </>
      )}
    </div>
  );
};

const DetailProduct: React.FC<{ currentUser: UserFetch }> = ({
  currentUser,
}) => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-auto pb-20">
        <Suspense fallback={<ProductDetailContent currentUser={currentUser}/>}>
          <ProductDetailContent currentUser={currentUser}/>
        </Suspense>
      </div>
    </Page>
  );
};

export default DetailProduct;
