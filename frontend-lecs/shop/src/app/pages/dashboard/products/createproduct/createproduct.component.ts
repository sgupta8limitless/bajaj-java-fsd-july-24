import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-createproduct',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css'
})
export class CreateproductComponent {

  constructor(private productService:ProductService){}

  name=new FormControl("",[])
  price=new FormControl("",[])
  quantity=new FormControl("",[])
  imageUrl=new FormControl("",[])

  productForm = new FormGroup({
    name:this.name,
    price:this.price,
    quantity:this.quantity,
    imageUrl:this.imageUrl
  })


  createUser()
  {
    if(this.productForm.valid)
    {
      this.productService.create(this.productForm.value).subscribe((response=>{
        console.log(response)
        this.productForm.reset()
      }))
    }
  }

}
