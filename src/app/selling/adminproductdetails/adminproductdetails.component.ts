import { Component ,OnInit} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MainproductsService } from 'src/app/mainproducts.service';

@Component({
  selector: 'app-adminproductdetails',
  templateUrl: './adminproductdetails.component.html',
  styleUrls: ['./adminproductdetails.component.scss']
})
export class AdminproductdetailsComponent implements OnInit{

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

  //ADDD TO CART
  addToCart(index:number){
    this.dataServiceRef.cartAddItems(this.productItem[index])
    
  }

  //addSimilarProductsToCart
  addSimilarProductsToCart(index:number,productItem:any){
   this.dataServiceRef.cartAddItems(this.productItem[index])
   
  }
 
}
