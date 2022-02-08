import { Product } from "./product"
import { User } from "./user";


export interface Deal {
  id: number;
  price: number;
  shipping_address: number;
  valoration: number;
  n_valorations: number;
  ordered_date: string;
  product: Product;
  user: User;

}
