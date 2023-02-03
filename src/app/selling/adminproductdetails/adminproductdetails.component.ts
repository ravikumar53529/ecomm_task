import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MainproductsService } from 'src/app/mainproducts.service';

@Component({
  selector: 'app-adminproductdetails',
  templateUrl: './adminproductdetails.component.html',
  styleUrls: ['./adminproductdetails.component.scss'],
})
export class AdminproductdetailsComponent implements OnInit, AfterViewChecked {
  finalProducts: any;
  productItem: Array<any> = [];
  prodcutId: number | undefined;
  constructor(
    private mainProductRef: MainproductsService,
    private dataServiceRef: DataService
  ) {}

  ngOnInit(): void {
    this.mainProductRef.getMockApi().subscribe((data) => {
      this.finalProducts = data;
      this.prodcutId = this.mainProductRef.sellingadminprodcutId;
      for (let x of this.finalProducts) {
        if (x.id == this.prodcutId) {
          this.productItem = [x];
        }
      }
    });
  }

  //category Items filtering
  categoryItems(apiProducts: any, item: any) {
    return apiProducts.filter(
      (product: any) => product.category == item.category
    );
  }
  ngAfterViewChecked(): void {}
  //ADDD TO CART
  addToCart(index: number) {
    // console.log(this.productItem[index]);
    this.dataServiceRef.cartAddItems(this.productItem[index]);
  }
  //addSimilarproctstoCart(this for only existing products)
  addSimilarProductsToCartForExisting(item: object) {
    this.dataServiceRef.cartAddItems(item);
  }

  //addSimilarProductsToCart(this is for seperate similar items)
  addSimilarProductsToCart(productItem: object) {
    this.dataServiceRef.cartAddItems(productItem);
  }
}
