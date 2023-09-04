import { Injectable } from '@angular/core';
import { Iproduct } from '../models/user';
import { ProductStatus } from '../const/product.Enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productArray: Array<Iproduct> =[
    {
      pName : "Iphone",
      productId : 1,
      pStatus : ProductStatus.Inprogress
    },
    {
      pName : "Redmi Y3",
      productId : 2,
      pStatus : ProductStatus.Dispatched
    },
    {
      pName : "Samsung",
      productId : 3,
      pStatus: ProductStatus.Delivered
    }
  ]
  constructor() { }

  getAllProductApi(){
    return this.productArray;
  }
  getSingleProduct(id : number){
    return this.productArray.find(p =>{
      return p.productId === id
    })!
  }
}
