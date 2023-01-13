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
  //mock api getting
  getMockApi():Observable<Mainproducts[]>{
    return this.http.get<Mainproducts[]>(this.mockApi);
  }
  //mock api posting
 postMockApiData(data:any){
  return this.http.post(this.mockApi,data)
 }
//   postProductDetails(data:any){
//     return this.http.post(this.url,JSON.stringify(data));
//   }

//sellingAdminProductsId
sellingAdminProductsId(id:any){
 this.sellingadminprodcutId=id;
}

}
