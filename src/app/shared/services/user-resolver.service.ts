import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iuser } from '../models/user';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<Iuser>  {

  constructor(private _userService : UsersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iuser | Observable<Iuser> | Promise<Iuser> {
    let GetUserId = route.params['userId'];
    return this._userService.getSingleUser(GetUserId)
  }
}
