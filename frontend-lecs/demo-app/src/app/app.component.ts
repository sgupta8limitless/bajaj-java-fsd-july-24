import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent,AboutComponent,ServiceComponent,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
