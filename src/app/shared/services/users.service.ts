import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';

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
  constructor() { }

  getAllUsersApi(){
    return this.UsersArray;
  }

  getSingleUser(id :number){
    return this.UsersArray.find(user =>{
      return user.userId === id
    })!
  }
}
