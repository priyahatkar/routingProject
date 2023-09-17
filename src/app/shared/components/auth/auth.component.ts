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
  constructor(private _authService : AuthService,
              private _router : Router
      ) { }

  ngOnInit(): void {
  }


  onLogIn(){
    this._authService.logInApp()
    this._router.navigate(['/dashboard'])
  }
}
