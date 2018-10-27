import { Component,Inject ,ViewContainerRef } from '@angular/core';
import {Service} from './dynamic/serviceLoader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 6 by Murthy';
  
  constructor(public service:Service, 
          @Inject(ViewContainerRef) viewContainerRef) {

service.setRootViewContainerRef(viewContainerRef)
service.addDynamicComponent()  
  }
}
