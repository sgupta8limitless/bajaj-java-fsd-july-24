import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/UserResponse';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    products:Product[] = []

    constructor(private productService:ProductService){}

    ngOnInit(): void {
      
      this.productService.index().subscribe((response)=>{
        console.log(response);
        this.products = response.data;
      })
      
    }


}
