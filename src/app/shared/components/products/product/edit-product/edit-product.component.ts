import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { IcanDeactivate } from 'src/app/shared/models/product';
import { Iproduct, productStatus } from 'src/app/shared/models/user';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, IcanDeactivate {
  public pId !: string;
  public pObj !: Iproduct;
  public canEdit : number = 1;
  @ViewChild('pName') pName !:ElementRef<HTMLInputElement>;
  @ViewChild('status') status !:ElementRef<HTMLSelectElement>;
  constructor(private _route : ActivatedRoute,
              public _productService : ProductsService,
              public _utilityService : UtilityService) { }
  

  ngOnInit(): void {
    this.pId = this._route.snapshot.params['productId'];
    this.pObj = this._productService.getSingleProduct(this.pId)
    // console.log( this.pObj);
    // this.canEdit = +this._route.snapshot.queryParams['canEdit']
    // console.log(this._route.snapshot.queryParams);

    this._route.queryParams
          .subscribe((queryParams : Params) =>{
	          // console.log(queryParams);
          if(queryParams.hasOwnProperty("canEdit")){
            this.canEdit = +queryParams['canEdit']
          }
      })
    // if(queryParams.hasOwnProperty('canEdit')){
    //   this.canEdit = +queryParams['canEdit']
    // }
  }
  onUpdateProduct(pName : HTMLInputElement,pStatus : HTMLSelectElement){
    let obj : Iproduct ={
      pName : pName.value,
      pStatus : pStatus .value as productStatus,
      productId : this.pId,
      canReturn : this.pObj.canReturn
    }
    this._productService.getUpadateProduct(obj)
  }

  onAddProduct(pName : HTMLInputElement ,status: HTMLSelectElement){
    let obj : Iproduct = {
      pName: pName.value as string,
      productId: this._utilityService.generateUuid(),
      pStatus: status.value as productStatus,
      canReturn: Math.random() >= 5 ? 1 : 0,
    }
    this._productService.getNewAddProduct(obj)
  }

  canDeactivate(){
    if(this.pObj.pName !== this.pName.nativeElement.value || 
      this.pObj.pStatus !== this.status.nativeElement.value){
      let msgConfirm = confirm(`Are sure you want to discard changes`)
      return msgConfirm
      }else{
        return true
      }
  }
}
