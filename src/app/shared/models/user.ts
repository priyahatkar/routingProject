



export interface Iuser{
    name: string;
    userId: string;
    role : Irole,
}

export type Irole = "admin" | "user"

export interface Iproduct{
    pName: string;
    productId: string;
    pStatus :productStatus;
    canReturn : number;
}

export type productStatus = 'Inprogress' | 'Dispatched' | 'Delivered'


