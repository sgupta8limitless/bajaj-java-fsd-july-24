import { ProductComponent } from './product/product.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // observable:Observable

  constructor()
  {

    //  this.observable = new Observable((subscribe)=>{

    //   subscribe.next("One");
    //   subscribe.next("Two");
    //   subscribe.next("three");
    //   subscribe.complete();

    // })

  }


  ngOnInit(): void {
    
    

    
  }


  // showProduct = false


  // proname = "Samsung M51"
  // proprice = "23000"
  // procategory = "Electronics"
  // procountry = "India"


  // toggleComponent()
  // { 
  //   this.showProduct = !this.showProduct
  // }

  // changeCategory()
  // {
  //   this.procategory = "Clothing"
  // }


  
  

}
