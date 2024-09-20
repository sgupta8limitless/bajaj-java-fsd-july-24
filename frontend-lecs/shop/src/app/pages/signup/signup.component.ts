import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private userService:UserService){}

  name = new FormControl("",[])
  username = new FormControl("",[])
  password = new FormControl("",[])

  registerForm = new FormGroup({
    name:this.name,
    username:this.username,
    password:this.password
  })



  registerUser()
  {
    if(this.registerForm.valid)
    {
      this.userService.createUser(this.registerForm.value).subscribe((response)=>{
        console.log(response)
      })
    }
  }



}
