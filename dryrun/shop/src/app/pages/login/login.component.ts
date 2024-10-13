import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService:UserService,private router:Router){}

 
  username = new FormControl("",[])
  password = new FormControl("",[])

  loginForm = new FormGroup({
   
    username:this.username,
    password:this.password
  })


  login()
  {
    if(this.loginForm.valid)
    {
      this.userService.loginUser(this.loginForm.value).subscribe((response)=>{

        localStorage.setItem("ecommerce_token",response.data.token);

        if(response.data.roles[0].includes("user"))
        {
          this.router.navigate(["/home"])
        }
        else if(response.data.roles[0].includes("admin"))
        {
          this.router.navigate(["/dashboard"])
        }

      })
    }
  }

}
