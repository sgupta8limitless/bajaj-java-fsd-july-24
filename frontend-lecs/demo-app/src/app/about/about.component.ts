import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private activatedRoute:ActivatedRoute,private router:Router){

      console.log(this.activatedRoute.snapshot.paramMap.get("id"))

      let id = Number(this.activatedRoute.snapshot.paramMap.get("id"));

      if(id===2)
      {   

          this.router.navigate(["/service/1"]);

      }

  }



  

}
