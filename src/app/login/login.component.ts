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
  // customerLoginData:any=[];
  // signUpDataResponse:any=[];
  // userLoginResponse:any=[];

  constructor(private routes:Router,private dataServiceRef:DataService){}
  

  
  ngAfterViewChecked(): void {
    this.dataServiceRef.adminCheck1=false
    console.log(this.dataServiceRef.adminCheck1)
  }
  loginUser1(loginForm:any){
       this.dataServiceRef.userAuthentication(loginForm);
       this.customerLoginForm.reset();
  }
}
