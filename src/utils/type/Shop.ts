export interface ShopInfo {
    id: number;
    name: string;
    avatar: string;
    active: boolean;
    address: string | null;
    phone: string | null;
    tax_code: string | null;
    user_id: number;

}
export interface Shop {
    id: number;
    ShopInfo: ShopInfo[];
}