import { Injectable } from '@angular/core';
import { Iproduct, productStatus } from '../models/user';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productArray: Array<Iproduct> =[
    {
      pName : "Iphone",
      productId : '1',
      pStatus : 'Inprogress',
      canReturn : 1,
    },
    {
      pName : "Redmi Y3",
      productId : '2',
      pStatus :'Dispatched',
      canReturn : 0,
    },
    {
      pName : "Samsung 14",
      productId : '3',
      pStatus: 'Delivered',
      canReturn : 1,
    },
    {
      pName : "Samsung",
      productId : '4',
      pStatus: 'Dispatched',
      canReturn : 0,
    }
  ]
  constructor( private _router : Router, private _snackBar : SnackBarService) { }

  getAllProductApi(){
    return this.productArray;
  }
  getSingleProduct(id : string){
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
        this._snackBar.openSnackBar(`Your Product Is Updated ${pObj.pName} and Status Is ${pObj.pStatus}`, 'Close')
      }
    }) 
  }

  getNewAddProduct(prodObj : Iproduct){
    this.productArray.push(prodObj);
    this._router.navigate(['/products'])
    this._snackBar.openSnackBar(`Your Product Is Added ${prodObj.pName} and Status Is ${prodObj.pStatus}`, 'Close')
  }

  getDeleteProductApi(id : string){
    let getIndex = this.productArray.findIndex(p => p.productId === id)

    let sendIndex = this.productArray.splice(getIndex, 1)
    this._router.navigate(['/products'])
  }
}
