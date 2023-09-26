import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivate } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CanDectivateGuard implements CanDeactivate<IcanDeactivate> {
  canDeactivate(
    component: IcanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    return component.canDeactivate();
  }
  
}
