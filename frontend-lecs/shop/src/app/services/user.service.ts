import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserResponse } from '../interfaces/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userUrl = "http://localhost:8080/api/v1/users"

  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<UserResponse>
  {
    return this.httpClient.get<UserResponse>(this.userUrl)
  }

  createUser(user:any):Observable<UserResponse>
  {

    let headers = new HttpHeaders({
      "Content-Type":"application/json"
    })

    return this.httpClient.post<UserResponse>(this.userUrl,user,{headers:headers})
  }





}
