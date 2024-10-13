
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent {

  constructor(private userService:UserService,private router:Router){}

  name = new FormControl("",[
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl("",[
    Validators.required,
    Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
  ])

  createUserForm = new FormGroup({
    name:this.name,
    email:this.email
  })

  createUser()
  {

    console.log(this.createUserForm)

      if(this.createUserForm.status=="VALID")
      { 
          this.userService.createUser( this.createUserForm.value).subscribe(
            (response)=>{
              console.log(response)
              this.router.navigate(["/dashboard/users"])
            }
          )
      }
      
  }

}
