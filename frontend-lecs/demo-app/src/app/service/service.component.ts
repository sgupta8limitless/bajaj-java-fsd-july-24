import { Component } from '@angular/core';
import { ServiceoneComponent } from './serviceone/serviceone.component';
import { ServicetwoComponent } from './servicetwo/servicetwo.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [ServiceoneComponent,ServicetwoComponent,RouterOutlet],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
