import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../interfaces/UserResponse';

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





}
