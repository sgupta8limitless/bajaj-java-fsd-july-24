import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResponse, ProductResponse, ProductsResponse } from '../interfaces/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = "http://localhost:8080/api/v1/products"

  constructor(private httpClient:HttpClient) { }

  create(product:any):Observable<ProductResponse>
  {
    let headers = new HttpHeaders({
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem("ecommerce_token")}`
    })

    return this.httpClient.post<ProductResponse>(this.productUrl,product,{headers:headers})

  }

  index():Observable<ProductsResponse>
  {
    let headers = new HttpHeaders({
      "Authorization":`Bearer ${localStorage.getItem("ecommerce_token")}`
    })

    return this.httpClient.get<ProductsResponse>(this.productUrl+'/index',{headers:headers})

  }

  delete(id:any):Observable<DeleteResponse>
  {
    let headers = new HttpHeaders({
      "Authorization":`Bearer ${localStorage.getItem("ecommerce_token")}`
    })

    return this.httpClient.delete<DeleteResponse>(this.productUrl+"/"+id,{headers:headers})
  }

}
