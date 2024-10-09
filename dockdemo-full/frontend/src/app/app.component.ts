import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    
    this.apiService.getProducts().subscribe((response)=>{
      console.log(response)
    })
    
  }

}
