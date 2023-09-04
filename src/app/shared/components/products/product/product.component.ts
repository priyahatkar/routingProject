import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/user';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productinfo!: Iproduct;
  public productId !:number;
  constructor(private _productService :ProductsService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['productId']
    this.productinfo = this._productService.getSingleProduct(this.productId)
    console.log(this.productId);
  }
  
  
}
