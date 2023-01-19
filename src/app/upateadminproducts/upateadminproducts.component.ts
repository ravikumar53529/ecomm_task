import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, FormArray, NumberValueAccessor } from '@angular/forms';
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
   productItem:any=[];
   //variables for populating data in upated form
   id:any;
   title:any;
   quantity:number=0;
   rating:number=0;
   price:number=0;
   category:any;
   subcategory:any;
   imageUrl:any;
   imageUrlsArrayLength:any;
   image1:any="hello";
   image2:any;
   image3:any;
   sellerTitle:string="";
   sellerPrice:any;
   sellerbrand:any;
   sellercategory:any;
   sellervendor:any;
   sellerimage1:any;
   sellerimage2:any;
   sellerimage3:any;
   sellerInformationArrayForLength:any;
  constructor(private matDialogRef:MatDialogRef<AddadminproductsComponent>,private mainProductServiceRef:MainproductsService,private fb:FormBuilder){
  this.updateProductsData=this.fb.group({
    id:new FormControl(''),
    title:new FormControl(''),
    quantity:new FormControl(''),
    rating:new FormControl(''),
    price:new FormControl(''),
    image:new FormControl(''),
    imageUrls:new FormArray([]),
    category:new FormControl(''),
    subcategory:new FormControl(''),
    sellerDetails:new FormArray([])
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
       this.productItem=[x];
       console.log(this.productItem)
       console.log(this.productItem[0].id)
       //populating form details in update form
       this.id=this.productItem[0].id
       this.title=this.productItem[0].title;
       this.quantity=this.productItem[0].quantity;
       this.rating=this.productItem[0].rating;
       this.price=this.productItem[0].price;
       this.imageUrl=this.productItem[0].image;
       this.category=this.productItem[0].category
       this.subcategory=this.productItem[0].subcategory;
       this.imageUrlsArrayLength=this.productItem[0].imagesUrls;
       console.log(this.imageUrlsArrayLength.length)
       this.sellerInformationArrayForLength=this.productItem[0].sellerInformation;
       console.log(this.sellerInformationArrayForLength.length)
       //for image urls
        //for sellerImformation
        if(this.imageUrlsArrayLength.length>0){
          for(let i=0;i<this.imageUrlsArrayLength.length;i++){
            this.addImageUrls();
            if(i!=this.imageUrlsArrayLength.length){
              this.image1=this.imageUrlsArrayLength[i].imageurl1;
              this.image2=this.imageUrlsArrayLength[i].imageurl2;
              this.image3=this.imageUrlsArrayLength[i].imageurl3;    
            }
        }
        }
       //for sellerImformation
       if(this.sellerInformationArrayForLength.length>0){
        for(let i=0;i<this.sellerInformationArrayForLength.length;i++){
          this.addSellerDetails();
          if(i!=this.sellerInformationArrayForLength.length){
           this.sellerTitle=this.sellerInformationArrayForLength[i].title;
           this.sellerPrice=this.sellerInformationArrayForLength[i].price;
           this.sellerbrand=this.sellerInformationArrayForLength[i].brand;
           this.sellercategory=this.sellerInformationArrayForLength[i].category;
           this.sellerimage1=this.sellerInformationArrayForLength[i].image;
           this.sellerimage2=this.sellerInformationArrayForLength[i].imageurl2;
           this.sellerimage3=this.sellerInformationArrayForLength[i].imageurl3;
          }
        
        }
       }
       }
      }
    })
  
  }
  
  //get ImageUrls
   get imageUrls(){
    return (<FormArray>this.updateProductsData.get('imageUrls')).controls;
   }

   //add ImageUrl fields
   imageUrlFields(){
    return this.fb.group({
      imageurl1:new FormControl(),
      imageurl2:new FormControl(),
      imageurl3:new FormControl()
    })
   }

  //add image urls to the image urls form array with help of form builder

  addImageUrls(){
    let imageUrls=<FormArray>this.updateProductsData.get('imageUrls');
    imageUrls.push(this.imageUrlFields())
    return false
  }
  //remove image urls
  removeImageUrls(index:number){
    this.imageUrls.splice(index,1);
  }
  

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
    let sellerDetailsArray=<FormArray>this.updateProductsData.get('sellerDetails');
    sellerDetailsArray.push(this.sellerFields());
    return false
  }
  //removeSellerDetails
  removeSellerDetails(index:number){
    this.sellerDetails.splice(index,1)
  }

  //close popup
  closePopup(){
   this.matDialogRef.close();
  }
  //update product details
  updateProductsDetails(updatedForm:any,id:number){
  console.log(updatedForm.value)
  console.log(id)
  this.mainProductServiceRef.updateProductDetails(updatedForm.value,id).subscribe((data=>{
    console.log(data)
  }));
  this.updateProductsData.reset();
  this.matDialogRef.close();
  }
}
