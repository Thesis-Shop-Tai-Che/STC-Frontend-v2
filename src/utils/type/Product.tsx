import { Shop } from "./Shop";
import { STATUS_ORDER } from "./StatusOrder";
export interface PercentSale {
  amount: number;
  type: "percent";
}

export interface FixedSale {
  amount: number;
  type: "fixed";
}

export type Sale = PercentSale | FixedSale;

export interface Option {
  key: string;
  label?: string;
  priceChange?: Sale;
}

export interface BaseVariant {
  key: string;
  label?: string;
  options: Option[];
}

export interface SingleOptionVariant extends BaseVariant {
  type: "single";
  default?: string;
}

export interface MultipleOptionVariant extends BaseVariant {
  type: "multiple";
  default?: string[];
}

export type Variant = SingleOptionVariant | MultipleOptionVariant;

export interface ProductMedia {
  url: string;
  sequence: number;
}

export interface CountLove {
  Love: number;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Love {
  id: number;
  user_id: number;
  product_id: number;
  created_at: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  amount?: number;
  shop_id: number;
  discount: number;
  discount_start?: null;
  discount_end?: null;
  created_at: string;
  updated_at: null;
  tag_id?: number;
  has_sold?: number;
  tag: Tag;
  ProductMedia: ProductMedia[];
  _count?: {
    Love:number;
    Review:number;
  };
  Love?: {
    user_id:number;
  };
  Shop?: Shop;
  Order?:{
    user_id:number;
    name:string;
    status:
    | STATUS_ORDER.PROCESSING
    | STATUS_ORDER.DELIVERING
    | STATUS_ORDER.WAIT_FOR_PAYMENT
    | STATUS_ORDER.CANCELED
    | STATUS_ORDER.SUCCESS;
  }[]
}

export interface ProductList {
  data: Product[];
  page: number;
  pageSize: number;
  status: string;
  total: number;
}
