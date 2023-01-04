import { Component,OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit{

  productData:any=[]
  addedProducts:any=[]
  productRes=[{
    id:1,name:"ravi"
  },
  {
    id:2,name:"raju"
  }]
  constructor(private dataServiceRef:DataService){}
  ngOnInit(): void {
    this.dataServiceRef.getData().subscribe(data=>{
         this.productData=data
         console.log(this.productData)
         for(let x of this.productData){
          if(x.id==this.dataServiceRef.productId){
            this.productData=[x]
            console.log(this.addedProducts)
          }
         }
    })
  }
  array:any=[]
  //cartItemId
  cart(index:number){
     console.log(this.productData[index])
    // this.dataServiceRef.gettingCartItemId(x);
    // this.array.push(this.productData[x])
    // console.log(this.array)
    this.dataServiceRef.cartAddItems(this.productData[index])
   }

}

