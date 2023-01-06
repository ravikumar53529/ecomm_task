import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import {CanActivate, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService implements CanActivate  {
  @ViewChild('loginForm') customerLoginForm:any
  customerLoginData:any=[];
  signUpDataResponse:any=[];
  userLoginResponse:any=[];
  updateSellingProductId:any;
  cartItemId:any;
  sampleData=[
    {
      "productId":1,"productName":"watch","productPrice":2000,"productBrand":"fastrack","productModel":"fasttrack-s32",
    },
    {
      "productId":2,"productName":"phone","productPrice":20000,"productBrand":"samsung","productModel":"samsung-galaxy",
    }
];
//simple subject for component to component communication
  s1=new BehaviorSubject("true"); 
 
  constructor(private _http:HttpClient,private r:Router) { 
    // this.s1.next("simple subjects")//iniatalizing 
  }

  name:any='ravi';
  getData(){
    return this._http.get('https://fakestoreapi.com/products/')
  }
  
 loginDetails:any=[];
 loggedIn:boolean=false;
 adminCheck1: boolean = false;
 productId:any=null;
 
  //route quaurds
  canActivate(): boolean  {
    this.loginDetails=localStorage.getItem("userlogindata");
    // console.log(JSON.parse(this.loginDetails));
    if(this.loggedIn){
      return true
    }else{
      this.r.navigate(['/login']);
      return false
    }

    // this.r.navigate(['/login'])
  }

   userAuthentication(x:any){
    console.log("hello user auth")
    // this.customerLoginData=[];
    // this.customerLoginData.push(x)
   //set values into localstorage
   localStorage.setItem("userlogindata",JSON.stringify(this.customerLoginData))
     this.customerLoginData=[];
      //get signupdata from localstorage
      this.signUpDataResponse=localStorage.getItem("usersighnupdata");
      this.userLoginResponse=localStorage.getItem("userlogindata");
      // console.log(JSON.parse(this.signUpDataResponse));
      // console.log(this.userLoginResponse);
      // console.log(JSON.parse(this.userLoginResponse));
      // console.log(JSON.parse(this.signUpDataResponse));
      // for(let y of JSON.parse(this.signUpDataResponse))
      let  signUpDataResponseResult=JSON.parse(this.signUpDataResponse);
      for(let i=0;i<JSON.parse(this.signUpDataResponse).length;i++){ 
          if((x.useremail===signUpDataResponseResult[i].userEmail) &&(x.userpassword===signUpDataResponseResult[i].userPassword)){
            // console.log(y.userEmail, x.useremail)
            alert("success")
            this.r.navigate(['/products']);
            // console.log("hello");
            this.loggedIn=true
            this.adminCheck1=this.loggedIn
            // console.log(this.adminCheck1)
            break   
          }
          else{
            alert("failure")
            this.r.navigate(['/login']);
            this.loggedIn=false;
            break;
          }
        
      }
    
  }
  getId(x:any){
      this.productId=x
  }
  updateSellingProducts(id:any){
    this.updateSellingProductId=id
  }
  //gettingCart Items Id
  gettingCartItemId(cartItemId:any){
      this.cartItemId=cartItemId
  }

  cartItems:any=[];
  cartAddItems(item:any){
    this.cartItems.push(item);
  }
  
}
