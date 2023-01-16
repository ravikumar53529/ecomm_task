import { Component ,OnInit,DoCheck} from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { DataService } from '../data.service';

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
 constructor(private dataServiceRef:DataService){
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
ngDoCheck(): void {
  if(this.cartItemsArray.length>0){
    this.totalProductPrice=this.prices.reduce((x:any,y:any)=>(x+y))
  }

  //cartLength
   this.cartLength=this.dataServiceRef.cartItems.length;

}
//add increment
name:number=0;
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
 
  // if(product.id!=10){
  //   product.id+=1;
  //  this.productData=product.price;
  //   for(let items of this.cartItemsArray){
  //     if(items.id==product.id){
  //       this.ProductPrice=items.price;
  //       console.log(this.ProductPrice)
  //       console.log(product.id)
  //       product.price=this.ProductPrice+this.ProductPrice;
  //       this.totalProductPrice=product.price;
  //     }

  //   }
  
  // }   
  
}
//decrement product
decrementTesting(index:any,product:any){
  this.prices[index]=product.price;
  if(this.countNumber[index]!=1){
    this.countNumber[index]-=1;
    this.prices[index]=product.price*this.countNumber[index];
    console.log(this.prices) 
  }

  // if(product.id!=1){
  //   console.log(product.price)
  //   product.id-=1;
  //   this.productData=product.price;
  //   for(let items of this.cartItemsArray){
  //     if(items.id==product.id){
  //       this.ProductPrice=items.price;
  //       product.price=this.ProductPrice-this.ProductPrice;
  //       this.totalProductPrice=product.price;
  //     }
  //   }
  // }   
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
}
