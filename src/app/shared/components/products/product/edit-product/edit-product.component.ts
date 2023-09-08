import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct, productStatus } from 'src/app/shared/models/user';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public pId !: number;
  public pObj !: Iproduct;
  constructor(private _route : ActivatedRoute, public _productService : ProductsService) { }

  ngOnInit(): void {
    this.pId = +this._route.snapshot.params['productId'];
    this.pObj = this._productService.getSingleProduct(this.pId)
    console.log( this.pObj);
    
  }
  onUpdateProduct(pName : HTMLInputElement,pStatus : HTMLSelectElement){
    let obj : Iproduct ={
      pName : pName.value,
      pStatus : pStatus .value as productStatus,
      productId : this.pId
    }
    this._productService.getUpadateProduct(obj)
  }
}
