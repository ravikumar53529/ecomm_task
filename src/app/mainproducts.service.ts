import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mainproducts } from './mainproducts';
@Injectable({
  providedIn: 'root'
})
export class MainproductsService {
  mainproduct:string="watch";
  private url="../assets/data/mainproducts.json";
  constructor(private http:HttpClient) { }

  getDetails(): Observable<Mainproducts[]> {
    return this.http.get<Mainproducts[]>(this.url);
  }


}
