
import { Component,AfterViewChecked,ElementRef} from '@angular/core';
import { ViewChild,OnInit} from '@angular/core';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { GoogleServiceService } from '../google-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements AfterViewChecked,OnInit {
  

  @ViewChild('loginForm') customerLoginForm:any
  // customerLoginData:any=[];
  // signUpDataResponse:any=[];
  // userLoginResponse:any=[];

  constructor(private routes:Router,private dataServiceRef:DataService,private readonly google:GoogleServiceService){}
   // private readonly google:GoogleServiceService
  ngOnInit(): void {
    
  }

  
  ngAfterViewChecked(): void {
    this.dataServiceRef.adminCheck1=false
    console.log(this.dataServiceRef.adminCheck1)
  }
  loginUser1(loginForm:any){
       this.dataServiceRef.userAuthentication(loginForm);
       console.log(loginForm.value);
       this.customerLoginForm.reset();
  }
   //googleSignIn

  
   googleSignIn(){
    this.google.googleSignIn();
   }
 
}
