import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  customerDetails: Array<any> = [];
  // signUpDataresponse from local storage
  signUpDataresponse: Array<any> = [];
  //passwords matching related variables
  passwordMatch: boolean = false;
  passwordmatching: string = '';
  //file size related variable
  FileSize: number | undefined;
  fileEvent: object = {};
  eventRes: object = {};
  filesizeValue: boolean = false;
  fileTypeMessage: boolean = true;
  signUpForm = new FormGroup({
    userFullname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    userSurname: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPhoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    userFavouriteColor: new FormControl('', Validators.required),
    userFile: new FormControl('', [Validators.required]),
    userAddress: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
    userConfirmPassword: new FormControl('', Validators.required),
  });

  //Reactive form validations
  get userName() {
    return this.signUpForm.get('userFullname');
  }
  get userSurname() {
    return this.signUpForm.get('userSurname');
  }
  get userEmail() {
    return this.signUpForm.get('userEmail');
  }
  get userPhoneNumber() {
    return this.signUpForm.get('userPhoneNumber');
  }
  get userPassword() {
    return this.signUpForm.get('userPassword');
  }
  get userConfirmPassword() {
    return this.signUpForm.get('userConfirmPassword');
  }
  get userFavouriteColor() {
    return this.signUpForm.get('userFavouriteColor');
  }
  get userFile() {
    return this.signUpForm.get('userFile');
  }
  get userAddress() {
    return this.signUpForm.get('userAddress');
  }
  //passwordmatching
  passwordMatching(pw: string, cpw: string) {
    if (pw == cpw) {
      this.passwordMatch = true;
      this.passwordmatching = 'form-control is-valid';
    } else {
      this.passwordMatch = false;
      this.passwordmatching = 'form-control is-invalid';
    }
  }
  //getfile details
  getFileDetails(event: any) {
    this.eventRes = event;
    console.log(this.eventRes);
    for (let i = 0; i < event.target.files.length; i++) {
      let type = event.target.files[i].type;
      let size = event.target.files[i].size;
      let finalsize = Math.round(size / 1024) * 10; //from bytes to kb
      this.FileSize = finalsize;
      if (this.FileSize < 60) {
        this.filesizeValue = false;
      } else {
        this.filesizeValue = true;
      }
      if (
        type === 'image/png' ||
        type == 'text/plain' ||
        type === 'image/jpeg'
      ) {
        this.fileTypeMessage = false;
      } else {
        this.fileTypeMessage = true;
      }
      // console.log(Math.round(size / 1024) * 10 + 'kb');
    }
  }

  signUpFormResponse() {
    this.customerDetails.push(this.signUpForm.value);
    console.log(this.customerDetails);
    // set into local storage
    localStorage.setItem(
      'usersighnupdata',
      JSON.stringify(this.customerDetails)
    );
    this.signUpForm.reset();
  }
}
