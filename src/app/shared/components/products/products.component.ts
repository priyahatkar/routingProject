import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/user';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productsInfo : Array<Iproduct>=[]
  constructor(private _productService :ProductsService) { }

  ngOnInit(): void {
    this.productsInfo = this._productService.getAllProductApi()
  }

}
