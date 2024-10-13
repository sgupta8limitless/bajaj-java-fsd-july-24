import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CreateuserComponent } from './pages/dashboard/users/createuser/createuser.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { CreateproductComponent } from './pages/dashboard/products/createproduct/createproduct.component';
import { ViewproductsComponent } from './pages/dashboard/products/viewproducts/viewproducts.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    
    // public routes 
    {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},

    // user routes 
    {path:"home",component:HomeComponent,canActivate:[authGuard]},
    {path:"cart",component:CartComponent,canActivate:[authGuard]},
    {path:"profile",component:ProfileComponent,canActivate:[authGuard]},
    

    // admin routes 
    {path:"dashboard",component:DashboardComponent,canActivate:[authGuard],children:[
        {path:"",component:CreateuserComponent},
        {path:"createproduct",component:CreateproductComponent},
        {path:"viewproducts",component:ViewproductsComponent}
    ]},


    {path:"**",component:NotfoundComponent},
    
];
