import { Component,AfterViewChecked} from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewChecked {
  @ViewChild('loginForm') customerLoginForm:any
  loginForm="ravi"
  customerLoginData:any=[];
  signUpDataResponse:any=[];
  userLoginResponse:any=[];

  constructor(private routes:Router,private dataServiceRef:DataService){
  
  }
  array:any=[
    {'one':1},
    {'one':2},
    {'one':3},
    {'one':4}
            ]

  loginUser(x:any){
    this.customerLoginData=[];
      this.customerLoginData.push(x)
      //set values into localstorage
      localStorage.setItem("userlogindata",JSON.stringify(this.customerLoginData))
      this.customerLoginData=[];

      //get signupdata from localstorage
      this.signUpDataResponse=localStorage.getItem("usersighnupdata");
      this.userLoginResponse=localStorage.getItem("userlogindata");
      console.log(JSON.parse(this.signUpDataResponse));
      console.log(this.userLoginResponse);
      for(x of JSON.parse(this.signUpDataResponse)){ 
       for(let y of JSON.parse(this.userLoginResponse)){
          if((x.userEmail)===(y.useremail) && (x.userPassword)===(y.userpassword)){
            console.log("hello");
            this.routes.navigate(['/products']);
          }
          else{
            this.routes.navigate(['/login']);
          }
       }
      }
      this.customerLoginForm.reset();
  }
  ngAfterViewChecked(): void {
    this.dataServiceRef.adminCheck1=false
    console.log(this.dataServiceRef.adminCheck1)
  }
  loginUser1(x:any){
       this.dataServiceRef.userAuthentication(x);
       this.customerLoginForm.reset();
  }
}
