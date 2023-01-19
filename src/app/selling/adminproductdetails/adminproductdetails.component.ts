import { Component ,OnInit,AfterViewChecked} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MainproductsService } from 'src/app/mainproducts.service';

@Component({
  selector: 'app-adminproductdetails',
  templateUrl: './adminproductdetails.component.html',
  styleUrls: ['./adminproductdetails.component.scss']
})
export class AdminproductdetailsComponent implements OnInit,AfterViewChecked{

  finalProducts:any;
  productItem:any=[];
  prodcutId:any;
  constructor(private mainProductRef:MainproductsService,private dataServiceRef:DataService){}
  
  ngOnInit(): void {
    this.mainProductRef.getMockApi().subscribe((data)=>{
      console.log(data);
      this.finalProducts=data;
      this.prodcutId=this.mainProductRef.sellingadminprodcutId;
      console.log(this.prodcutId)
      for(let x of this.finalProducts){
        if(x.id==this.prodcutId){
         this.productItem=[x];
        }
      }
    })
  }


  //category Items filtering
  categoryItems(apiProducts:any,item:any){
    return apiProducts.filter((product:any)=>product.category==item.category)
  }
  ngAfterViewChecked(): void {
    
  }
  //ADDD TO CART
  addToCart(index:number){
    console.log(index)
    console.log(this.productItem[index])
    this.dataServiceRef.cartAddItems(this.productItem[index])
  }
  //addSimilarproctstoCart(this for only existing products)
  addSimilarProductsToCartForExisting(item:any){
    // let item=this.finalProducts.filter((item:any)=>{
    //     return item.id==id
    // })
    console.log(item)
    this.dataServiceRef.cartAddItems(item)
  }

  //addSimilarProductsToCart(this is for seperate similar items)
  addSimilarProductsToCart(productItem:any){
    console.log(productItem)
  this.dataServiceRef.cartAddItems(productItem)
   
  }
 
}
