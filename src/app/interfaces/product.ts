
import { User } from "./user";
import { Category } from "./category"
import { Deal } from "./deal"



export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
  published_date: string;
  user: User;
  category: number;
  deal: Deal;
}
