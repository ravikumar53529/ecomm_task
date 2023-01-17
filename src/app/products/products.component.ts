import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
searchItem:any;
public produtsData:any=[]; 
constructor(private serviceData:DataService){
  
}
ngOnInit(){
 this.serviceData.getData().subscribe(data=>{
  this.produtsData=data;
  console.log(this.produtsData)
 })
  
}
getId(x:number){
 this.serviceData.getId(x)
}

//filter items
filter(category:any){
  console.log(category.toLowerCase());
  console.log(this.produtsData)
  if(this.produtsData.length>0 && category!="all"){
   let filteredProducts=this.produtsData.filter((product:any)=>{
     return  product.category===category
   })
  
   this.produtsData=filteredProducts;
   console.log(this.produtsData)
    // filteredProducts.forEach((element:any) => {
    //   console.log(element)
    // });
  }else{
    this.serviceData.getData().subscribe(data=>{
      this.produtsData=data;
      console.log(this.produtsData)
    })
  }
}

}
