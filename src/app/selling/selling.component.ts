import { Component, OnInit ,AfterViewChecked,ChangeDetectorRef,} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddadminproductsComponent } from '../addadminproducts/addadminproducts.component';
import { AddsellingproductsComponent } from '../addsellingproducts/addsellingproducts.component';
import { DataService } from '../data.service';
import { MainproductsService } from '../mainproducts.service';
import { UpateadminproductsComponent } from '../upateadminproducts/upateadminproducts.component';
import { UpdatesellingproductsComponent } from '../updatesellingproducts/updatesellingproducts.component';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.scss']
})
export class SellingComponent implements OnInit ,AfterViewChecked{
  sellingData:any=[];
  productsResponse:any=[];
  updatedSellingData:any=[];
  inputSearch:any;
  cartLength:number=0;
  //variables for storing prodcuts data from localstorage
  productsDataFromLocalStorage:any=[];
  productsDataFromLocalStorageFinal:any=[];
  mainProductsFromMainProductsService:any;
  tempProducts:any;
  constructor(private matDialogRef:MatDialog,private test:DataService,private cdRef:ChangeDetectorRef,private mainProductRef:MainproductsService,private router:Router,private dataServiceRef:DataService){ }
  ngOnInit(){
        // mock Api data
        this.mainProductRef.getMockApi().subscribe((data)=>{
          this.mainProductsFromMainProductsService=data;
          this.tempProducts=data;
        
        })
 }
 

 //Related to Products page
  ngAfterViewChecked(): void {
    this.productsResponse=localStorage.getItem("products")
    this.sellingData=JSON.parse(this.productsResponse);
    this.cdRef.detectChanges(); 
    //cart length
    this.cartLength= this.dataServiceRef.cartItems.length;
  }
   
  openDialog(){
  this.matDialogRef.open(AddsellingproductsComponent);
  }

// updateProducts(x:any){
//   this.test.updateSellingProducts(x);
//   this.matDialogRef.open(UpdatesellingproductsComponent)
//   console.log(x)
//   for(let y of this.sellingData){
//     if(y.productId==x){
      
//     }
//   }
  
// }
// deleteProducts(x:any){
//   console.log(x)
//   this.productsDataFromLocalStorage=localStorage.getItem("products");
//   this.productsDataFromLocalStorageFinal=JSON.parse(this.productsDataFromLocalStorage)
//   console.log(this.productsDataFromLocalStorageFinal)
//   console.log(x)
//   for(let y of this.productsDataFromLocalStorageFinal){
//     if((y.productId)===x){
//       console.log(this.productsResponse)
//       console.log(this.productsDataFromLocalStorageFinal)
//       this.productsDataFromLocalStorageFinal.splice(y.productId-1,1)
//       console.log(this.productsDataFromLocalStorageFinal)
//     }
//   }
//   localStorage.setItem("products",JSON.stringify(this.productsDataFromLocalStorageFinal))
  
//   console.log(x)
// }


// sellingData=[{
//   "id":1,"productName":"watch","price":2000,"brand":"fastrack","model":"fasttrack-s32","phoneNumber":"944115353529","gmail":"galinki.ravi33@gmail.com"
// },
// {
//   "id":2,"productName":"phone","price":20000,"brand":"samsung","model":"samsung-galaxy","phoneNumber":"8008007328","gmail":"galinki.ravi@gmail.com"
// }];


//Admin products
//add admin products
addAdminProducts(){
  this.matDialogRef.open(AddadminproductsComponent)
}

//add admin prodcuts dirctly to the cart 
addAdminProdcutsToCart(index:number){
this.test.cartAddItems(this.mainProductsFromMainProductsService[index])
}

//update admin products 
//access only to admins
updateProdcutDetails(prodcutItem:any){
  alert("Admins are only access to update products");
  this.matDialogRef.open(UpateadminproductsComponent);
  console.log(prodcutItem);
  console.log(this.mainProductsFromMainProductsService)
   let currentProduct=this.mainProductsFromMainProductsService.find((product:any)=>{
    return  product.id===prodcutItem.id;
   
   })
   console.log(currentProduct)
   this.mainProductRef.sellingAdminProductsId(prodcutItem.id);
  
}

  //adminProductsview
  adminProductDeatils(prodcut:any){
  this.mainProductRef.sellingAdminProductsId(prodcut.id);
  }


//delete admin products
//only access to admins 
deleteProdcutDetails(product:any){
  alert("Admins are only access to delete products");
  console.log(product.id);
  this.mainProductRef.deletePorductDetails(product.id).subscribe((data)=>{
    // console.log(data);
  })

}

//filter based on category
filter(categoryName:any){
  if(this.mainProductsFromMainProductsService.length>0 &&categoryName!="all" ){
     this.mainProductsFromMainProductsService=this.tempProducts;
    this.mainProductsFromMainProductsService=this.mainProductsFromMainProductsService.filter((product:any)=>{
      return product.category==categoryName 
     })
     console.log(this.mainProductsFromMainProductsService)
  }else{
     this.mainProductsFromMainProductsService=this.tempProducts;
  }
 
}
//reloadSellerComponnet()

}
