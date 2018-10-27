//our root app component
import {Component, VERSION, ViewChild, ElementRef}
   from '@angular/core'

@Component({
  selector: 'app-ref',
  template: `
    <div>
      <h2>Angular  Template Reference Variable ({{name}})</h2>
      Created by Murthy 
      <p>First Name</p>
      <input type="text" #firstName>
      <p>Last Name</p>
      <input type="text" #lastName>
      <br><br>
      <button (click)="show(lastName)">Show</button>
      <hr>
      <p>Full Name: {{ fullName }}</p>
    </div>
  `,
})
export class TemplateRefComponent {
  name:string;
  fullName: string;
  @ViewChild('firstName') nameInputRef: ElementRef;
  constructor() {
    this.name = `v${VERSION.full}`
  }
  show(lastName: HTMLInputElement){
    this.fullName = this.nameInputRef.nativeElement.value + ' ' + lastName.value;
  }
}
