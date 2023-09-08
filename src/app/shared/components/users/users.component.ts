import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersInfo !: Array<Iuser>;

  constructor(private _usersServices : UsersService) { }

  ngOnInit(): void {
    this.usersInfo = this._usersServices.getAllUsersApi()
  }

}
