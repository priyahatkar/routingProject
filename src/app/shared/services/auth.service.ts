import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logInStatus : boolean = false;
  constructor(private _router : Router) { }
  isAuthenticated(): Promise<boolean>{
    return new Promise<boolean>((resolve, reject) =>{
      setTimeout(()=>{
        resolve(this.logInStatus)
      },300)
    })
  }

  logInApp(){
    this.logInStatus = true;
    localStorage.setItem("token", "JWT token")
  }

  logOutFromApp(){
    this._router.navigate(['/'])
    this.logInStatus = false;
    localStorage.removeItem("token")
  }
}
