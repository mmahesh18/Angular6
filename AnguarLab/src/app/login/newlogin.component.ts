import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

import {UserInfo} from './UserInfo';
import {LoginService} from "./login.service";
@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class NewLoginComponent implements OnInit {
  user:UserInfo;
  status:boolean;
  message:string;

 form:any;

  constructor(private loginsvc:LoginService) { 
    this.loginsvc=loginsvc;
  } 

ngOnInit() {
 this.form=new FormGroup({
   // username:new FormControl('',Validators.required);
     username:new FormControl('',Validators.compose([
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(20),
         //Validators.pattern('[\\w\\-\\s\\  /]') 
     ]) 
     ),
     //updateOn:'blur' is available from angular 5 onwards
     password:new FormControl('',
      {validators:this.pwdValidator,updateOn:'blur'}),
     
      country:new FormControl('')
      })
  }
  //Custom validator
  pwdValidator(control){
      //observe HTML  (ngValid, ngInvalid, ngDirty, ngPrestine....)
    if(control.value.length<3){
        return {'password':false}
    }
  }
  onSubmit(user:any){
     let u:UserInfo={userName:user.username,password:user.password}

   if(this.loginsvc.CheckUser(u)){
      this.status=true;
      this.message="Welcome to Murthy Infotek";
   }else{
     this.status=false;
     this.message="Sorry... invalid user name or password";
   }
  }

  usernameChanged(oldValue,newValue){
   console.log(newValue);
//   if(newval != ''){
//       this.form.patchValue({username:(newval.toUpperCase())})
//   }
  }
  

}
