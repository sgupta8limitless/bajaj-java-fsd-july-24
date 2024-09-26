import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/UserResponse';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    products:Product[] = []

    constructor(private productService:ProductService,private cartService:CartService){}

    ngOnInit(): void {
      
      this.productService.index().subscribe((response)=>{
        console.log(response);
        this.products = response.data;
      })
      
    }

    addToCart(id:any)
    {
      let cartItem = {
        product:{
          id:id
        },
        quantity:1
      }

      this.cartService.create(cartItem).subscribe((response)=>{
        console.log(response)
      })

    }


}
