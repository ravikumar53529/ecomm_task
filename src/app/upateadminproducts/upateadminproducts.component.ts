import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddadminproductsComponent } from '../addadminproducts/addadminproducts.component';
import { MainproductsService } from '../mainproducts.service';
import { Updateform } from '../interfaces/updateform';
@Component({
  selector: 'app-upateadminproducts',
  templateUrl: './upateadminproducts.component.html',
  styleUrls: ['./upateadminproducts.component.scss'],
})
export class UpateadminproductsComponent implements OnInit {
  finalProducts: object = {};
  adminUpdateProductsId: number = 0;
  updateProductsData: FormGroup;
  products: any;
  productItemResponse: any;
  constructor(
    private matDialogRef: MatDialogRef<AddadminproductsComponent>,
    private mainProductServiceRef: MainproductsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //srvice data
    this.mainProductServiceRef.getMockApi().subscribe((data) => {
      this.products = data;
      console.log(this.products);
      this.adminUpdateProductsId =
        this.mainProductServiceRef.sellingadminprodcutId;
      for (let item of this.products) {
        if (item.id == this.adminUpdateProductsId) {
          this.productItemResponse = item;
        }
      }
      //popup values
      this.editProduct(this.productItemResponse);
    });
    //formbuilder
    this.updateProductsData = this.fb.group({
      productId: [''],
      title: [''],
      quantity: [''],
      rating: [''],
      price: [''],
      image: [''],
      imageUrls: this.fb.array([]),
      category: [''],
      subcategory: [''],
      // sellerInformation: new FormArray([]),
    });
  }

  ngOnInit(): void {
    this.mainProductServiceRef.getMockApi().subscribe((data) => {
      this.finalProducts = data;
    });
  }

  //getting images
  get imageUrls(): FormArray {
    return this.updateProductsData.get('imageUrls') as FormArray;
  }

  //newImageUrl
  newImageUrl(): FormGroup {
    return this.fb.group({
      imageurl: '',
    });
  }
  //addImage
  addNewImage() {
    this.imageUrls.push(this.newImageUrl());
  }
  //removeimage
  removeImageUrl(i: number) {
    this.imageUrls.removeAt(i);
  }
  //editProduct(patch values)
  editProduct(product: any) {
    console.log(product);
    this.updateProductsData.patchValue({
      productId: product.id,
      title: product.title,
      quantity: product.quantity,
      rating: product.rating,
      price: product.price,
      image: product.image,
      category: product.category,
      subcategory: product.subcategory,
    });
  }
  //setExistingImages
  setExistingImages() {}
  //close popup3
  closePopup() {
    this.matDialogRef.close();
  }
  //update product details
  updateProductsDetails(updatedForm: any, id: number) {
    console.log(updatedForm.value);
    this.mainProductServiceRef
      .updateProductDetails(updatedForm.value, id)
      .subscribe((data) => {});
    this.updateProductsData.reset();
    this.matDialogRef.close();
    // this.router.navigate(['/products'])
  }
}
