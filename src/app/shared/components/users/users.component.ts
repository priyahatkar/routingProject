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
  public selectedUsers!: string;
  public singleUsers!: Iuser;
  // activeIndex: number =0;
  constructor(private _usersServices : UsersService) { }

  ngOnInit(): void {
    this.usersInfo = this._usersServices.getAllUsersApi()
    this.singleUsers = this.usersInfo[0]
    console.log(this.singleUsers);
  }
}
