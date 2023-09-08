import { Injectable } from '@angular/core';
import { Iproduct, productStatus } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productArray: Array<Iproduct> =[
    {
      pName : "Iphone",
      productId : 1,
      pStatus : 'Inprogress'
    },
    {
      pName : "Redmi Y3",
      productId : 2,
      pStatus :'Dispatched'
    },
    {
      pName : "Samsung",
      productId : 3,
      pStatus: 'Delivered'
    }
  ]
  constructor( private _router : Router) { }

  getAllProductApi(){
    return this.productArray;
  }
  getSingleProduct(id : number){
    return this.productArray.find(p =>{
      return p.productId === id
    })!
  }

  getUpadateProduct(pObj : Iproduct){
    this.productArray.forEach(obj =>{
      if(obj.productId === pObj.productId){
        obj.pName = pObj.pName;
        obj.pStatus = pObj.pStatus;
        this._router.navigate(['/products'])
      }
    }) 
  }
}
