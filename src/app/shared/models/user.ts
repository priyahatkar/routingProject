import { ProductStatus } from "../const/product.Enum";



export interface Iuser{
    name: string;
    userId: number;
}


export interface Iproduct{
    pName: string;
    productId: number;
    pStatus :ProductStatus
}

