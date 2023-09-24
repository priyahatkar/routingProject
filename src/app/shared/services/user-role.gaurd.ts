import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";



@Injectable({
    providedIn : 'root'
})
export class userRoleGaurd implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean> | Promise<boolean> {
        // let getStaticUserRole : string = route.data['userRole'];
        // let getActualUserRole = localStorage.getItem('userRole');
        // if(getStaticUserRole === getActualUserRole){
        //     return true
        // }else{
        //     return true 
        // }
        let getStaticUserRole : Array<string> = route.data['userRole']
        console.log(getStaticUserRole);
        let getActualUserRole : string = localStorage.getItem('userRole')!;
        // if(getStaticUserRole.includes(getActualUserRole)){
        //     return true
        // }else{
        //     return false
        // }
        return getStaticUserRole.includes(getActualUserRole)? true : false;            
    }
    
}