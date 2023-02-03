import {
  Component,
  AfterContentInit,
  AfterViewInit,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { DataService } from '../data.service';

DataService;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements AfterViewInit, OnInit {
  cartTotalPrice: number = 0;
  strikeCheckout: any = null;

  constructor(
    private dataServiceRef: DataService,
    private cdref: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.stripePaymentGateway();
  }

  ngAfterViewInit(): void {
    this.cartTotalPrice = this.dataServiceRef.cartFinalPrice;
    this.cdref.detectChanges();
  }

  checkout(amount: number) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'sk_test_51MWxB4SFsfoUhrVYOHfCP6JYpw0vo5J0QAedAqSbTKXGbS0DdZW4dZiVDfvGqBewmxYLZKUfld8w44NKUKM4J0gR00aAzENxtW',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });

    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100,
    });
  }

  stripePaymentGateway() {
    if (!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement('script');
      scr.id = 'stripe-script';
      scr.type = 'text/javascript';
      scr.src = 'https://checkout.stripe.com/checkout.js';

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
          locale: 'auto',
          token: function (token: any) {
            console.log(token);
            alert('Payment via stripe successfull!');
          },
        });
      };

      window.document.body.appendChild(scr);
    }
  }
}
