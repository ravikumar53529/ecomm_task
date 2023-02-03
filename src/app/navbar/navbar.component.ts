import {
  Component,
  AfterViewChecked,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GuserdetailsComponent } from './guserdetails/guserdetails.component';
import { ImagecropComponent } from './imagecrop/imagecrop.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewChecked, OnInit {
  admin: string = '';
  adminCheck: boolean = false;
  basicNavitems: string = '';
  googleUserFromLocalStorage: any;
  googleUserResult: any;
  //imagecropp
  imageUpdated: string =
    'https://media.istockphoto.com/vectors/businessman-profile-shopping-and-ecommerce-background-pattern-vector-id953840568?k=6&m=953840568&s=170667a&w=0&h=GCsJi0INligI_7aUTscT28OQB6PN-XZYSvLSLCIwXL0=';
  constructor(
    private dataServiceRef: DataService,
    private detectionRef: ChangeDetectorRef,
    private matDialogRef: MatDialog,
    private routes: Router
  ) {}
  ngOnInit(): void {}
  ngAfterViewChecked(): void {
    this.googleUserFromLocalStorage = localStorage.getItem('googleUser');
    this.googleUserResult = JSON.parse(this.googleUserFromLocalStorage);
    //imagecropped pic
    if (this.googleUserResult) {
      this.imageUpdated = this.googleUserResult.photoUrl;
    } else if (this.dataServiceRef.croppedPic) {
      this.imageUpdated = this.dataServiceRef.croppedPic;
    } else {
      this.imageUpdated =
        'https://media.istockphoto.com/vectors/businessman-profile-shopping-and-ecommerce-background-pattern-vector-id953840568?k=6&m=953840568&s=170667a&w=0&h=GCsJi0INligI_7aUTscT28OQB6PN-XZYSvLSLCIwXL0=';
    }

    this.adminCheck = this.dataServiceRef.adminCheck1;
    if (this.adminCheck || JSON.parse(this.googleUserFromLocalStorage)) {
      this.admin = 'adminnotlogged';
      this.basicNavitems = 'adminsuccess';
    } else {
      this.basicNavitems = 'adminnotlogged';
      this.admin = 'adminsuccess';
    }
    this.detectionRef.detectChanges();
  }

  imageFile: Object = {};

  //imageCrop
  imageCrop(imageEvent: Object) {
    this.imageFile = imageEvent;
    localStorage.setItem('imageFile', JSON.stringify(imageEvent));
    localStorage.removeItem('googleUser');
    this.matDialogRef.open(ImagecropComponent);
    this.dataServiceRef.navbarImageResize(imageEvent);
  }
  //imageCrop2
  imageCropFormNavbar() {
    this.matDialogRef.open(ImagecropComponent);
  }
  //gooleUserDetailsFromNavbar
  gooleUserDetailsFromNavbar() {
    this.matDialogRef.open(GuserdetailsComponent);
  }
  //Logout
  logout() {
    localStorage.removeItem('googleUser');
    this.basicNavitems = 'adminnotlogged';
    this.admin = 'adminsuccess';
    this.routes.navigate(['/login']);
  }
}
