import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IcanDeactivate } from 'src/app/shared/models/product';
import { Irole, Iuser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit , IcanDeactivate {
  public uId !: string;
  public uObj !: Iuser;
  public canEditUser : boolean = true;
  @ViewChild("userName") userName !: ElementRef<HTMLInputElement>; 
  @ViewChild("userRole") userRole !: ElementRef<HTMLSelectElement>; 
  constructor(private _userService : UsersService, 
    private _route : ActivatedRoute, private _utilityService : UtilityService) { }
    
  ngOnInit(): void {
    this.uId = this._route.snapshot.params['userId'];
    console.log(this.uId );
    
    this.uObj = this._userService.getSingleUser(this.uId)
    // console.log(this._route.snapshot.queryParams );

    if(this._route.snapshot.queryParams['canEditUser'] === 'user'){
      this.canEditUser = false
    }
  }
  
  canDeactivate(){
    if(this.uObj.name !== this.userName.nativeElement.value || this.uObj.role !== this.userRole.nativeElement.value){
      let msgConfirm = confirm(`Are sure you want to discard changes`)
      return msgConfirm
    }else{
      return true
    }
  }

  onUpdateUser(uName : HTMLInputElement,userRole : HTMLSelectElement){
    let obj : Iuser = {
      name : uName.value as string,
      userId : this.uId,
      role : userRole.value as Irole
    }
    this._userService.getUpdateUser(obj)
  }

  onUserAdd(userName : HTMLInputElement, userRole : HTMLSelectElement){
    let obj : Iuser ={
      name: userName.value as string,
      userId: this._utilityService.generateUuid(),
      role: userRole.value as Irole
    }
    this._userService.addNewUsers(obj);
  }

 
}
