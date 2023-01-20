import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mainproducts } from './mainproducts';
@Injectable({
  providedIn: 'root'
})
export class MainproductsService {
  mainproduct:string="watch";

  //sellingAdminProductsId
  sellingadminprodcutId:number=0;
  private url="../assets/data/mainproducts.json";
  private mockApi="http://localhost:3000/products";
  constructor(private http:HttpClient) { }
  //local json 
  getDetails(): Observable<Mainproducts[]> {
    return this.http.get<Mainproducts[]>(this.url);
  }
  //mock api getting for local json
  getMockApi():Observable<Mainproducts[]>{
    return this.http.get<Mainproducts[]>(this.mockApi);
  }

  //update product details through json-server mock API
  updateProductDetails(product:any,id:number){
   return this.http.put(this.mockApi+`/`+`${id}`,product)
  }

  //delete Product through json-server mock api
  deletePorductDetails(id:number){
    return this.http.delete(this.mockApi+`/`+`${id}`)
  }
 
  //product data posting json-server mock api
 postMockApiData(data:any){
  return this.http.post(this.mockApi,data)
 }

//sellingAdminProductsId
sellingAdminProductsId(id:any){
 this.sellingadminprodcutId=id;
}
//reloadSellerComponnet()
reloadSellerComponnet(){
  
}
}
