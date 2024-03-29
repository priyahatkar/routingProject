import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this._authService.logOutFromApp()
  }
}
