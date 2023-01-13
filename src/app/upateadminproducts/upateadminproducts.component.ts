import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
   productItem:any;
  constructor(private matDialogRef:MatDialogRef<AddadminproductsComponent>,private mainProductServiceRef:MainproductsService,private fb:FormBuilder){
  this.updateProductsData=this.fb.group({
    id:new FormControl(''),
    title:new FormControl(''),
    quantity:new FormControl(''),
    rating:new FormControl(''),
    price:new FormControl(''),
    category:new FormControl(''),
    subcategory:new FormControl('')
  })

  };
  
  ngOnInit(): void {
    this.mainProductServiceRef.getMockApi().subscribe((data)=>{
      this.finalProducts=data;
      console.log(this.finalProducts)
      console.log(this.finalProducts)
       //productsid
     this.adminUpdateProductsId=this.mainProductServiceRef.sellingadminprodcutId
     console.log(this.adminUpdateProductsId);
      for(let x of this.finalProducts){
       if(x.id==this.adminUpdateProductsId){
       this.productItem=x;
       console.log(this.productItem.id)
       console.log(this.productItem.title)
       console.log(this.productItem.price)
       console.log(this.productItem.quantity)
       console.log(this.productItem.rating.rate)

       }
      }
    })
 
  }
  
  

  //close popup
  closePopup(){
   this.matDialogRef.close();
  }
  //update product details
  updateProductsDetails(updatedForm:any){
  console.log(updatedForm.value)
  }
  

}
