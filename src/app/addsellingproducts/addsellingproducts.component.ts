import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addsellingproducts',
  templateUrl: './addsellingproducts.component.html',
  styleUrls: ['./addsellingproducts.component.scss']
})
export class AddsellingproductsComponent {

  productDetails:any=[];

 constructor(private dataServiceRef:DataService,private matDialogRef:MatDialogRef<AddsellingproductsComponent>){}
  
 
 addProductDetails=new FormGroup({
    productId:new FormControl(''),
    productName:new FormControl(''),
    productPrice:new FormControl(''),
    productBrand:new FormControl(''),
    productModel:new FormControl(''),
    sellerAddress:new FormArray([])
  })
  get addressControls(){
     return (<FormArray>this.addProductDetails.get('sellerAddress')).controls
  }
  addProductDetailsResponse(){
    console.log(this.addProductDetails.value)
    this.productDetails.push(this.addProductDetails.value)
    console.log(this.productDetails)
    if(this.productDetails.length>0){
      for(let x of this.productDetails){
      
        this.dataServiceRef.sampleData.push(x)  
      }
      console.log(this.dataServiceRef.sampleData)
      localStorage.setItem("products",JSON.stringify(this.dataServiceRef.sampleData))
      this.productDetails=[]
     
    }
    this.addProductDetails.reset();
  }

  //addseller address form array
  addAddressFormArray(){
  const addAddressControl=new FormControl('null',Validators.required);
  (<FormArray>this.addProductDetails.get('sellerAddress')).push(addAddressControl)
    return false  
}
  //deleteseller address form array
  deleteAddressFormArray(index:number){
     console.log(index)
     let sellerAddress=(this.addProductDetails.get('sellerAddress')) as FormArray;
     sellerAddress.removeAt(index);
  }
  //close closeAddSellingDialog
  closeAddSellingDialog(){
    this.matDialogRef.close();
  }
}
