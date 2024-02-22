import { Option, Product } from "../type/Product"; 
import { SelectedOptions } from "../type/Cart";

export function calcFinalPrice(product: Product, options?: SelectedOptions) {
  let finalPrice = product.price;
 
  if (options) {
    const selectedOptions: Option[] = [];
 
    finalPrice = selectedOptions.reduce((price, option) => {
 
      return price;
    }, finalPrice);
  }
  return finalPrice;
}
