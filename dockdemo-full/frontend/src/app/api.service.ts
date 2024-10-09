import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "/api";

  constructor(private httpClient:HttpClient){}

  getProducts()
  {
    return this.httpClient.get(this.baseUrl+"/products");
  }
  
}
