import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddadminproductsComponent } from '../addadminproducts/addadminproducts.component';
import { AddsellingproductsComponent } from '../addsellingproducts/addsellingproducts.component';
import { DataService } from '../data.service';
import { MainproductsService } from '../mainproducts.service';
import { UpateadminproductsComponent } from '../upateadminproducts/upateadminproducts.component';
import { UpdatesellingproductsComponent } from '../updatesellingproducts/updatesellingproducts.component';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.scss'],
})
export class SellingComponent implements OnInit, AfterViewChecked {
  sellingData: Object = [];
  productsResponse: any = [];
  updatedSellingData: Object = [];
  inputSearch: string = '';
  cartLength: number = 0;
  //variables for storing prodcuts data from localstorage
  productsDataFromLocalStorage: Object = [];
  productsDataFromLocalStorageFinal: Array<any> = [];
  mainProductsFromMainProductsService: any;
  tempProducts: Object = [];
  private subscriptionName: Subscription | undefined;
  constructor(
    private matDialogRef: MatDialog,
    private test: DataService,
    private mainProductRef: MainproductsService,
    private router: Router,
    private dataServiceRef: DataService,
    private cdref: ChangeDetectorRef
  ) {
    // mock Api data
    this.subscriptionName = this.mainProductRef
      .getMockApi()
      .subscribe((data) => {
        this.mainProductsFromMainProductsService = data;
        this.tempProducts = data;
      });
  }
  ngOnInit() {
    // mock Api data
    this.mainProductRef.getMockApi().subscribe((data) => {
      this.mainProductsFromMainProductsService = data;
      this.tempProducts = data;
      console.log(typeof data);
      console.log(typeof this.tempProducts);
    });
  }

  //docheck

  //Related to Products page
  ngAfterViewChecked(): void {
    this.productsResponse = localStorage.getItem('products');
    this.sellingData = JSON.parse(this.productsResponse);
    //cart length
    this.cartLength = this.dataServiceRef.cartItems.length;
    this.cdref.detectChanges();
  }

  openDialog() {
    this.matDialogRef.open(AddsellingproductsComponent);
  }

  //Admin products
  //add admin products
  addAdminProducts(): void {
    this.matDialogRef.open(AddadminproductsComponent);
  }

  //add admin prodcuts dirctly to the cart
  addAdminProdcutsToCart(index: number): void {
    this.test.cartAddItems(this.mainProductsFromMainProductsService[index]);
  }

  //update admin products
  //access only to admins
  updateProdcutDetails(prodcutItem: any): void {
    alert('Admins are only access to update products');
    this.matDialogRef.open(UpateadminproductsComponent);
    console.log(prodcutItem);
    console.log(this.mainProductsFromMainProductsService);
    let currentProduct = this.mainProductsFromMainProductsService.find(
      (product: any) => {
        return product.id === prodcutItem.id;
      }
    );
    console.log(currentProduct);
    this.mainProductRef.sellingAdminProductsId(prodcutItem.id);
  }

  //adminProductsview
  adminProductDeatils(product: any): void {
    this.mainProductRef.sellingAdminProductsId(product.id);
  }

  //delete admin products
  //only access to admins
  deleteProdcutDetails(product: any): void {
    alert('Admins are only access to delete products');
    console.log(product.id);
    this.mainProductRef
      .deletePorductDetails(product.id)
      .subscribe((data) => {});
  }

  //filter based on category
  filter(categoryName: string) {
    if (
      this.mainProductsFromMainProductsService.length > 0 &&
      categoryName != 'all'
    ) {
      this.mainProductsFromMainProductsService = this.tempProducts;
      this.mainProductsFromMainProductsService =
        this.mainProductsFromMainProductsService.filter((product: any) => {
          return product.category == categoryName;
        });
      console.log(this.mainProductsFromMainProductsService);
    } else {
      this.mainProductsFromMainProductsService = this.tempProducts;
    }
  }
  //reloadSellerComponnet()
  reloadSellerComponent(): void {
    // mock Api data
    this.mainProductRef.getMockApi().subscribe((data) => {
      this.mainProductsFromMainProductsService = data;
      this.tempProducts = data;
    });
  }
}
