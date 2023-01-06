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
  eachProductPrice:any=[];//It contains all cart items
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
    this.eachProductPrice=this.dataServiceRef.cartItems;
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
incremenetTesting(index:number){
  for(let i=0;i<this.cartItemsArray.length;i++){
    this.countNumber.push(1)
  }
  console.log(index)
  if(this.countNumber[index]!=5){
    this.countNumber[index]+=1;
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
decrementTesting(index:any){
  
  if(this.countNumber[index]!=1){
    this.countNumber[index]-=1;
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
deleteFromCart(index:number){
console.log(index)
console.log(this.cartItemsArray)
 this.cartItemsArray.splice(index,1);
 console.log(this.cartItemsArray)
}
//removeAllItemsFromCart
removeAllItemsFromCart(){
  console.log(this.cartItemsArray);
  this.cartItemsArray=[];
  this.cartemptyimage="cart_empty_error_visible";
  this.cartDataVisibil="carttablehidden";
}

//proceeded to payment
proceededToPayment(){
  
}
}
