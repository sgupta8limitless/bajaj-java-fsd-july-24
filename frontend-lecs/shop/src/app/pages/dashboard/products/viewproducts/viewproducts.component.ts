import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../interfaces/UserResponse';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewproducts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './viewproducts.component.html',
  styleUrl: './viewproducts.component.css'
})
export class ViewproductsComponent implements OnInit {

  products:Product[] = []
  updateModalVisible = false

  name=new FormControl("",[])
  price=new FormControl("",[])
  quantity=new FormControl("",[])
  imageUrl=new FormControl("",[])

  updateProductForm = new FormGroup({
    name:this.name,
    price:this.price,
    quantity:this.quantity,
    imageUrl:this.imageUrl
  })

  updateId:number = 0

 

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    
    this.productService.index().subscribe((response)=>{
      console.log(response);
      this.products = response.data;
    })
    
  }


  deleteProduct(id:any,index:any)
  {
    this.productService.delete(id).subscribe(
        (response)=>{
        console.log(response);

        // let index = this.products.findIndex((product)=>{
        //   return product.id === id;
        // })

        this.products.splice(index,1);

      },
    )
  }


  showUpdateModal(product:Product)
  {
    
    this.updateId = product.id;
    this.updateProductForm.patchValue(
      {name:product.name,price:product.price?.toString(),quantity:product.quantity?.toString(),imageUrl:product.imageUrl}
    )
    this.updateModalVisible = true
  }

  hideUpdateModal(event:any)
  { 

    if(event.target?.className==="modal")
    {
      this.updateModalVisible = false
    }
    
  }

  updateProduct()
  {
    console.log(this.updateProductForm.value);
  }

}



// subscribe(()=>{},()=>{})
