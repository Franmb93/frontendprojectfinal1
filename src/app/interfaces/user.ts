import { Product } from "./product";
import { Deal } from "./deal";

export interface User {
  id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  image: string;
  billing_address: string;
  shipping_address: string;
  wallet: number;
  valoration: number;
  n_valorations: number;
  deals: Deal[];
  products: Product[];
}
