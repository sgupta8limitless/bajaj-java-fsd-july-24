import { CartItem } from './../interfaces/UserResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartResponse } from '../interfaces/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartUrl = "http://localhost:8080/api/v1/cartitems"

  constructor(private httpClient:HttpClient) { }

  findByUser():Observable<CartResponse>
  {
    let headers = new HttpHeaders({
      "Authorization":`Bearer ${localStorage.getItem("ecommerce_token")}`
    })
    return this.httpClient.get<CartResponse>(this.cartUrl+"/user",{headers:headers});
  }


  create(cartItem:any):Observable<any>
  {
    let headers = new HttpHeaders({
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem("ecommerce_token")}`
    })
    return this.httpClient.post<any>(this.cartUrl,cartItem,{headers:headers})
  }

  update(cartItem:any,id:any):Observable<CartItem>
  {
    let headers = new HttpHeaders({
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem("ecommerce_token")}`
    })

    return this.httpClient.put<CartItem>(this.cartUrl+"/"+id,cartItem,{headers:headers});

  }


}
