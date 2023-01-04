import { Component ,OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  productData:any=[];
  productFinal:any=[];
  count:number=1;
  totalProductPrice:number=0;
  itemTotalPrice:number=0;
  cartDataVisibil:string="carttablehidden";
  cartemptyimage:string="cart_empty_error_visible";
 constructor(private dataServiceRef:DataService){
   console.log(this.dataServiceRef.cartItemId)
   
 }
 cartItemsArray:any=[];
 ngOnInit(): void {
    this.cartItemsArray=this.dataServiceRef.cartItems;
    this.productData=this.dataServiceRef.cartItems;
    if(this.cartItemsArray.length>0){ 
      this.cartDataVisibil="carttableshow";
      this.cartemptyimage="cart_empty_error_hidden"
    }
    console.log(this.cartItemsArray)
    console.log(this.productData)
    
  //  this.dataServiceRef.getData().subscribe(data=>{
  //   this.productData=data;
  //     for(let x of this.productData){
  //       if(x.id===this.dataServiceRef.cartItemId){
  //         this.productFinal=x
  //          
  //       }
  //     }
  //  })
  
}
//add increment
firstItemPrice:number=0;
priceEnable:boolean=false;
increment(productId:any){
  console.log(productId)
  for(let x of this.productData){
    console.log(x.id)
   if(x.id===productId){
      this.count++ 
      this.productFinal=x;
      this.itemTotalPrice=this.productFinal.price*this.count;
      this.firstItemPrice=this.itemTotalPrice;
      this.priceEnable=true;
    }
   
  // this.count++;
  // for(let eachProduct in this.productData){
  //  console.log(eachProduct)  
  //  console.log(index)
  //  if(eachProduct==index){
  //   console.log("Yes equal");
  //  }
  // }
  //  this.itemTotalPrice=this.productFinal.price*this.count;
}

}
incremenetTesting(product:any){
  if(product.id!=5){
    console.log(this.productFinal)
    this.productFinal.id=(product.id)++;
    this.productFinal.price=product.price*this.productFinal.id;
  }
  
}
decrementTesting(product:any){
  console.log(product.id)
  if(product.id!=3){
    this.productFinal.id=product.id--;
  }
  
}
//decrement
decrement(){
  if(this.count>1)
  this.count--
  this.totalProductPrice=this.productFinal.price*this.count;
}
//ngafterview checked

}
