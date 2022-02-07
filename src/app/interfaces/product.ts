import { Category } from "./category";
import { Deal } from "./deal";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    weight: number;
    image: string;
    published_date: string;
    category: Category;
    deal: Deal; 
}
