import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public produtsData:any=[]; 
constructor(private serviceData:DataService){
  console.log(serviceData.name)
  
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

}
