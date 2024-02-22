export interface UserZalo {
    zalo_id: string;
    name: string;
    avatar: string;
}


export interface UserFetch {
    name: string;
    id: number;
    zalo_id: string;
    avatar: string;
    active: boolean;
    is_seller: boolean
}