import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddadminproductsComponent } from '../addadminproducts/addadminproducts.component';
import { MainproductsService } from '../mainproducts.service';


@Component({
  selector: 'app-upateadminproducts',
  templateUrl: './upateadminproducts.component.html',
  styleUrls: ['./upateadminproducts.component.scss']
})
export class UpateadminproductsComponent implements OnInit {
   finalProducts:any;
   adminUpdateProductsId:any;
   updateProductsData:FormGroup;
   productItem:any=[];
   products:any;
   productItemResponse:any;
   sellerInformationArray:any;
  constructor(private matDialogRef:MatDialogRef<AddadminproductsComponent>,private mainProductServiceRef:MainproductsService,private fb:FormBuilder,private router:Router){
  //srvice data
  this.mainProductServiceRef.getMockApi().subscribe((data)=>{
    this.products=data;
    this.adminUpdateProductsId=this.mainProductServiceRef.sellingadminprodcutId;
    for(let item of this.products){
      if(item.id==this.adminUpdateProductsId){
        this.productItemResponse=item;
      }
    }
    //popup values
    this.editProduct(this.productItemResponse)
  })
  //formbuilder
    this.updateProductsData=this.fb.group({
      productId:[''],
    title:[''],
    quantity:[''],
    rating:[''],
    price:[''],
    image:[''],
    // imageUrls:new FormArray([]),
    category:[''],
    subcategory:[''],
    sellerInformation:new FormArray([])
  });
 
  

  };
  
  ngOnInit(): void {
    this.mainProductServiceRef.getMockApi().subscribe((data)=>{
      this.finalProducts=data;
    })
  }

  //editProduct(patch values)
  editProduct(product:any){
    console.log(product)
    this.updateProductsData.patchValue({
   productId:product.id,
    title:product.title,
    quantity:product.quantity,
    rating:product.rating,
    price:product.price,
    image:product.image,
    category:product.category,
    subcategory:product.subcategory
    
   })
  
  }
  //existing Images
  existingImages(images:any[]){
  console.log(images)
  }
//  get imageUrls(){
//   return (<FormArray>this.updateProductsData.get('imagesUrls')).controls;
//  }
  

  //sellerDetails
  //getSeller form array

  get sellerDetails(){
    return (<FormArray>this.updateProductsData.get('sellerDetails')).controls;
  }

  sellerFields(){
    return this.fb.group({
      title:new FormControl(),
      brand:new FormControl(),
      price:new FormControl(),
      category:new FormControl(),
      vendor:new FormControl(),  
      imageurl1:new FormControl(),
      imageurl2:new FormControl(),
      imageurl3:new FormControl()
    })
  }
  //addseller Details

  addSellerDetails(){
    let sellerDetailsArray=<FormArray>this.updateProductsData.get(' sellerInformation');
    sellerDetailsArray.push(this.sellerFields());
    return false
  }
  //removeSellerDetails
  removeSellerDetails(index:number){
    this.sellerDetails.splice(index,1)
  }

  //close popup3
  closePopup(){
   this.matDialogRef.close();
  }
  //update product details
  updateProductsDetails(updatedForm:any,id:number){
  console.log(updatedForm.value)
  this.mainProductServiceRef.updateProductDetails(updatedForm.value,id).subscribe((data=>{
  }));
  this.updateProductsData.reset();
  this.matDialogRef.close();

  }

}
