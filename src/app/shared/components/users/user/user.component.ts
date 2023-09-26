import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userId !: string;
  public singleUser !: Iuser;
  constructor(private _usersServices : UsersService,
              private _route : ActivatedRoute,
              private _router : Router,) {
                this._route.data
                  .subscribe(res =>{
                    this.singleUser =res['user']
                  })
              }

  ngOnInit(): void {
    // this.userId = this._route.snapshot.params['userId'];
    // // this._usersServices.getSingleUser(this.userId)
    // this.singleUser = this._usersServices.getSingleUser(this.userId)
  
    console.log('hello')

    // this._route.params
    // .subscribe((params : Params)=>{
    //   console.log(params);
    //   this.userId = params['userId'];
    //   this.singleUser =this._usersServices.getSingleUser(this.userId)
    // })
  }

  onEditUser(){
    this._router.navigate(['editUser'],{ 
      queryParamsHandling : 'preserve',
      relativeTo : this._route
    })
  }

  onDeleteUser(){
    let confirmation = confirm(`Are you sure, you want to remove this user?`)
    if(confirmation){
      this._usersServices.getRemoveUser(this.userId)
    }
  }
}
