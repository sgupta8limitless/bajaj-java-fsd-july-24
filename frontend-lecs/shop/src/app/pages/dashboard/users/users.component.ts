import { User } from './../../../interfaces/UserResponse';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: User[] = []

  constructor(private userService:UserService){}

  ngOnInit(): void {
    
      this.userService.getAllUsers().subscribe((response)=>{
        this.users = response.data;
      })
    
  }


}


