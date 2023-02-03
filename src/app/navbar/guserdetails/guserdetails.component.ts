import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-guserdetails',
  templateUrl: './guserdetails.component.html',
  styleUrls: ['./guserdetails.component.scss'],
})
export class GuserdetailsComponent {
  googleUser: any;
  googleUserResponse: any;

  constructor(private matDialogRef: MatDialogRef<GuserdetailsComponent>) {}
  ngOnInit() {
    this.googleUser = localStorage.getItem('googleUser');
    this.googleUserResponse = JSON.parse(this.googleUser);
  }
  //popupclick
  popupclick() {
    this.matDialogRef.close();
  }
}
