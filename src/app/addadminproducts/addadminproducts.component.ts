import { Component } from '@angular/core';
import { FormArray, FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MainproductsService } from '../mainproducts.service';

@Component({
  selector: 'app-addadminproducts',
  templateUrl: './addadminproducts.component.html',
  styleUrls: ['./addadminproducts.component.scss']
})
export class AddadminproductsComponent {
  addAdminproductDetails:FormGroup

 constructor(private matDialogRef:MatDialogRef<AddadminproductsComponent>,private mainProductsRef:MainproductsService,private fb:FormBuilder){
 this.addAdminproductDetails=this.fb.group({
  productId:new FormControl(''),
  title:new FormControl(''),
  quantity:new FormControl(''),
  rating:new FormControl(''),
  price:new FormControl(''),
  image:new FormControl(''),
  imagesUrls:new FormArray([]),
  category:new FormControl(''),
  subcategory:new FormControl(''),
  sellerDetails:new FormArray([])
 })
}
 
  get seller(){
    return (<FormArray>this.addAdminproductDetails.get('sellerDetails')).controls
  }
  
  get imageUrls(){
    return (<FormArray>this.addAdminproductDetails.get('imagesUrls')).controls
  }
  imageUrlsFields(){
    return this.fb.group({
      imageurl1:new FormControl(),
      imageurl2:new FormControl(),
      imageurl3:new FormControl(),
    })
  }

  //add image urls
  addImageUrls(){
    let imageUrls=<FormArray>this.addAdminproductDetails.get('imagesUrls');
    imageUrls.push(this.imageUrlsFields())
    return false
  }
  //removeImageUrls
  removeImageUrls(index:number){
  this.imageUrls.splice(index,1)
  }
  SellerDetailsFields(){
    return this.fb.group({
      productPrice:new FormControl(),
      productAddress:new FormControl(),
      productBrand:new FormControl(),
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
  //add new seller details
  addSellerDetails(){
    let sellD=<FormArray>this.addAdminproductDetails.get('sellerDetails');
    sellD.push(this.SellerDetailsFields())
    return false
  }
  //remove seller fields
  removeSellerDetails(index:number){
    this.seller.splice(index,1);

  }
//add product details and posting through json-server mock api
 addAdminProductForm(data:any){
    this.mainProductsRef.postMockApiData(data.value).subscribe((result)=>{
      console.log(result)
    })
    this.addAdminproductDetails.reset();
    this.matDialogRef.close();
 }
 //closeAddAdminDialogComponent
 closeAddAdminDialogComponent(){
  this.matDialogRef.close();
 }

}
