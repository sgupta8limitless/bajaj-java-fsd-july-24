import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductService } from '../../services/product.service';
import { CartItem, Product } from '../../interfaces/UserResponse';
import { CartService } from '../../services/cart.service';
import { response } from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    products:Product[] = []
    cartItems:CartItem[] = []

    constructor(private productService:ProductService,private cartService:CartService){}

    ngOnInit(): void {
      
      this.productService.index().subscribe((response)=>{
        console.log(response);
        this.products = response.data;
      })

      // fetching cart products to check for products in cart 

      this.cartService.findByUser().subscribe((response)=>{
        console.log(response);
        this.cartItems=response.data;
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


        // adding product to cart item temporarily for instant update of UI

        this.cartItems.push(cartItem);

        console.log(this.cartItems)

      })

    }

    checkIfExistInCart(id:any)
    {
      return this.cartItems.some((cartItem)=>{
        return cartItem.product?.id === id;
      })
    }

    extractQuantity(id:any)
    {
      let cartItem = this.cartItems.find((cartItem)=>{
        return cartItem.product?.id === id
      })

      return cartItem?.quantity;
    }

    updateItem(id:any,value:number)
    {
      let cartItem = this.cartItems.find((cartItem)=>{
        return cartItem.product?.id === id
      })

      if(cartItem?.quantity!==undefined)
      {
        cartItem.quantity += value
      }

      this.cartService.update(cartItem,cartItem?.id).subscribe((response)=>{
        console.log(response)
      })
      

    }

}
