import { Component,AfterContentInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
DataService
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent  implements AfterViewInit{
  cartTotalPrice:any;
constructor(private dataServiceRef:DataService){
}
ngAfterViewInit(): void {
  this.cartTotalPrice=this.dataServiceRef.cartFinalPrice;
}

}
