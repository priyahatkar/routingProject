import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logInStatus : boolean = false;
  constructor(private _router : Router, private _sanckBar : SnackBarService) { }
  isAuthenticated(): Promise<boolean>{
    return new Promise<boolean>((resolve, reject) =>{
      setTimeout(()=>{
        resolve(this.logInStatus)
      },300)
    })
  }

  logInApp(userName : string, password: string){
    // this.logInStatus = true;
    // localStorage.setItem("token", "JWT token")
    if(userName === "priyaHat1@gamail.com" && password === "priya13"){
      this.logInStatus = true;
      localStorage.setItem("token", "JWT token");
      localStorage.setItem("userRole", "candidate");
    }else if(userName === "akkiHat24@gamail.com" && password === "akkiHat24"){
      this.logInStatus = true;
      localStorage.setItem("token", "JWT token");
      localStorage.setItem("userRole", "admin");
    }else if(userName === "ajayHat1@gmail.com" && password === "ajayHat1"){
      this.logInStatus = true;
      localStorage.setItem("token", "JWT token");
      localStorage.setItem("userRole", "superAdmin");
    }else{
      this._sanckBar.openSnackBar('Invalid username or password', 'Close');
    }
  }

  logOutFromApp(){
    this._router.navigate([''])
    this.logInStatus = false;
    localStorage.removeItem("token")
    localStorage.removeItem("userRole")
  }
}
