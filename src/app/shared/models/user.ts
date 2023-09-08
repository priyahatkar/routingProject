



export interface Iuser{
    name: string;
    userId: number;
}


export interface Iproduct{
    pName: string;
    productId: number;
    pStatus :productStatus
}

export type productStatus = 'Inprogress' | 'Dispatched' | 'Delivered'

