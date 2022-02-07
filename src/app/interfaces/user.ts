import { Deal } from "./deal";
import { Product } from "./product";

export interface User {
    id: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: number;
    image: string;
    billing_address: string;
    shipping_address: string;
    wallet: number;
    valoration: number;
    n_valorations: number;
    deals: Deal[];
    products: Product[];
}
