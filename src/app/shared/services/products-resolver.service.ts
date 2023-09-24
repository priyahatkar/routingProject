import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iproduct } from '../models/user';
import { Observable, observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<Iproduct> {

  constructor(private _productService : ProductsService) { }

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot): Iproduct | Observable<Iproduct> | Promise<Iproduct> {
      let getProductId = route.params['productId']

      return this._productService.getSingleProduct(getProductId)
  }
}
