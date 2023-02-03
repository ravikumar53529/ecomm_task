import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {
  productData: any;
  addedProducts: Array<any> = [];
  constructor(private dataServiceRef: DataService) {}
  ngOnInit(): void {
    this.dataServiceRef.getData().subscribe((data) => {
      this.productData = data;
      for (let x of this.productData) {
        if (x.id == this.dataServiceRef.productId) {
          this.productData = [x];
        }
      }
    });
  }
  array: Array<any> = [];
  //cartItemId
  cart(index: number) {
    // console.log(this.productData[index]);
    this.dataServiceRef.cartAddItems(this.productData[index]);
  }
}
