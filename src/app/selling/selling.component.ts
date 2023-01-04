import { Component, OnInit ,AfterViewChecked,AfterViewInit,ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddsellingproductsComponent } from '../addsellingproducts/addsellingproducts.component';
import { DataService } from '../data.service';
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
  //variables for storing prodcuts data from localstorage
  productsDataFromLocalStorage:any=[];
  productsDataFromLocalStorageFinal:any=[];
  constructor(private matDialogRef:MatDialog,private test:DataService,private cdRef:ChangeDetectorRef){
    // localStorage.setItem("products",JSON.stringify(this.test.sampleData));
   
  }
  ngOnInit(){
      this.test.s1.subscribe(
        (data:any)=>{
          console.log(data)
        }
      )
      localStorage.setItem("products",JSON.stringify(this.test.sampleData))
  }
  ngAfterViewInit(): void {
    
  }
  ngAfterViewChecked(): void {
    this.productsResponse=localStorage.getItem("products")
    this.sellingData=JSON.parse(this.productsResponse);
    this.cdRef.detectChanges(); 
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

}
