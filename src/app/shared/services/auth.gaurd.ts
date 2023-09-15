import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";



@Injectable({providedIn : "root"})
export class AuthGard implements CanActivate{

    constructor(private _authService : AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
        return this._authService.isAuthenticated().then((res : boolean) =>{
            if(res === true){
                return true
            }else{
                return false
            }
        })
    }
    
}