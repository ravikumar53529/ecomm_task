import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  customerDetails:any=[];
  // signUpDataresponse from local storage
  signUpDataresponse:any=[];
  //passwords matching related variables
  passwordMatch:boolean=false
  passwordmatching:string=""
  //file size related variable
  FileSize:any;
  fileEvent:any;
  eventRes:any;
  filesizeValue:boolean=false;
  fileTypeMessage:boolean=true;
  signUpForm=new FormGroup({
    userFullname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    userSurname:new FormControl('',[Validators.required,Validators.minLength(5)]),
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    userPhoneNumber:new FormControl('',[Validators.required,Validators.minLength(5)]),
    userFavouriteColor:new FormControl('',Validators.required),
    userFile:new FormControl('',[Validators.required]),
    userAddress:new FormControl('',Validators.required),
    userPassword:new FormControl('',Validators.required),
    userConfirmPassword:new FormControl('',Validators.required)

  })

  //Reactive form validations
  get userName(){
    return this.signUpForm.get('userFullname');
  }
  get userSurname(){
    return this.signUpForm.get('userSurname')
  }
  get userEmail(){
    return this.signUpForm.get('userEmail')
  }
  get userPhoneNumber(){
    return this.signUpForm.get('userPhoneNumber')
  }
  get userPassword(){
    return this.signUpForm.get('userPassword')
  }
  get userConfirmPassword(){
    return this.signUpForm.get('userConfirmPassword')
  }
  get userFavouriteColor(){
    return this.signUpForm.get('userFavouriteColor')
  }
  get userFile(){
      return this.signUpForm.get('userFile')
  }
  get userAddress(){
    return this.signUpForm.get('userAddress')
  }
   //passwordmatching
   passwordMatching(pw:string,cpw:string){
    console.log(pw)
    console.log(cpw)
    if(pw==cpw){
        this.passwordMatch=true
        this.passwordmatching="form-control is-valid"
    }else{
      this.passwordMatch=false
      this.passwordmatching="form-control is-invalid"
    }
   }
   //getfile details
   getFileDetails(event:any){
    this.eventRes=event;
    console.log(this.userFile);
     for(let i=0;i<event.target.files.length;i++){
      let type=event.target.files[i].type;
      let size=event.target.files[i].size;
      let finalsize=((Math.round(size/1024))*10);//from bytes to kb
      this.FileSize=finalsize;
      if(this.FileSize<60){
        this.filesizeValue=false 
      }else{
        this.filesizeValue=true
      }
      if(type==="image/png" || type=="text/plain" || type==="image/jpeg" ){
         this.fileTypeMessage=false
      }else{
        this.fileTypeMessage=true
      }
      console.log(this.FileSize)
      console.log(type)
      console.log((Math.round(size/1024))*10+"kb")

     }
   }
   //checking 
     checking(event: any){
      console.log(this.userFile)
      // for(let i=0;i<this.fileEvent.target.files.length;i++){
      //   let size=this.fileEvent.target.files[i].size;
      //   let finalsize=((Math.round(size/1024))*10);//from bytes to kb
      //   this.FileSize=finalsize;
      // }
      // console.log(this.fileEvent)
      // console.log(event)
      // console.log(this.signUpForm)
      
     }
   //getFilesize details
   getFileDetails1(c:any){
    console.log(c.value)
      if(13<60){
        return null;
      }else{
        return {'filesizeValue':true}
      }
   }

   signUpFormResponse(){
    console.log(this.signUpForm)
    this.customerDetails.push(this.signUpForm.value);
    // set into local storage
    console.log(this.signUpForm)
    localStorage.setItem("usersighnupdata",JSON.stringify(this.customerDetails));
    console.log(this.customerDetails);
    this.signUpForm.reset();
  } 
}
