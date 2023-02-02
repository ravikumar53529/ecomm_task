import {Component, NgModule } from '@angular/core';
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
import { PaymentComponent } from './payment/payment.component';
import { MainproductsService } from './mainproducts.service';
import { AddadminproductsComponent } from './addadminproducts/addadminproducts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import {MatInputModule} from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpateadminproductsComponent } from './upateadminproducts/upateadminproducts.component';
import { AdminproductdetailsComponent } from './selling/adminproductdetails/adminproductdetails.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImagecropComponent } from './navbar/imagecrop/imagecrop.component';
import{CoolSocialLoginButtonsModule} from '@angular-cool/social-login-buttons'
import { OAuthModule } from 'angular-oauth2-oidc';
//abacri
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { GuserdetailsComponent } from './navbar/guserdetails/guserdetails.component';
import { AddshippingdetailsComponent } from './cart/addshippingdetails/addshippingdetails.component';
const routes:Routes=[
  {
     path:"",component:LoginComponent
  },
   {
    path:"home",component:HomeComponent
   },
   {
    path:"imagecrop",component:ImagecropComponent
   },
   {
   path:"products",component:ProductsComponent ,canActivate:[DataService]
   },{
    path:"productdetails",component:ProductdetailsComponent,canActivate:[DataService]
   },{
    path:"cart",component:CartComponent,canActivate:[DataService]
   },{
    path:"payment",component:PaymentComponent,canActivate:[DataService]
   },
   {
    path:"selling",component:SellingComponent,canActivate:[DataService]
   },
   {
    path:'selling/adminproductdetails',component:AdminproductdetailsComponent,canActivate:[DataService]
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
    SignupComponent,
    LogoutComponent,
    ProductChildComponent,
    SellingComponent,
    AddsellingproductsComponent,
    ProductdetailsComponent,
    UpdatesellingproductsComponent,
    CartComponent,
    PaymentComponent,
    AddadminproductsComponent,
    UpateadminproductsComponent,
    AdminproductdetailsComponent,
    ImagecropComponent,
   LoginComponent,
   GuserdetailsComponent,
   AddshippingdetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    MatInputModule,
    Ng2SearchPipeModule,
    ImageCropperModule,
    CoolSocialLoginButtonsModule,
    OAuthModule.forRoot(),
    SocialLoginModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [DataService,MainproductsService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '745680776261-krrecp52qjcqu5t7ds1ncj64vjaevvga.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
