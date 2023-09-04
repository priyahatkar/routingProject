import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userId !: number;
  public singleUser !: Iuser;
  constructor(private _usersServices : UsersService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = +this._route.snapshot.params['userId'];
    // this._usersServices.getSingleUser(this.userId)
    this.singleUser = this._usersServices.getSingleUser(this.userId)
  }

}
