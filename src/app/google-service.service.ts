
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
const oAuthConfig:AuthConfig={
  //url of the provider
  issuer: 'https://accounts.google.com',
  //it protect from unautherized urls
  strictDiscoveryDocumentValidation:false,
  redirectUri:'http://localhost:4200/home',
  clientId:'230349870390-paau2as6f9ua7rd35ipggvqnp411ncl0.apps.googleusercontent.com',
  scope: 'openid profile email',
  showDebugInformation: true,
}
@Injectable({
  providedIn: 'root'
})
export class GoogleServiceService {

  constructor(private readonly outhService:OAuthService) {
   
   }
  googleSignIn(){
    this.outhService.configure(oAuthConfig)
    this.outhService.loadDiscoveryDocument().then(()=>{
    this.outhService.tryLoginCodeFlow().then(()=>{
    if(!this.outhService.hasValidAccessToken()){
          this.outhService.initLoginFlow();
        }else{
          this.outhService.loadUserProfile().then((userprofile)=>{
            console.log(JSON.stringify(userprofile))
          
          })
        }
      })
    })
   }
}
