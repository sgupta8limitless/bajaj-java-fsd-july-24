import { Component, input, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges,OnInit,OnDestroy {

 @Input() name = "";
 @Input() price = "";
 @Input() category = "";
 @Input() country = ""




 constructor()
 {

  console.log("constructor called")


 }

 ngOnChanges(changes: SimpleChanges): void {
  
    console.log("on chnages called")

    console.log(changes)
  
 }

 ngOnInit(): void {
  
  console.log("on init called")
  
 }

 ngOnDestroy(): void {
  
  console.log("component destroyed")
  
 }


  


 



}
