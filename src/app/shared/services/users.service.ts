import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public UsersArray : Array<Iuser>=[
    {
      name : "Jhon",
      userId : '1',
      role : "admin"
    },
    {
      name : "Mark",
      userId : '2',
      role : "user"
    },
    {
      name : "Jenny",
      userId : '3',
      role : "admin"
    },
    {
      name : "May",
      userId : '4',
      role : "user"
    },
  ]
  constructor(private _router : Router, private _sanckBar : SnackBarService) { }

  getAllUsersApi(){
    return this.UsersArray;
  }

  getSingleUser(id :string){
    return this.UsersArray.find(user =>{
      return user.userId === id
    })!
  }

  getUpdateUser(userObj : Iuser){
    this.UsersArray.forEach(obj =>{
      if(obj.userId === userObj.userId){
        obj.name = userObj.name;
        this._router.navigate(['/users']);
        this._sanckBar.openSnackBar(`Your Product Is Updated ${userObj.name} and Status Is ${userObj.role}`, 'Close')
      
      }
    })
  }

  addNewUsers(userObj : Iuser){
    this.UsersArray.push(userObj)
    this._router.navigate(['/users'])
    this._sanckBar.openSnackBar(`Your Product Is Updated ${userObj.name} and Status Is ${userObj.role}`, 'Close')
  }

  getRemoveUser(id : string){
    let getIndex = this.UsersArray.findIndex(uId => uId.userId === id);

    let deleteId = this.UsersArray.splice(getIndex, 1);
    this._router.navigate(['/users'])
  }
}
