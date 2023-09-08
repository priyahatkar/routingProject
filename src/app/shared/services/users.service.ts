import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public UsersArray : Array<Iuser>=[
    {
      name : "Jhon",
      userId : 1
    },
    {
      name : "Mark",
      userId : 2
    },
    {
      name : "Jenny",
      userId : 3
    },
    {
      name : "May",
      userId : 4
    },
  ]
  constructor(private _router : Router) { }

  getAllUsersApi(){
    return this.UsersArray;
  }

  getSingleUser(id :number){
    return this.UsersArray.find(user =>{
      return user.userId === id
    })!
  }

  getUpdateUser(userObj : Iuser){
    this.UsersArray.forEach(obj =>{
      if(obj.userId === userObj.userId){
        obj.name = userObj.name;
        this._router.navigate(['/users'])
      }
    })
  }
}
