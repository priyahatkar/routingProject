import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public allReadyHadAccount : boolean = true;
  public passType : boolean = true;
  public vissible : boolean = true;
  constructor(private _authService : AuthService,
              private _router : Router
      ) { }

  ngOnInit(): void {}


  onLogIn(userName : string, password : string){
    this._authService.logInApp(userName, password)
    // this._router.navigate(['/home'])
  }
  
  onLock(){
    this.passType = !this.passType;
    this.vissible = !this.vissible;
  }
}