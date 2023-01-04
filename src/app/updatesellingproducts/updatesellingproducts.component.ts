import { Component,OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updatesellingproducts',
  templateUrl: './updatesellingproducts.component.html',
  styleUrls: ['./updatesellingproducts.component.scss']
})
export class UpdatesellingproductsComponent implements OnInit {
  productsResponse:any=[];
  prductResponseAfterParse:any=[]
  productId:any;
 @ViewChild('updateForm') updateData: any;
  name:string="ravi"
  productObj:any;
  //variables for getting product data from localstorage
  productsDataFromLocalStorage:any=[]
  productsDataFromLocalStorageResult:any=[]
  constructor(private dataServiceRef:DataService){
    
  }
  ngOnInit(): void {
    this.productId=this.dataServiceRef.updateSellingProductId;
    console.log(this.dataServiceRef.updateSellingProductId)
    console.log(this.productId)
    this.productsResponse=localStorage.getItem("products");
    this.prductResponseAfterParse=JSON.parse(this.productsResponse)
    console.log(this.prductResponseAfterParse)
    for(let x of this.prductResponseAfterParse){
      if(x.productId==this.productId){
        this.productObj=x
        console.log(this.productObj)
      }
    }

    
  }
  ngAfterViewChecked(): void {
  
  }
  updateProducts(x:any){
  console.log(x)
  console.log(this.productId)
  this.productsDataFromLocalStorage=localStorage.getItem("products")
  this.productsDataFromLocalStorageResult=JSON.parse(this.productsDataFromLocalStorage)
  for(let y of this.productsDataFromLocalStorageResult){
    if(y.productId==this.productId){
      console.log(this.productId)
      this.productsDataFromLocalStorageResult.splice(this.productId-1,1,x)
      localStorage.setItem("products",JSON.stringify(this.productsDataFromLocalStorageResult))
    }
  }
  this.updateData.reset();
  }
}
