import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/user';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productinfo!: Iproduct;
  public productId !: string;
  constructor(private _productService :ProductsService, 
                private _route:ActivatedRoute,
                private _router : Router) { }

  ngOnInit(): void {
    this.productId = this._route.snapshot.params['productId']
    this.productinfo = this._productService.getSingleProduct(this.productId)
    console.log(this.productId);


    this._route.params
      .subscribe((params:Params)=>{
        this.productId = params['productId'];
        this.productinfo =this._productService.getSingleProduct(this.productId)
      })
  }
  
  onEditProduct(){
    this._router.navigate(['editProduct'],{
      queryParamsHandling : 'preserve',
      relativeTo : this._route
    })
  }
  onDeleteProduct(){
    let confirmation = confirm(`Are you sure, you want to remove this user?`)
    if(confirmation){
      this._productService.getDeleteProductApi(this.productId)
    }
  }
}
