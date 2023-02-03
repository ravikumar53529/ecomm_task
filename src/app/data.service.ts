import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class DataService implements CanActivate {
  customerLoginData: any = [];
  signUpDataResponse: any = [];
  userLoginResponse: any = [];
  updateSellingProductId: any;
  cartItemId: any;

  constructor(private _http: HttpClient, private r: Router) {}
  //products form fakestore Api
  getData() {
    return this._http.get('https://fakestoreapi.com/products/');
  }

  //authentication and authorization
  loginDetails: any = [];
  loggedIn: boolean = false;
  adminCheck1: boolean = false;
  productId: any = null;
  googleUser: any;
  googleUserFromLocalStorage: any;
  //route quaurds
  canActivate(): boolean {
    this.loginDetails = localStorage.getItem('userlogindata');
    this.googleUserFromLocalStorage = localStorage.getItem('googleUser');
    // console.log(JSON.parse(this.loginDetails));
    if (this.loggedIn || this.googleUserFromLocalStorage) {
      return true;
    } else {
      this.r.navigate(['/login']);
      return false;
    }
  }

  userAuthentication(loginData: any, userDetails: any) {
    //googleUserDetails
    this.googleUser = userDetails;
    //set values into localstorage
    localStorage.setItem(
      'userlogindata',
      JSON.stringify(this.customerLoginData)
    );
    this.customerLoginData = [];
    //get signupdata from localstorage
    this.signUpDataResponse = localStorage.getItem('usersighnupdata');
    this.userLoginResponse = localStorage.getItem('userlogindata');
    let signUpDataResponseResult = JSON.parse(this.signUpDataResponse);
    for (let i = 0; i < JSON.parse(this.signUpDataResponse).length; i++) {
      if (
        loginData.useremail === signUpDataResponseResult[i].userEmail &&
        loginData.userpassword === signUpDataResponseResult[i].userPassword
      ) {
        Swal.fire('Dear User', 'You have successfully logged in', 'success');
        this.loggedIn = true;
        this.r.navigate(['/products']);
        this.adminCheck1 = this.loggedIn;
        break;
      } else {
        Swal.fire('USER', 'Login Failed', 'error');
        this.r.navigate(['/login']);
        this.loggedIn = false;
        break;
      }
    }
  }

  getId(x: any) {
    this.productId = x;
  }
  updateSellingProducts(id: any) {
    this.updateSellingProductId = id;
  }

  //gettingCart Items Id
  gettingCartItemId(cartItemId: any) {
    this.cartItemId = cartItemId;
  }

  //adding products to cart
  cartItems: any = [];
  cartAddItems(item: any) {
    this.cartItems.push(item);
  }

  imageCropUrl: any;
  imageFile: any;
  //navbar-icon chnage
  navbarImageResize(image: any) {
    // this.imageCropUrl=imageUrl;
    this.imageFile = image;
  }
  //croppedImageresult
  croppedPic: any;
  croppedImage(croppedImage: any) {
    this.croppedPic = croppedImage;
  }

  cartFinalPrice: any;
  //cart and payment final price
  totalCartPrice(cartPrice: number) {
    this.cartFinalPrice = cartPrice;
  }
}
