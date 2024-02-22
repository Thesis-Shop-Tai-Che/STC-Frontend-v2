import React, { Suspense, useEffect } from "react";
import ProductItem from "./ProductItem";
import { ProductItemSkeleton, SectionText } from "@components/common";
import { GetProductLatest } from "@services/ProductServices";
import { FetchState } from "@utils/type/FetchState";

const ProductListGridContent: React.FC = () => {
  const [products, fetchState, getRes] = GetProductLatest();

  useEffect(() => {
    if (fetchState === FetchState.DEFAULT) getRes();
  }, []);
  return (
    <SectionText title="Mới ra mắt" padding="title-only">
      {(fetchState === FetchState.ERROR ||
        fetchState === FetchState.LOADING) && <ProductListGridFallback />}

      {fetchState === FetchState.SUCCESS && (
        <div className=" grid-cols-2 gap-2 px-4" style={{display:"grid"}}>
          {products?.data.map((product: any, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      )}
    </SectionText>
  );
};

const ProductListGridFallback: React.FC = () => {
  const products = [...new Array(4)];
  return (
    <SectionText title="Mới ra mắt" padding="title-only">
      <div className="grid grid-cols-2 gap-4 px-4">
        {products.map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
      </div>
    </SectionText>
  );
};

const ProductListGrid: React.FC = () => {
  return (
    <Suspense fallback={<ProductListGridFallback />}>
      <ProductListGridContent />
    </Suspense>
  );
};

export default ProductListGrid;
