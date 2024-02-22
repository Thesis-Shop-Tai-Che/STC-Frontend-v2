import React from "react";
import { Page } from "zmp-ui";
import { DividerSpace } from "@components/divider";
// import SearchProduct from "@components/search";
import { ProductListSwipe, ProductListGrid } from "@components/product";
import Banner from "./Banner";
import { UserFetch } from "@utils/type/User";


const HomePage: React.FC<{ currentUser: UserFetch }> = ({ currentUser }) => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-auto pb-20">
        <Banner />
        {/* <SearchProduct /> */}
        <ProductListSwipe />
        <DividerSpace />
        <ProductListGrid />
      </div>
    </Page>
  );
};

export default HomePage;
