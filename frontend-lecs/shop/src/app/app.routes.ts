import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { CreateuserComponent } from './pages/dashboard/createuser/createuser.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"dashboard",component:DashboardComponent,children:[
        {path:"users",component:UsersComponent},
        {path:"createuser",component:CreateuserComponent}
    ]},
    {path:"**",component:NotfoundComponent}
];
