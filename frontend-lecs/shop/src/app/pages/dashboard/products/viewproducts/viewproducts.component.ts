import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../interfaces/UserResponse';

@Component({
  selector: 'app-viewproducts',
  standalone: true,
  imports: [],
  templateUrl: './viewproducts.component.html',
  styleUrl: './viewproducts.component.css'
})
export class ViewproductsComponent implements OnInit {

  products:Product[] = []

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    
    this.productService.index().subscribe((response)=>{
      console.log(response);
      this.products = response.data;
    })
    
  }

}
