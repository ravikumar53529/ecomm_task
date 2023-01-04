import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import service
import { DataService } from './data.service';
//template driven forms for login
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { ProductChildComponent } from './product-child/product-child.component';
import { SellingComponent } from './selling/selling.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog';
import { AddsellingproductsComponent } from './addsellingproducts/addsellingproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UpdatesellingproductsComponent } from './updatesellingproducts/updatesellingproducts.component';
import { CartComponent } from './cart/cart.component';


const routes:Routes=[
  {
     path:"",component:LoginComponent
  },
   {
    path:"home",component:HomeComponent
   },
   {
   path:"products",component:ProductsComponent ,canActivate:[DataService]
   },{
    path:"productdetails",component:ProductdetailsComponent,canActivate:[DataService]
   },{
    path:"cart",component:CartComponent,canActivate:[DataService]
   },
   {
    path:"selling",component:SellingComponent,canActivate:[DataService]
   },
   {
    path:"login",component:LoginComponent
   },
   {
    path:"signup",component:SignupComponent
   },
   {
    path:"**",component:PagenotfoundComponent
   }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ProductChildComponent,
    SellingComponent,
    AddsellingproductsComponent,
    ProductdetailsComponent,
    UpdatesellingproductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
