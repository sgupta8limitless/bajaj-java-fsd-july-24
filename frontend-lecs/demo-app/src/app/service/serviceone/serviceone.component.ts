import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-serviceone',
  standalone: true,
  imports: [],
  templateUrl: './serviceone.component.html',
  styleUrl: './serviceone.component.css',
  
})
export class ServiceoneComponent {

  constructor(private route:ActivatedRoute){
    console.log(this.route.snapshot.paramMap)
  }

}
