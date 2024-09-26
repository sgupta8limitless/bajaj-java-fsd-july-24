import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartUrl = "http://localhost:8080/api/v1/cartitems"

  constructor(private httpClient:HttpClient) { }


  create(cartItem:any):Observable<any>
  {
    let headers = new HttpHeaders({
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem("ecommerce_token")}`
    })
    return this.httpClient.post<any>(this.cartUrl,cartItem,{headers:headers})
  }


}
