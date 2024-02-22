export enum TYPESPAYMENT {
  CASH = "CASH",
  BANKING = "BANKING",
}
export interface ShipPayment {
  typePayment: TYPESPAYMENT.CASH | TYPESPAYMENT.BANKING;
  shipPrices: number;
}
export interface Payment {
  typePayment: TYPESPAYMENT.CASH | TYPESPAYMENT.BANKING;
  totalPrices: number;
}
