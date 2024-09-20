import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { CreateuserComponent } from './pages/dashboard/createuser/createuser.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    
    {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"home",component:HomeComponent,canActivate:[authGuard]},
    {path:"signup",component:SignupComponent},
    {path:"dashboard",component:DashboardComponent,children:[
        {path:"users",component:UsersComponent},
        {path:"createuser",component:CreateuserComponent}
    ]},
    {path:"**",component:NotfoundComponent},
    
];
