import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { ServiceoneComponent } from './service/serviceone/serviceone.component';
import { ServicetwoComponent } from './service/servicetwo/servicetwo.component';

export const routes: Routes = [
    {path:"",component:ProductComponent},
    {path:"about/:id/:name",component:AboutComponent,title:"About"},
    {path:"service/:id",component:ServiceComponent,
        title:"Service",
        children:[
        {path:"service1",component:ServiceoneComponent},
        {path:"service2",component:ServicetwoComponent}
    ]},
    {path:"product",component:ProductComponent}
];
