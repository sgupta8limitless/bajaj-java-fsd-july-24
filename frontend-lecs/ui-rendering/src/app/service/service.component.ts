import { HttpClient } from '@angular/common/http';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit {


 

  constructor(private userService:UserService){

  }


  ngOnInit(): void {
   
     this.userService.getUsers().subscribe((response)=>{
      console.log(response)
     })



  }


 
}
