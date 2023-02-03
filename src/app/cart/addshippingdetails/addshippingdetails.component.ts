import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
interface shippinguser {
  fullname: string;
  phonenumber: number;
  email: string;
  address: string;
}
@Component({
  selector: 'app-addshippingdetails',
  templateUrl: './addshippingdetails.component.html',
  styleUrls: ['./addshippingdetails.component.scss'],
})
export class AddshippingdetailsComponent {
  @ViewChild('shippingdetailsform') shippingForm: any;
  usersShippingDetails: shippinguser[] = [];
  constructor(
    private matDialogRef: MatDialogRef<AddshippingdetailsComponent>
  ) {}
  //shippingDetailsForm
  shippingDetails(shippingDetails: any) {
    console.log(shippingDetails.value);
    this.usersShippingDetails.push(shippingDetails.value);
    // console.log(this.usersShippingDetails[0].email);
    shippingDetails.form.reset();
    this.matDialogRef.close();
    Swal.fire('Shipping details saved');
  }
}
