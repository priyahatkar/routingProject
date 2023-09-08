import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public uId !: number;
  public uObj !: Iuser;
  constructor(private _userService : UsersService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this.uId = +this._route.snapshot.params['userId'];
    console.log(this.uId );
    
    this.uObj = this._userService.getSingleUser(this.uId)
    console.log(this.uObj );
  }

  onUpdateUser(uName : string){
    let obj : Iuser = {
      name : uName,
      userId : this.uId
    }
    this._userService.getUpdateUser(obj)
  }
}
