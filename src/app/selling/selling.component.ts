import { Component, OnInit ,AfterViewChecked,DoCheck,AfterViewInit,ChangeDetectorRef} from '@angular/core';
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
export class SellingComponent implements OnInit ,AfterViewChecked,AfterViewInit{
  sellingData:any=[];
  productsResponse:any=[];
  updatedSellingData:any=[];
  inputSearch:any;
  cartLength:number=0;
  //variables for storing prodcuts data from localstorage
  productsDataFromLocalStorage:any=[];
  productsDataFromLocalStorageFinal:any=[];
  mainProductsFromMainProductsService:any;
  constructor(private matDialogRef:MatDialog,private test:DataService,private cdRef:ChangeDetectorRef,private mainProductRef:MainproductsService,private router:Router,private dataServiceRef:DataService){
    // localStorage.setItem("products",JSON.stringify(this.test.sampleData));
   
    
  }
  ngOnInit(){
      // this.test.s1.subscribe(
      //   (data:any)=>{
      //     console.log(data)
      //   }
      // )
     
      localStorage.setItem("products",JSON.stringify(this.test.sampleData))
        // this.mainProductRef.getDetails().subscribe((data)=>{
        //   this.mainProductsFromMainProductsService=data;
        // })

            // mock Api data
 this.mainProductRef.getMockApi().subscribe((data)=>{
  this.mainProductsFromMainProductsService=data;
})

        // this.loadProductsAfterAdding();
    }
  ngAfterViewInit(): void {
  console.log('hello')
  }
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
updateProducts(x:any){
  this.test.updateSellingProducts(x);
  this.matDialogRef.open(UpdatesellingproductsComponent)
  console.log(x)
  for(let y of this.sellingData){
    if(y.productId==x){
      // this.sellingData.splice(x-1,1,)
    }
  }
  
}
deleteProducts(x:any){
  console.log(x)
  this.productsDataFromLocalStorage=localStorage.getItem("products");
  this.productsDataFromLocalStorageFinal=JSON.parse(this.productsDataFromLocalStorage)
  console.log(this.productsDataFromLocalStorageFinal)
  console.log(x)
  for(let y of this.productsDataFromLocalStorageFinal){
    if((y.productId)===x){
      console.log(this.productsResponse)
      console.log(this.productsDataFromLocalStorageFinal)
      this.productsDataFromLocalStorageFinal.splice(y.productId-1,1)
      console.log(this.productsDataFromLocalStorageFinal)
    }
  }
  localStorage.setItem("products",JSON.stringify(this.productsDataFromLocalStorageFinal))
  // for(let y of this.sellingData ){
  //   if(y.productId===x){
  //     console.log(x)
  //     console.log(y.productId)
  //     console.log(this.sellingData)
  //     this.productsResponse=localStorage.getItem("products")
  //     this.sellingData=JSON.parse(this.productsResponse)
  //     this.updatedSellingData= this.sellingData.slice(x-1,1)
  //     console.log(this.updatedSellingData)
  //     // localStorage.setItem("products",JSON.stringify(this.updatedSellingData))
  //   }
  // }
  
  console.log(x)
}


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
updateProdcutDetails(prodcutId:any){
  alert("Admins are only access to update products");
  this.matDialogRef.open(UpateadminproductsComponent);
  console.log(prodcutId.id);
  console.log(this.mainProductsFromMainProductsService)
   let currentProduct=this.mainProductsFromMainProductsService.find((product:any)=>{
    return  product.id===prodcutId.id;
   
   })
   console.log(currentProduct)
   this.mainProductRef.sellingAdminProductsId(prodcutId.id);
  
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

//loadfunctions after adding products

loadProductsAfterAdding(){
  this.mainProductRef.getMockApi().subscribe((result)=>{
    this.mainProductsFromMainProductsService=result;
  })
}


}
