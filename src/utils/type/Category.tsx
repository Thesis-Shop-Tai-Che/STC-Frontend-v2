export type CategoryId = ("giày dép" | "túi xách" | "quần áo")[];

export interface Category {
  name:string;
  id: CategoryId;
}
