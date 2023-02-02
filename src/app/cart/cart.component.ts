import { Component ,OnInit,DoCheck} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { AddshippingdetailsComponent } from './addshippingdetails/addshippingdetails.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit,DoCheck{
  productData:any=[];
  productFinal:any=[];
  eachProductPrice:any=[];//It contains all cart items
  count:number=1;
  totalProductPrice:number=0;
  itemTotalPrice:number=0;
  cartLength:number=0;
  cartDataVisibil:string="carttablehidden";
  cartemptyimage:string="cart_empty_error_visible";
 constructor(private dataServiceRef:DataService,private matDialogRef:MatDialog){
   console.log(this.dataServiceRef.cartItemId)
   
 }
 cartItemsArray:any=[];
 ngOnInit(): void {
    this.cartItemsArray=this.dataServiceRef.cartItems;
    this.eachProductPrice=this.dataServiceRef.cartItems;
    this.productData=this.dataServiceRef.cartItems;
    if(this.cartItemsArray.length>0){ 
      console.log(this.cartItemsArray.length)
      this.cartDataVisibil="carttableshow";
      this.cartemptyimage="cart_empty_error_hidden"
    }else{
      this.cartDataVisibil="carttablehidden";
      this.cartemptyimage="cart_empty_error_visible"
    }
  
    this.prices=this.cartItemsArray.map((data:any)=>Number(`${data.price}`))
    console.log(this.prices);
  
}
ngDoCheck(): void {
  if(this.cartItemsArray.length>0){
    this.totalProductPrice=this.prices.reduce((x:any,y:any)=>(x+y));
    this.dataServiceRef.totalCartPrice(this.totalProductPrice)
  }

  //cartLength
   this.cartLength=this.dataServiceRef.cartItems.length;

}
ProductPrice:number=0;
//incerment product
countNumber:number[]=[];
countPrice:number=0;
temp:number=0;
prices:any[]=[];
incremenetTesting(index:number,product:any){
  this.prices[index]=product.price;
  for(let i=0;i<this.cartItemsArray.length;i++){
    this.countNumber.push(1);
  }
  console.log(index)
  if(this.countNumber[index]!=5){
    this.countNumber[index]+=1;
    this.prices[index]=product.price*this.countNumber[index];
    console.log(this.prices)
  }
}
//decrement product
decrementTesting(index:any,product:any){
  this.prices[index]=product.price;
  if(this.countNumber[index]!=1){
    this.countNumber[index]-=1;
    this.prices[index]=product.price*this.countNumber[index];
    console.log(this.prices) 
  }

} 
//delete individual item form cart
deleteFromCart(index:number,product:any){
console.log(index)
console.log(this.cartItemsArray)
if(this.cartItemsArray.length>0){
  if(this.cartItemsArray.length!=1){
    this.cartItemsArray.splice(index,1);
    console.log(this.cartItemsArray);
    this.prices[index]=product.price*this.countNumber[index];
    this.prices.splice(index,1);
  }else{
    this.cartItemsArray.splice(index,1);
    console.log(this.cartItemsArray);
    this.prices[index]=product.price*this.countNumber[index];
    this.prices.splice(index,1);
    this.cartemptyimage="cart_empty_error_visible";
    this.cartDataVisibil="carttablehidden";
  }
 
}

}
//removeAllItemsFromCart
removeAllItemsFromCart(){
  console.log(this.cartItemsArray);
  this.cartItemsArray.splice(0,this.cartItemsArray.length);
  this.cartemptyimage="cart_empty_error_visible";
  this.cartDataVisibil="carttablehidden";
}

//proceeded to payment
proceededToPayment(){
  
}
//addshipping details
addShippingDetails(){
 this.matDialogRef.open(AddshippingdetailsComponent)
}
}
